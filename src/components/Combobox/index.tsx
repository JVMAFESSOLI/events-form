import { FC, useState } from "react";
// import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";

type ComboboxProps = {
  id: string;
  label: string;
  value?: string;
  items: string[];
  placeholder?: string;
  onChange: (selected?: string) => void;
};

const Combobox: FC<ComboboxProps> = ({
  id,
  items,
  value,
  label,
  onChange,
  placeholder,
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex-row box-border">
      <label className="text-4e4958 text-sm " htmlFor={id}>
        {label}
      </label>
      <div>
        <input
          id={id}
          type="text"
          value={value}
          className="placeholder-gray-300 border-2 rounded-lg p-1 box-border h-14 w-96 "
          role="combobox"
          aria-expanded={isOpen}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          onClick={() => setIsOpen((prev) => !prev)}
        />
        {/* <Arrow onClick={() => setIsOpen((prev) => !prev)} /> */}
      </div>
      <div
        id="content-wraper-apagar"
        className={isOpen ? "w-96 absolute box-border p-2" : "hidden"}
      >
        <div id="combobox-items-apagar" className="overflow-y-auto h-28">
          <ul>
            {items?.map((item, index) => (
              <li
                id={String(index)}
                className="p-1 cursor-pointer text-base  bg-gray-100 text-gray-800 hover:bg-transparent"
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Combobox;
