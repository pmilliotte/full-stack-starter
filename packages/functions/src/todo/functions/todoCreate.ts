import crypto from 'crypto';
import { z } from 'zod';

import { authedProcedure } from '~/trpc';

import { getTodoEntity } from '../libs/dynamodb';

export const todoCreate = authedProcedure
  .input(
    z.object({
      content: z.string(),
    }),
  )
  .mutation(async ({ input: { content }, ctx: { user } }) => {
    const TodoEntity = getTodoEntity();

    const id = crypto.randomUUID();

    await TodoEntity.put({
      id,
      content,
      creatorId: user.id,
    });

    return { id };
  });
