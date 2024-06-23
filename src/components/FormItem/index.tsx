import { ComponentProps, forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface FormItemProps extends ComponentProps<"div"> {
  label?: string;
  message?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const FormItem = forwardRef<HTMLDivElement, FormItemProps>(
  ({ children, label, message, ...props }, ref) => (
    <div {...props} ref={ref} className="flex gap-1 flex-col">
      <div>
        <label className="text-4e4958 text-sm font-normal leading-6">
          {label}
        </label>
        {message && (
          <span className="text-red-400 text-xs font-normal leading-5 ml-2">
            {String(message)}
          </span>
        )}
      </div>
      {children}
    </div>
  )
);

export default FormItem;
