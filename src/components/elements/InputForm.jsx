import React from "react";

const InputForm = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  min,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm text-center font-medium text-white">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        className="mt-1 text-center text-sm block w-full rounded-full border border-gray-300/50 bg-[#1a1632] py-2 px-3 text-white shadow-sm focus:ring-gray-500/5 focus:border-gray-500/5 sm:text-sm"
      />
    </div>
  );
};

export default InputForm;
