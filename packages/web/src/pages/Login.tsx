import { ReactElement, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { LoginForm } from '~/components';
import { AppRoute, SESSION_TOKEN_NAME } from '~/lib';

export const Login = (): ReactElement => {
  const token = localStorage.getItem(SESSION_TOKEN_NAME);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate(AppRoute.Home);
    }
  }, [navigate, token]);

  return (
    <div className="h-full">
      <div className="relative flex h-full flex-col items-center justify-center md:grid lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-200 flex items-center justify-around text-foreground">
            <img
              src="/starter-logo.svg"
              /* eslint-disable-next-line formatjs/no-literal-string-in-jsx */
              alt="starter-logo"
              className="w-1/2"
            />
          </div>
        </div>
        <div className="lg:p-8 h-full flex flex-col">
          <div className="mx-auto flex-grow flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                <FormattedMessage id="common.title" />
              </h1>
              <p className="text-sm text-muted-foreground">
                <FormattedMessage id="login.slogan" />
              </p>
            </div>
            <LoginForm />
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground mb-8">
            <FormattedMessage id="login.copyright" />
          </p>
        </div>
      </div>
    </div>
  );
};
