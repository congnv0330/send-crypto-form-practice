import { type ComponentProps, forwardRef } from 'react';
import clsx from 'clsx';

export interface IInputProps extends ComponentProps<'input'> {
  suffix?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
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
        {suffix && <p className="text-right text-xxs">{suffix}</p>}
      </div>
    );
  },
);
