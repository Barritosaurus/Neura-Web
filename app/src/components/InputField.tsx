import React, { FC, useState, ChangeEvent } from "react";

type Props = {
  text: string
};

const InputField: FC = (props) => {

  const placeholder = "Placeholder Text";

  const NUMERIC_REGEX = "[0-9]";
  const ALPHABETIC_REGEX = "[a-zA-Z]";
  const WHITESPACE_REGEX = "[%s]";
  const OTHER_REGEX = "[^0-9a-zA-Z%s]";
  const NUMERIC_MASK = 0b1000;
  const ALPHABETIC_MASK = 0b0100;
  const WHITESPACE_MASK = 0b0010;
  const OTHER_MASK = 0b0001;

  const inputMask = props ? props : 0b1111;

  //setter for text that is input
  const [values, setValues] = React.useState<Props>({
    text: ""
  });

  //updates text that is input by user
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value});
    console.log(values.text);
  }

  //logs text to console
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit", values);
  };

  //this is currently just a numeric mask
  const numericMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    e.target.value = value;
    return e;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>{"Mask"}</label>
        <input 
          placeholder={placeholder}
          onChange={(e) => handleChange(numericMask(e))}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputField;
