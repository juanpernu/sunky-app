import React from "react";
import classNames from "classnames";
import logo from "../../../static/sunky-logo.svg";

export const Logo = ({ className }) => {
  const classes = classNames(className);
  return <img className={classes} src={logo} alt="Logo Sunky" />;
};
