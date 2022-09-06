import React, { useState, useEffect } from 'react';
import { useFieldProps } from '../../../hooks';

export const SlideCheckbox = ({ name, label, disabled = false }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { field, setFieldValue } = useFieldProps(name);
  const bgClass = isChecked
    ? 'bg-blue-500 ring-black/20'
    : 'bg-slate-900/10 ring-slate-900/5';
  const sliderClass = isChecked ? 'translate-x-4' : '';
  const isDisabled = disabled
    ? 'pointer-events-none opacity-50'
    : 'pointer-events-auto cursor-pointer';

  useEffect(() => {
    field.value ? setIsChecked(field.value) : setIsChecked(false);
  }, [field.value]);

  const handleChange = () => {
    setIsChecked(!isChecked);
    setFieldValue(!isChecked);
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor="input" className="mb-3 block text-sm font-medium">
          {label}
        </label>
      )}
      <div
        className={`${isDisabled} ml-1 h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out ${bgClass}`}
        onClick={handleChange}
      >
        <input
          name={name}
          type="checkbox"
          checked={field.value}
          className="absolute hidden"
          disabled={disabled}
        />
        <div
          className={`h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out ${sliderClass}`}
        ></div>
      </div>
    </div>
  );
};
