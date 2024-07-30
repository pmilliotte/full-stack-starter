import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { Layout } from '~/components';
import { AppRoute, SESSION_TOKEN_NAME } from '~/lib';

export const Home = (): ReactElement => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const token = params.get('token');

  if (token !== null) {
    localStorage.setItem(SESSION_TOKEN_NAME, token);
  }

  return (
    <Layout>
      <Navigate to={AppRoute.Welcome} />
    </Layout>
  );
};
