import { FC } from "react";

type ButtonProps = {
  title: string;
  disabled?: boolean;
  onClick: () => void;
  type: "submit" | "reset" | "button";
};

const Button: FC<ButtonProps> = ({
  title,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="bg-green-600 w-11/12 h-12 rounded-md"
    >
      <span className="text-white text-base leading-7 font-semibold">
        {title}
      </span>
    </button>
  );
};

export default Button;
