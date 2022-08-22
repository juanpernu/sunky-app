import classNames from "classnames";
import { Title } from "../../../index";

const Item = ({ icon, name, description }) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <p className="text-2xl mt-4 font-bold text-slate-900">{name}</p>
      <p className="text-lg font-regular text-gray-500">{description}</p>
    </div>
  );
};

export const Icon = ({ items, title }) => {
  const itemsCss = classNames(
    `grid gap-y-16 gap-x-12 mt-12`,
    items.length === 1 && "grid-cols-1",
    items.length === 2 && "grid-cols-2",
    items.length === 3 && "grid-cols-3"
  );

  return (
    <div className="mx-auto text-center lg:max-w-4xl py-20">
      <Title>{title}</Title>
      <div className={itemsCss}>
        {items.map((i) => {
          return (
            <Item icon={i.icon} name={i.name} description={i.description} />
          );
        })}
      </div>
    </div>
  );
};
