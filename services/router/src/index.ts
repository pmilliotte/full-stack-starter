import { mergeRouters } from '@full-stack-starter/packages/trpc';
import { problemRouter } from '@full-stack-starter/services/problem/src';
import { userRouter } from '@full-stack-starter/services/user/src';

const appRouter = mergeRouters(problemRouter, userRouter);
export type AppRouter = typeof appRouter;
