import { ReactElement, useContext, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

import { AppRoute, SessionContext } from '~/definitions';
import { trpc } from '~/utils';

export const AuthenticationRequired = (): ReactElement => {
  const { setSession } = useContext(SessionContext);
  const { data: session } = trpc.sessionGet.useQuery();
  const navigate = useNavigate();

  const token = localStorage.getItem('session');
  useEffect(() => {
    if (token !== null && setSession !== undefined && session !== undefined) {
      setSession(session.user);
    }
    if (token === null && session === undefined) {
      return navigate(AppRoute.Login);
    }
  }, [token, setSession, session, navigate]);

  if (token === null) {
    return <Navigate to={AppRoute.Login} />;
  }

  return <Outlet />;
};
