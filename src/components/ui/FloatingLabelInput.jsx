import React from 'react';

const FloatingLabelInput = ({
  id,
  label,
  placeholder,
  type = 'text',
  value,
   onChange
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="peer w-full border-b border-gray-300 bg-transparent pt-4 pb-1 font-sans text-sm text-gray-900  focus:border-blue-500 focus:outline-none"
      />
      <label
        htmlFor={id}
        className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
