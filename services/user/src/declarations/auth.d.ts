import { Session } from 'sst/node/auth';

declare module 'sst/node/auth' {
  export interface SessionTypes {
    user: {
      email: string;
    };
  }
}
