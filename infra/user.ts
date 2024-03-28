import { EMAIL } from 'packages/shared';
import { Auth as SSTAuth, StackContext, Table, use } from 'sst/constructs';

import { Core } from './core';
import { Web } from './web';

export const User = ({ stack }: StackContext): void => {
  const { api } = use(Core);
  const { site } = use(Web);

  const usersTable = new Table(stack, 'users', {
    fields: {
      [EMAIL]: 'string',
      id: 'string',
    },
    primaryIndex: { partitionKey: EMAIL },
  });

  const auth = new SSTAuth(stack, 'auth', {
    authenticator: {
      handler: 'services/user/src/functions/auth.handler',
      bind: [site, usersTable],
    },
  });

  auth.attach(stack, {
    api,
  });

  api.addRoutes(stack, {
    'GET /sessionGet': 'services/user/src/functions/index.handler',
  });
};
