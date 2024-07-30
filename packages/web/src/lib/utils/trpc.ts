import { createTRPCReact } from '@trpc/react-query';

import { AppRouter } from '@starter/functions';

export const trpc = createTRPCReact<AppRouter>();
