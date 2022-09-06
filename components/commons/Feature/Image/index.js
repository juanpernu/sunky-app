import React from "react";

export const Image = ({ title, copy, imgSrc, imgAlt }) => {
  return (
    <div className="flex md:flex-row flex-col text-left items-center max-w-4xl mx-auto py-20">
      <div className="mb-10 md:mb-0">
        <h2 className="font-bold text-5xl md:text-6xl text-gray-800">
          {title}
        </h2>
        <p className="font-semibold max-w-4xl text-xl text-yellow-500 mt-6">
          {copy}
        </p>
      </div>
      <img className="w-3/4 md:w-1/2" src={imgSrc} alt={imgAlt} />
    </div>
  );
};
