import { authedProcedure } from '~/trpc';

import { getTodoEntity } from '../libs/dynamodb';

export const todoList = authedProcedure.query(async () => {
  const TodoEntity = getTodoEntity();
  const { Items: todos } = await TodoEntity.query(TodoEntity.name, {});

  return { todos };
});
