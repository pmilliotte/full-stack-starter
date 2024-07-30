import { TRPCError } from '@trpc/server';
import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import { ApiHandler } from 'sst/node/api';

import { EMAIL } from '@starter/shared';

import { authedProcedure, router } from '~/trpc';

import { User, UserEntity } from '../libs';

export const userRouter = router({
  userSessionGet: authedProcedure.query(async ({ ctx }) => {
    const { Item: user } = await UserEntity.get<User>(
      { [EMAIL]: ctx.user.email },
      {
        attributes: [EMAIL, 'id', 'firstName', 'lastName'],
      },
    );

    // Should never happen
    if (user === undefined) {
      throw new TRPCError({ code: 'NOT_FOUND' });
    }

    return { session: user };
  }),
});

export const handler = ApiHandler(
  awsLambdaRequestHandler({
    router: userRouter,
  }),
);
