import React from 'react';

const ScrollButton = ({
  classList,
  direction,
  disabled,
  label,
  path,
  scroll,
  size,
}) => (
  <button
    aria-label={`scroll ${label}`}
    disabled={disabled}
    className={classList}
    onClick={() => {
      scroll(direction);
    }}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='currentColor'
      viewBox='0 0 16 16'
    >
      <path fillRule='evenodd' d={path} />
    </svg>
  </button>
);
export default ScrollButton;
