import React, { FC, useState, ChangeEvent } from "react";

interface InputProps {
	label: string,
	placeholder?: string,
}

const InputField: FC<InputProps> = ({label, placeholder}) => {
  return (
    <div>
      <label>{label}</label>
      <input value={placeholder}/>
    </div>
  );
};

export default InputField;
