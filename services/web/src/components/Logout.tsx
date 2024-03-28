import { ReactElement, useContext } from 'react';

import { SessionContext } from '~/definitions';

export const Logout = (): ReactElement => {
  const { setSession } = useContext(SessionContext);

  console.log('setsession', setSession);

  const signOut = () => {
    localStorage.removeItem('session');
    setSession !== undefined && setSession(undefined);
  };

  return (
    <div>
      <p>Yeah! You are signed in.</p>+{' '}
      <button onClick={signOut}>Sign out</button>+{' '}
    </div>
  );
};
