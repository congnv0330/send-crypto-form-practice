import { type ComponentProps, forwardRef } from 'react';

export const IconCopy = forwardRef<SVGSVGElement, ComponentProps<'svg'>>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M10.6654 8.60016V11.4002C10.6654 13.7335 9.73203 14.6668 7.3987 14.6668H4.5987C2.26536 14.6668 1.33203 13.7335 1.33203 11.4002V8.60016C1.33203 6.26683 2.26536 5.3335 4.5987 5.3335H7.3987C9.73203 5.3335 10.6654 6.26683 10.6654 8.60016Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6654 4.60016V7.40016C14.6654 9.7335 13.732 10.6668 11.3987 10.6668H10.6654V8.60016C10.6654 6.26683 9.73203 5.3335 7.3987 5.3335H5.33203V4.60016C5.33203 2.26683 6.26536 1.3335 8.5987 1.3335H11.3987C13.732 1.3335 14.6654 2.26683 14.6654 4.60016Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);
