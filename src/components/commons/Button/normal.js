import React from 'react';
import classNames from 'classnames';

export const Normal = ({ children, className, disabled, loading, onClick }) => {
  const isDisabled = disabled || loading;
  const buttonCss = classNames(
    'mt-4 inline-flex h-12 w-full justify-center rounded-md border p-2 text-xs font-light uppercase text-white shadow-sm transition ease-in-out bg-blue-500 hover:shadow-lg hover:bg-blue-600',
    isDisabled && 'bg-gray-400 hover:cursor-not-allowed pointer-events-none',
    className,
  );

  return (
    <button onClick={onClick} className={buttonCss}>
      {children}
    </button>
  );
};
