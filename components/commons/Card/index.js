import React from "react";

export const Card = ({ children, onClick, className = "" }) => {
  return (
    <div onClick={onClick} className={`rounded-md p-8 shadow-xl ${className}`}>
      {children}
    </div>
  );
};
