import React from "react";
import classNames from "classnames";

export const Normal = ({
  children,
  className,
  disabled,
  loading,
  onClick,
  modifier = "primary",
}) => {
  const isDisabled = disabled || loading;
  const buttonCss = classNames(
    "text-white p-4 border rounded-md text-lg",
    isDisabled && "bg-gray-400 hover:cursor-not-allowed pointer-events-none",
    modifier === "primary" &&
      "bg-yellow-500 hover:bg-white hover:text-yellow-500 border-yellow-500",
    modifier === "secondary" &&
      "bg-purple-500 hover:text-purple-500 border-purple-500",
    modifier === "terciary" &&
      "text-yellow-500 border-yellow-500 bg-yellow-50 hover:bg-white",
    className
  );

  return (
    <button onClick={onClick} className={buttonCss}>
      {children}
    </button>
  );
};
