import { publicProcedure, router } from '@full-stack-starter/packages/trpc';
import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';

export const problemRouter = router({
  problemGet: publicProcedure.query(async () => Promise.resolve(['test'])),
  problemCreate: publicProcedure.mutation(async opts => {
    console.log(opts);
    const x = await Promise.resolve('hello');

    return {
      message: x,
    };
  }),
});

export const handler = awsLambdaRequestHandler({
  router: problemRouter,
  // responseMeta: () => ({
  //   status: 200,
  //   headers: {
  //     'Access-Control-Allow-Origin': 'http://localhost:5173',
  //     'Access-Control-Allow-Methods': 'GET,POST',
  //     'Access-Control-Allow-Headers': 'authorization',
  //   },
  // }),
  // createContext,
});
