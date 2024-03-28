import { StackContext, StaticSite, use } from 'sst/constructs';

import { Core } from './core';

export const Web = ({ stack }: StackContext): { site: StaticSite } => {
  const { api } = use(Core);

  const site = new StaticSite(stack, 'web', {
    path: 'services/web',
    buildOutput: 'dist',
    buildCommand: 'pnpm run build',
    environment: {
      VITE_APP_API_URL: api.url,
    },
  });

  stack.addOutputs({ SiteUrl: site.url });

  return { site };
};
