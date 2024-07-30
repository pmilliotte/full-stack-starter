import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { AppRoute, SESSION_TOKEN_NAME } from '~/lib';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui';

export const Actions = (): React.ReactElement => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem(SESSION_TOKEN_NAME);

    return navigate(AppRoute.Home);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onSelect={signOut}
          className="text-red-600 hover:cursor-pointer"
        >
          <FormattedMessage id="common.logout" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
