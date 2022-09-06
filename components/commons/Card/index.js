import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-md p-8 shadow-xl ${className}`}>{children}</div>
  );
};
