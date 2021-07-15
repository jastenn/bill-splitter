import React from 'react';
import * as Styled from './InputText.style.js';
const InputText = ({name, value, updateStateHandler, isValid, isDirty }) => {
	const numRegex = /^[0-9]*$/;
	
	const inputHandler = (e) => {
		const el = e.target;

		if (numRegex.test(el.value)) {
			updateStateHandler(el);
		}
	};
	
	//form has to be dirty(true) and valid(true) in order to proceed on computation
	const isInputValid = () => { 
		if(!isValid && !isDirty) return true
		
		return isValid && isDirty ? true : false;
	} 

	return (
		<Styled.FormControl>
			<Styled.InvalidInputHelper isInputValid={isInputValid()} >can't be zero</Styled.InvalidInputHelper>
			<Styled.FormLabel htmlFor={name}>{name}</Styled.FormLabel>
			<Styled.FormInput
				placeholder="0"
				value={value}
				onChange={inputHandler}
				name={name}
				id={name}
				isInputValid={isInputValid()}
			/>
		</Styled.FormControl>
	);
};

export default InputText;
