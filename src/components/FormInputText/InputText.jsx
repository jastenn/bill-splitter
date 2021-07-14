import React from 'react';
import * as Styled from './InputText.style.js';
const InputText = ({ placeholder, name, id, value, updateStateHandler }) => {
	const inputHandler = (e) => {
		const el = e.target;
		updateStateHandler(el);
	};
	return (
		<Styled.FormControl>
			<Styled.FormLabel htmlFor={id}>{name}</Styled.FormLabel>
			<Styled.FormInput
				placeholder="0"
				value={value}
				onChange={inputHandler}
				name={name}
				id={id}
			/>
		</Styled.FormControl>
	);
};

export default InputText;
