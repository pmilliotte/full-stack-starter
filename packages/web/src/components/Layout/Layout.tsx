import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { AppRoute } from '~/lib';

import { Separator } from '../ui';
import { Actions } from './Actions';

interface LayoutProps {
  children?: ReactElement;
}

export const Layout = ({ children }: LayoutProps): ReactElement => (
  <div className="h-full">
    <div className="h-full flex flex-col">
      <div className="container flex flex-row flex-none items-center space-y-0 justify-between py-4">
        <Link to={AppRoute.Home}>
          <h2 className="text-xl font-bold">
            <FormattedMessage id="common.title" />
          </h2>
        </Link>
        <div className="ml-auto flex w-full space-x-2 justify-end">
          <Actions />
        </div>
      </div>
      <Separator />
      <div className="md:container grow min-h-0 md:py-6">{children}</div>
    </div>
  </div>
);
