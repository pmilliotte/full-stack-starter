import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/lib';

// eslint-disable-next-line react-refresh/only-export-components
export const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-full',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
        danger:
          'border-transparent border-0 bg-red-800 border-primary text-white shadow',
        warning:
          'border-transparent border-0 bg-yellow-100 text-yellow-900 border-yellow-900 shadow',
        green:
          'border-transparent border-0 bg-green-200 text-green-900 border-green-900 shadow',
        empty:
          'border-transparent border-0 bg-secondary text-secondary-foreground border-0 border-primary hover:bg-secondary/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = ({
  className,
  variant,
  ...props
}: BadgeProps): React.ReactElement => (
  <div className={cn(badgeVariants({ variant }), className)} {...props} />
);
