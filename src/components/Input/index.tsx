import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  id: string;
  title: string;
  label?: string;
  type: HTMLInputTypeAttribute;
};

const Input: React.FC<InputProps> = ({ id, title, type, label }) => {
  return (
    <div id="id" className="flex gap-1 flex-col">
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
        className="border-2 border-solid border-fafafc rounded-lg p-2 h-14"
      />
    </div>
  );
};

export default Input;
