import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';

import { cn } from '@/lib/tailwind/utils';

export type InputVariants = VariantProps<typeof inputVariants>;

export const inputVariants = cva('', {
  variants: {},
  defaultVariants: {},
});

export interface InputProps
  extends React.ComponentProps<'input'>,
    InputVariants {}

export function Input({ className, ...props }: InputProps) {
  return <input className={cn(inputVariants({ className }))} {...props} />;
}
