import { ComponentProps, forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  (props, ref) => (
    <input
      {...props}
      ref={ref}
      className="border-2 border-solid border-fafafc rounded-lg p-2 h-14"
    />
  )
);

export default Input;
