import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { Button, Layout } from '~/components';
import { AppRoute } from '~/lib';

export const Welcome = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="h-full flex items-center justify-around">
        <div className="flex flex-col gap-2">
          <Button onClick={() => navigate(AppRoute.Todos)}>
            <FormattedMessage id="welcome.getTodos" />
          </Button>
          <Button onClick={() => navigate(AppRoute.CreateTodo)}>
            <FormattedMessage id="welcome.createTodo" />
          </Button>
        </div>
      </div>
    </Layout>
  );
};
