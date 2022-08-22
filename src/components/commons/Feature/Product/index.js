import { Title } from "../../../index";

export const Right = ({ title, copy, imgSrc, imgAlt, children }) => {
  return (
    <div className="mx-auto grid items-center grid-cols-1 gap-y-16 gap-x-12 lg:max-w-4xl lg:grid-cols-2 py-20">
      <div>
        <Title>{title}</Title>
        <p className="font-semibold max-w-4xl text-xl text-yellow-500 mt-6">
          {copy}
        </p>
        {children}
      </div>
      <img className="rounded-lg" src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export const Left = ({ title, copy, imgSrc, imgAlt, children }) => {
  return (
    <div className="mx-auto grid items-center grid-cols-1 gap-y-16 gap-x-12 lg:max-w-4xl lg:grid-cols-2 py-20">
      <img className="rounded-lg" src={imgSrc} alt={imgAlt} />
      <div>
        <Title>{title}</Title>
        <p className="font-semibold max-w-4xl text-xl text-yellow-500 mt-6">
          {copy}
        </p>
        {children}
      </div>
    </div>
  );
};
