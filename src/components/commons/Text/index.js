import classNames from "classnames";

export const Text = ({ children, className }) => {
  const textCss = classNames("mt-4 text-xl text-gray-500", className);

  return <p className={textCss}>{children}</p>;
};
