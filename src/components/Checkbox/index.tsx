import { FC } from "react";

type CheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: () => void;
};

const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <label className="flex gap-2 h-6">
      <input
        hidden
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        id={`checkbox-${id}`}
      />
      <div className="h-6 w-6 rounded-md border border-gray-300"></div>
      <p className="text-sm text-gray-900">{label}</p>
    </label>
  );
};

export default Checkbox;
