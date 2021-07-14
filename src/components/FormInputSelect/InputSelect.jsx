import React from 'react';
import { FormControl, FormLabel } from '../FormInputText/InputText.style';
import InputSelectOptions from '../FormInputSelectOptions/InputSelectOptions';


const InputSelect = () => {
 
	return (
		<FormControl>
			<FormLabel>Select Tip %</FormLabel>
			<InputSelectOptions />
		</FormControl>
	);
};

export default InputSelect;
