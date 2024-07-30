// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Session } from 'sst/node/auth';

declare module 'sst/node/auth' {
  export interface SessionTypes {
    user: {
      email: string;
      id: string;
      firstName: string;
    };
  }
}
