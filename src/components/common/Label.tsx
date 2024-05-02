import { ComponentProps, forwardRef } from 'react';
import clsx from 'clsx';

export const Label = forwardRef<HTMLLabelElement, ComponentProps<'label'>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={clsx('text-xs font-light leading-3 text-gray-700', className)}
      {...props}
    />
  ),
);
