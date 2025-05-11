import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';

export type ButtonVariants = VariantProps<typeof buttonVariants>;

const buttonVariants = cva('button', {
  variants: {
    variant: {
      primary: 'primary',
      secondary: 'secondary',
    },
    size: {
      default: '',
      sm: 'small',
      lg: 'large',
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
});

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
