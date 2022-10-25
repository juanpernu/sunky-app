import React from "react";
import classNames from "classnames";

export const Subtitle = ({ children, className }) => {
  const subtitleCss = classNames(
    "lg:text-2xl font-bold tracking-tight text-xl text-gray-600 sm:tracking-tight",
    className
  );
  return <h3 className={subtitleCss}>{children}</h3>;
};
