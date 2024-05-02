import { type ComponentProps, forwardRef } from 'react';
import clsx from 'clsx';

export const Button = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={clsx(
          'block w-full appearance-none rounded-4xl px-6 py-3.5 text-center text-lg font-medium leading-6',
          'bg-purple-400 text-white transition-colors hover:bg-purple-300 disabled:bg-gray-700',
          className,
        )}
        {...props}
      />
    );
  },
);
