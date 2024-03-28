import { EMAIL, LoginStatus } from '@full-stack-starter/packages/shared';
import { AuthHandler, GoogleAdapter, Session } from 'sst/node/auth';
import { StaticSite } from 'sst/node/site';

import { UserEntity } from '~/libs';

const GOOGLE_CLIENT_ID = '<YOUR GOOGLE PROJECT ID>';

export const x = EMAIL;
export const y = LoginStatus;

export const handler = AuthHandler({
  providers: {
    google: GoogleAdapter({
      mode: 'oidc',
      clientID: GOOGLE_CLIENT_ID,
      onSuccess: async tokenset => {
        const frontendUrl =
          process.env.IS_LOCAL === 'true'
            ? 'http://localhost:5173'
            : StaticSite.web.url;
        const claims = tokenset.claims();

        if (claims.email === undefined) {
          return {
            statusCode: 302,
            headers: {
              location: `${frontendUrl}/login?status=${LoginStatus.Error}`,
            },
          };
        }

        const { Item: user } = await UserEntity.get({
          email: claims.email,
        });

        if (user === undefined) {
          return {
            statusCode: 302,
            headers: {
              location: `${frontendUrl}/login?status=error`,
            },
          };
        }

        return Promise.resolve(
          Session.parameter({
            redirect: frontendUrl,
            type: 'user',
            properties: {
              email: claims.email,
            },
          }),
        );
      },
    }),
  },
});
