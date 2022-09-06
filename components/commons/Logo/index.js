import React from "react";
import classNames from "classnames";

export const Logo = ({ className }) => {
  const classes = classNames(className);
  return (
    <img className={classes} src="/static/sunky-logo.svg" alt="Logo Sunky" />
  );
};
