import { StackContext, Table, use } from 'sst/constructs';

import { PARTITION_KEY, SORT_KEY } from '@starter/shared';

import { Core } from './Core';

enum Route {
  TodoCreate = 'POST /todoCreate',
  TodoList = 'GET /todoList',
}

export const Todo = ({ stack }: StackContext): void => {
  const { api } = use(Core);

  const todoTable = new Table(stack, 'todo', {
    fields: {
      [PARTITION_KEY]: 'string',
      [SORT_KEY]: 'string',
    },
    primaryIndex: { partitionKey: PARTITION_KEY, sortKey: SORT_KEY },
  });

  api.addRoutes(stack, {
    [Route.TodoCreate]: 'packages/functions/src/todo/functions/index.handler',
    [Route.TodoList]: 'packages/functions/src/todo/functions/index.handler',
  });

  api.bindToRoute(Route.TodoCreate, [todoTable]);
  api.bindToRoute(Route.TodoList, [todoTable]);
};
