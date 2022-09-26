import React from "react";
import { useRouter } from "next/router";
import classNames from "classnames";

export const Logo = ({ className }) => {
  const router = useRouter();
  const classes = classNames("hover:cursor-pointer", className);

  const onClickHandler = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <img
      onClick={onClickHandler}
      className={classes}
      src="/static/sunky-logo.svg"
      alt="Logo Sunky"
    />
  );
};
