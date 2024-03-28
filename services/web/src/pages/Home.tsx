// import { useEffect } from 'react';
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { AppRoute } from '~/definitions';

export const Home = (): ReactElement => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const token = params.get('token');

  if (token !== null) {
    localStorage.setItem('session', token);
  }

  return <Navigate to={AppRoute.Start} />;
};
