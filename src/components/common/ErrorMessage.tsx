import { ComponentProps, forwardRef } from 'react';
import clsx from 'clsx';

export const ErrorMessage = forwardRef<
  HTMLParagraphElement,
  ComponentProps<'p'>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx('text-red-400 text-xs font-light leading-3', className)}
    {...props}
  />
));
