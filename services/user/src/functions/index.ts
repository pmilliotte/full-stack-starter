import { EMAIL } from '@full-stack-starter/packages/shared';
import { publicProcedure, router } from '@full-stack-starter/packages/trpc';
import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import { useSession } from 'sst/node/auth';

import { UserEntity } from '~/libs';

export const userRouter = router({
  sessionGet: publicProcedure.query(async () => {
    const session = useSession();

    // Check if user is authenticated
    if (session.type !== 'user') {
      throw new Error('Not authenticated');
    }

    const { Item: user } = await UserEntity.get(
      {
        // [EMAIL]: session.properties.email,
        [EMAIL]: 'session.properties.email',
      },
      { attributes: [EMAIL, 'firstName', 'lastName', 'id'] },
    );

    // Should never happen
    if (user === undefined) {
      throw new Error('Forbidden');
    }

    return { user };
  }),
});

export const handler = awsLambdaRequestHandler({
  router: userRouter,
});
