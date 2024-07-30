import { ResponseHeadersPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { Api, StackContext, StaticSite } from 'sst/constructs';

export const Core = ({
  stack,
  app,
}: StackContext): { api: Api; site: StaticSite } => {
  const api = new Api(stack, 'api', {
    accessLog: {
      retention: 'one_week',
    },
  });

  const site = new StaticSite(stack, 'web', {
    path: 'packages/web',
    buildOutput: 'dist',
    buildCommand: 'pnpm run build',
    environment: {
      VITE_APP_API_URL: api.customDomainUrl ?? api.url,
    },
    cdk: {
      bucket: {
        bucketName: `${stack.stage}-${app.name}-web`,
      },
      distribution: {
        defaultBehavior: {
          responseHeadersPolicy: ResponseHeadersPolicy.SECURITY_HEADERS,
        },
      },
    },
  });

  api.setCors({
    allowHeaders: ['content-type', 'authorization'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    allowOrigins: [
      stack.stage === 'local' ? 'http://localhost:5173' : site.url ?? '',
    ],
  });

  stack.addOutputs({ SiteUrl: site.customDomainUrl ?? site.url });

  stack.addOutputs({
    ApiEndpoint: api.customDomainUrl ?? api.url,
  });

  return {
    api,
    site,
  };
};
