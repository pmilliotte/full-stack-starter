import { AuthHandler, GoogleAdapter, Session } from 'sst/node/auth';
import { Config } from 'sst/node/config';
import { StaticSite } from 'sst/node/site';

import { EMAIL, LOGIN_PATH } from '@starter/shared';

import { UserEntity } from '../libs';

const LOCALHOST = 'http://localhost:5173';

const redirectToLogin = (frontendUrl: string) => ({
  statusCode: 302,
  headers: {
    location: `${frontendUrl}/${LOGIN_PATH}`,
  },
});

export const handler = AuthHandler({
  providers: {
    google: GoogleAdapter({
      mode: 'oidc',
      clientID: Config.GOOGLE_CLIENT_ID,
      onSuccess: async tokenset => {
        const frontendUrl =
          process.env.IS_LOCAL === 'true' ? LOCALHOST : StaticSite.web.url;
        const claims = tokenset.claims();

        if (claims.email === undefined) {
          return redirectToLogin(frontendUrl);
        }

        const { Item: user } = await UserEntity.get({
          [EMAIL]: claims.email,
        });

        if (user === undefined || user.email !== claims.email) {
          return redirectToLogin(frontendUrl);
        }

        return createSession({
          redirect: frontendUrl,
          email: user.email,
          id: user.id,
          firstName: user.firstName,
        });
      },
    }),
  },
});

const createSession = async ({
  email,
  id,
  redirect,
  firstName,
}: {
  email: string;
  id: string;
  redirect: string;
  firstName: string;
}) =>
  await Promise.resolve(
    Session.parameter({
      redirect,
      type: 'user',
      properties: {
        email,
        id,
        firstName,
      },
      options: { expiresIn: '1 day' },
    }),
  );
