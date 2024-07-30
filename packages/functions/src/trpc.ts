import { initTRPC, TRPCError } from '@trpc/server';
import { useSession } from 'sst/node/auth';

const t = initTRPC.create();

export const router = t.router;
export const mergeRouters = t.mergeRouters;
export const publicProcedure = t.procedure;

// Handlers must be wrapped by ApiHandler for useSession()  to work
export const authedProcedure = t.procedure.use(opts => {
  const session = useSession();

  if (session.type !== 'user') {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return opts.next({ ctx: { user: session.properties } });
});
