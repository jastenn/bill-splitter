import React, { useContext } from 'react';
import * as Styled from './Form.style';
import { InputData } from '../../provider/InputDataProvider';

import InputText from '../FormInputText/InputText';
import InputSelect from '../FormInputSelect/InputSelect';

const Form = () => {
	const { inputState, dispatchInput } = useContext(InputData);
	const updateStateHandler = (el) => {
		dispatchInput({ type: `update:${el.name}`, value: el.value });
		if(!(el.value === '0') && !(el.value === '')) {
			console.log(el.value)
			dispatchInput({type: `valid:${el.name}`})
		} else {
			dispatchInput({type: `invalid:${el.name}`})
		}
	};
	return (
		<Styled.Form>
			<InputText updateStateHandler={updateStateHandler} {...inputState.bill} />
			<InputSelect />
			<InputText updateStateHandler={updateStateHandler} {...inputState.people} />
		</Styled.Form>
	);
};

export default Form;
