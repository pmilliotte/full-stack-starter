import { todoRouter } from './todo';
import { mergeRouters } from './trpc';
import { userRouter } from './user';

const appRouter = mergeRouters(userRouter, todoRouter);

// Exported for frontend
export type AppRouter = typeof appRouter;
