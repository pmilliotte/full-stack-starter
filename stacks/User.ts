import {
  Config,
  Auth as SSTAuth,
  StackContext,
  Table,
  use,
} from 'sst/constructs';

import { EMAIL } from '@starter/shared';

import { Core } from './Core';

enum Route {
  UserSessionGet = 'GET /userSessionGet',
}

export const User = ({ stack }: StackContext): void => {
  const { api, site } = use(Core);

  const userTable = new Table(stack, 'user', {
    fields: {
      [EMAIL]: 'string',
    },
    primaryIndex: { partitionKey: EMAIL },
  });

  const GOOGLE_CLIENT_ID = new Config.Secret(stack, 'GOOGLE_CLIENT_ID');

  const auth = new SSTAuth(stack, 'auth', {
    authenticator: {
      handler: 'packages/functions/src/user/functions/auth.handler',
      bind: [site, userTable, GOOGLE_CLIENT_ID],
    },
  });

  auth.attach(stack, {
    api,
  });

  api.addRoutes(stack, {
    [Route.UserSessionGet]: {
      function: {
        handler: 'packages/functions/src/user/functions/index.handler',
        timeout: 29,
      },
    },
  });

  api.bindToRoute(Route.UserSessionGet, [userTable]);
};
