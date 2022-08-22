import React from "react";
import classNames from "classnames";

export const Normal = ({
  children,
  className,
  disabled,
  loading,
  onClick,
  modifier,
}) => {
  const isDisabled = disabled || loading;
  const buttonCss = classNames(
    "text-white p-4 bg-yellow-500 hover:bg-white hover:text-yellow-500 border border-yellow-500 rounded-md text-lg",
    isDisabled && "bg-gray-400 hover:cursor-not-allowed pointer-events-none",
    modifier === "secondary" &&
      "bg-purple-500 hover:text-purple-500 border-purple-500",
    className
  );

  return (
    <button onClick={onClick} className={buttonCss}>
      {children}
    </button>
  );
};
