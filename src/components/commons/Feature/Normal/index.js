import { Title } from "../../../index";

export const Normal = ({ copy, title, children }) => {
  return (
    <div className="flex flex-col text-center items-center max-w-4xl mx-auto py-20">
      <p className="font-bold text-lg text-yellow-500">{copy}</p>
      <Title>{title}</Title>
      {children}
    </div>
  );
};
