import { ComponentProps, forwardRef } from "react";

interface TextAreaProps extends ComponentProps<"textarea"> {
  label: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, className, ...props }, ref) => (
    <div className="flex flex-col">
      <span className="text-4e4958 text-sm font-normal leading-6">{label}</span>
      <textarea
        className="border-2 border-solid border-fafafc text-sm rounded-lg p-2 w-96 h-40 resize-none"
        {...props}
        ref={ref}
      />
    </div>
  )
);

Textarea.displayName = "Textarea";

export default Textarea;
