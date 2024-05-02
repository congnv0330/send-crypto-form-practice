import { type ComponentProps, forwardRef } from 'react';
import clsx from 'clsx';

export interface InputProps extends ComponentProps<'input'> {
  suffix?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, suffix, ...props }, ref) => {
    return (
      <div className="flex items-center overflow-hidden rounded-2xl bg-div-bound px-4">
        <input
          ref={ref}
          className={clsx(
            'block w-full appearance-none bg-transparent py-4 pr-4 text-sm font-light focus:outline-none',
            className,
          )}
          {...props}
        />
        {suffix && <p className="text-xxs text-right">{suffix}</p>}
      </div>
    );
  },
);
