import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  title: string;
  type: HTMLInputTypeAttribute;
  label?: string;
};

const Input: React.FC<InputProps> = ({ title, type, label }) => {
  return (
    <div className="flex w-96 gap-1 flex-col">
      <div className="flex items-center">
        <h2 className="text-4e4958 text-sm font-normal leading-6">{title}</h2>
        {label && (
          <span className="text-c1bccc text-xs font-normal leading-5 ml-2">
            ({label})
          </span>
        )}
      </div>
      <input
        type={type}
        className="border-2 border-solid border-fafafc rounded-lg p-2"
      />
    </div>
  );
};

export default Input;
