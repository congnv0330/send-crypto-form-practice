import { type ComponentProps, forwardRef } from 'react';

export const IconClose = forwardRef<SVGSVGElement, ComponentProps<'svg'>>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M1 1L7 6.99896L13 1L1 13L7.0005 7L13 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);
