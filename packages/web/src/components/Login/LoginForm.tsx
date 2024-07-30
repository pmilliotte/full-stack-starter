import { FormattedMessage } from 'react-intl';

import { cn } from '~/lib';

import { Google } from '../icons';
import { Button } from '../ui';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const LoginForm = ({
  className,
  ...props
}: UserAuthFormProps): React.ReactElement => {
  const onClick = () => {
    window.location.href = `${import.meta.env.VITE_APP_API_URL}/auth/google/authorize`;
  };

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            <FormattedMessage id="login.login" />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-around">
        <Button onClick={onClick} variant="outline" size="icon" className="p-2">
          <Google />
        </Button>
      </div>
    </div>
  );
};
