// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { FC, useState } from "react";
/* 
This component is an input field that takes in a prop to define
what type of mask will be placed on the field.

EXAMPLE USAGE:
    <InputField maskType={0b1011}/>

In this example all characters are masked EXCEPT alphabetic characters 
*/

type ComponentText = {
  text: string
};

interface Props {
  maskType: number
  onInputChange: (inputValue: string) => void;
}

const InputField: FC<Props> = ({maskType, onInputChange}) => {
	const NUMERIC_MASK = 0b1000;
	const ALPHABETIC_MASK = 0b0100;
	const WHITESPACE_MASK = 0b0010;
	const OTHER_MASK = 0b0001;
	const inputMask = maskType ? maskType : 0b1111;

	//setter for text that is input
	const [values, setValues] = React.useState<ComponentText>({
		text: ""
	});

	//updates text that is input by user
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues({...values, [e.target.name]: e.target.value});
		onInputChange(e.target.value);
		// console.log("submit", values);
	};

	//logs text to console when hitting submit within this component
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("submit", values);
	};

	//this function does the masking
	const mask = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if((inputMask & NUMERIC_MASK) == 0) {
			e.target.value = value.replace(/\D/g, "");
		}
		if((inputMask & ALPHABETIC_MASK) == 0) {
			e.target.value = value.replace(/[^a-zA-Z]/g, "");
		}
		if((inputMask & WHITESPACE_MASK) == 0) {
			e.target.value =  value.replace(/\S/g, "");
		}
		if((inputMask & OTHER_MASK) == 0) {
			e.target.value = value.replace(/[^0-9a-zA-Z%s]/g, "");
		}
		return e;
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>{""}</label>
				<input style={{
					background: "#A9A9A9",
					borderRadius: "5px",
					color: "black",
				}}
				placeholder={""}
				onChange={(e) => handleChange(mask(e))}
				/>
				{/* <button type="submit">Submit</button> */}
			</form>
		</div>
	);
};

export default InputField;
