import { createContext } from 'react';

export type Session = {
  email: string;
  id: string;
  firstName: string;
  lastName: string;
};

export const SessionContext = createContext<{
  session?: Session;
  setSession?: (session: Session | undefined) => void;
}>({});
