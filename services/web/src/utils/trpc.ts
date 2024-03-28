import type { AppRouter } from '@full-stack-starter/services/router';
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>();
