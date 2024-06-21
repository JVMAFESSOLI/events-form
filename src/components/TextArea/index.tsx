import { ComponentProps, forwardRef } from "react";

const Textarea = forwardRef<HTMLTextAreaElement, ComponentProps<"textarea">>(
  (props, ref) => (
    <textarea
      {...props}
      className="border-2 border-solid border-fafafc text-sm rounded-lg p-2 h-40 resize-none"
      {...props}
      ref={ref}
    />
  )
);

Textarea.displayName = "Textarea";

export default Textarea;
