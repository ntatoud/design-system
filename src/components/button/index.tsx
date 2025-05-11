import clsx from 'clsx';
import type React from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  size?: 'small' | 'medium' | 'large';
}

/** Primary UI component for user interaction */
export const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      {...props}
      className={clsx('button', props.className)}
    />
  );
};
