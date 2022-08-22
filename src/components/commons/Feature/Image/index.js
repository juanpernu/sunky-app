export const Image = ({ title, copy, imgSrc, imgAlt }) => {
  return (
    <div className="flex flex-row text-left items-center max-w-4xl mx-auto py-20">
      <div>
        <h2 className="font-bold text-6xl text-gray-800">{title}</h2>
        <p className="font-semibold max-w-4xl text-xl text-yellow-500 mt-6">
          {copy}
        </p>
      </div>
      <img className="w-1/2" src={imgSrc} alt={imgAlt} />
    </div>
  );
};
