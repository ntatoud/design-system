import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';

import { cn } from '@/lib/tailwind/utils';

export type ButtonVariants = VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  cn(
    'relative inline-flex w-fit shrink-0 cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-md py-2 font-medium transition-colors',
    'disabled:cursor-not-allowed disabled:opacity-50'
  ),
  {
    variants: {
      variant: {
        primary:
          'bg-primary hover:bg-primary-hover active:bg-primary-active text-white',
        secondary:
          'bg-secondary hover:bg-secondary-hover active:bg-secondary-active text-gray-800',
      },
      size: {
        default: 'h-9 px-4 has-[>span>svg]:px-3',
        sm: 'h-8 px-3 has-[>span>svg]:px-2.5',
        lg: 'h-10 px-6 has-[>span>svg]:px-4',
      },
      defaultVariants: {
        variant: 'primary',
        size: 'default',
      },
    },
  }
);

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    ButtonVariants {}

/** Primary UI component for user interaction */
export const Button = ({ variant, size, className, ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonVariants({ variant, size, className })}
      {...rest}
    />
  );
};
