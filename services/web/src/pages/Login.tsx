import { LoginStatus } from '@full-stack-starter/packages/shared';
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { AppRoute } from '~/definitions';

export const Login = (): ReactElement => {
  const token = localStorage.getItem('session');
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const loginStatus = params.get('status');

  if (token !== null) {
    return <Navigate to={AppRoute.Home} />;
  }

  return (
    <div className="container">
      <h2>SST Auth Example</h2>
      <div>
        <a
          href={`${import.meta.env.VITE_APP_API_URL}/auth/google/authorize`}
          rel="noreferrer"
        >
          <button>Sign in with Google</button>
        </a>
      </div>
      {loginStatus === LoginStatus.Error && <div>Something went wrong</div>}
    </div>
  );
};
