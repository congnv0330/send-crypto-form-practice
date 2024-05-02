import { ComponentProps, forwardRef } from 'react';
import clsx from 'clsx';

export const ErrorMessage = forwardRef<
  HTMLParagraphElement,
  ComponentProps<'p'>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx('text-xs font-light leading-3 text-red-400', className)}
    {...props}
  />
));
