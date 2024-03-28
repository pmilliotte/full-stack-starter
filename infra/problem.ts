import { StackContext, use } from 'sst/constructs';

import { Core } from './core';

export const Problem = ({ stack }: StackContext): void => {
  const { api } = use(Core);

  api.addRoutes(stack, {
    'GET /': 'services/problem/src/functions/lambda.handler',
    'GET /problemGet': 'services/problem/src/functions/index.handler',
    'POST /problemCreate': 'services/problem/src/functions/index.handler',
  });
};
