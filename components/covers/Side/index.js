import React from "react";

export const Side = ({ imgSrc, imgAlt, children }) => {
  return (
    <div className="mt-6 max-w-7xl mx-auto h-auto">
      <div className="overflow-hidden w-full sm:h-full h-full grid grid-cols-2 justify-center items-center">
        <div className="z-50">{children}</div>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-full max-h-[800px] object-center object-contain"
        />
      </div>
    </div>
  );
};
