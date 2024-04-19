import { FC } from "react";

type ButtonProps = {
  title: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ onClick, disabled = false, title }) => {
  return (
    <button
      className="bg-green-600 w-96 h-14"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="text-white text-base leading-7 font-semibold">
        {title}
      </span>
    </button>
  );
};

export default Button;
