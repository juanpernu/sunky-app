import React from "react";
import { Error } from "../../index";
import { useFieldProps, useFocused } from "../../../hooks";

export const Input = ({
  type = "text",
  label,
  name,
  placeholder,
  className = "",
  showError = true,
  disabled = false,
}) => {
  const { field } = useFieldProps(name);
  const { focus, focusedClass } = useFocused();
  const whitLabel = label ? "h-13" : "h-9";

  return (
    <div
      onFocus={focus}
      onBlur={focus}
      className={`text-left ${whitLabel} ${className}`}
    >
      {label && (
        <label htmlFor="input" className="mb-2 block text-sm font-medium">
          {label}
        </label>
      )}
      <input
        {...field}
        className={`w-full rounded-md border border-gray-300 p-2 text-sm shadow-sm ${focusedClass}`}
        name={name}
        placeholder={placeholder}
        value={field.value || ""}
        type={type}
        disabled={disabled}
      />
      {showError && <Error name={name} />}
    </div>
  );
};
