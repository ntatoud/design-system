import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';

import { cn } from '@/lib/tailwind/utils';

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  "focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          'bg-primary hover:bg-primary-hover active:bg-primary-active focus-visible:ring-primary/50 text-white',
        secondary:
          'bg-secondary hover:bg-secondary-hover active:bg-secondary-active focus-visible:ring-secondary/50 text-gray-800',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
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
    ButtonVariants {
  asChild?: boolean;
}

export const Button = ({
  variant,
  size,
  className,
  asChild,
  ...rest
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    />
  );
};
