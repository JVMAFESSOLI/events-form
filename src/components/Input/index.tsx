import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  title: string;
  type: HTMLInputTypeAttribute;
};

export const Input: React.FC<InputProps> = ({ title, type }) => {
  return (
    <div>
      <span>{title}</span>
      <input type={type} />
    </div>
  );
};
