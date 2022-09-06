import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { CheckIcon } from "@heroicons/react/outline";
import { Error } from "../../index";
import { useFieldProps, useOnChange } from "../../../hooks";

export const SquareCheckbox = ({
  name,
  label,
  className,
  small,
  description,
  disabled = false,
  showError = false,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const { field } = useFieldProps(name);
  const onChange = useOnChange(name);

  useEffect(() => {
    if (field) {
      setIsChecked(field.value);
    }
  }, [field]);

  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  const inputClasses = classNames(
    "border-yellow-500 appearance-none h-5 w-5 border rounded-md shadow-sm",
    isChecked ? "border-yellow-500" : "border-gray-500",
    className
  );

  const divClasses = classNames(
    "flex",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none"
  );

  const labelClasses = classNames(
    "ml-2 block font-semibold text-left",
    small ? "text-sm" : "text-base"
  );

  return (
    <div className={divClasses}>
      <label className="relative cursor-pointer">
        <input
          id="checkbox"
          type="checkbox"
          className={inputClasses}
          name={name}
          onChange={handleChange}
          checked={field.value}
        />
        <CheckIcon className="check-1 absolute left-0 top-0 h-5 w-5 text-sm text-yellow-500 text-opacity-0 transition" />
      </label>
      {label && (
        <label htmlFor="input" className={labelClasses}>
          {label}
          {description && (
            <p className="font-regular text-sm text-gray-400">{description}</p>
          )}
        </label>
      )}
      {showError && <Error name={name} />}
    </div>
  );
};
