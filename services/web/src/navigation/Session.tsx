import { ReactElement, useState } from 'react';

import { SessionContext, Session as SessionType } from '~/definitions';

export const Session = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [session, setSession] = useState<SessionType>();

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};
