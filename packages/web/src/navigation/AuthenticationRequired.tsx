import { Loader2 } from 'lucide-react';
import { ReactElement, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

import { Layout } from '~/components';
import { AppRoute, SESSION_TOKEN_NAME, trpc } from '~/lib';

import { SessionContext } from './sessionContext';

export const AuthenticationRequired = (): ReactElement => {
  const token = localStorage.getItem(SESSION_TOKEN_NAME);

  return token === null ? <Navigate to={AppRoute.Login} /> : <UserSession />;
};

const UserSession = (): ReactElement => {
  const token = localStorage.getItem(SESSION_TOKEN_NAME);
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      return navigate(AppRoute.Login);
    }
  }, [token, navigate]);

  const { data, error } = trpc.userSessionGet.useQuery();

  useEffect(() => {
    if (error !== null) {
      localStorage.removeItem(SESSION_TOKEN_NAME);

      return navigate(AppRoute.Login);
    }
  }, [error, navigate]);

  if (data === undefined) {
    return (
      <Layout>
        <div className="h-full flex items-center justify-around">
          <Loader2 className="ml-1 h-4 w-4 animate-spin" />
        </div>
      </Layout>
    );
  }

  return (
    <SessionContext.Provider value={data.session}>
      <Outlet />
    </SessionContext.Provider>
  );
};
