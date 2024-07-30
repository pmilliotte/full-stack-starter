import { createContext } from 'react';

export type Session = {
  email: string;
  id: string;
  firstName: string;
  lastName: string;
};

// Should never occur on authenticated routes
const defaultSession = {
  email: 'placeholder@email.com',
  id: 'userId',
  firstName: 'firstName',
  lastName: 'lastName',
} as const;

export const SessionContext = createContext<Session>(defaultSession);
