import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import { ApiHandler } from 'sst/node/api';

import { router } from '~/trpc';

import { todoCreate } from './todoCreate';
import { todoList } from './todoList';

export const todoRouter = router({
  todoList,
  todoCreate,
});

export const handler = ApiHandler(
  awsLambdaRequestHandler({
    router: todoRouter,
  }),
);
