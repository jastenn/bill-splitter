import React, { useContext } from 'react';
import * as Styled from './Form.style';
import { InputData } from '../../provider/InputDataProvider';

import InputText from '../FormInputText/InputText';
import InputSelect from '../FormInputSelect/InputSelect';

const Form = () => {
	const { inputState, dispatchInput } = useContext(InputData);
	const updateStateHandler = (el) => {
		dispatchInput({ type: `update:${el.name}`, value: el.value });
	};
	return (
		<Styled.Form>
			<InputText
				placeholder="0"
				name={inputState.bill.name}
				id={inputState.bill.name}
				value={inputState.bill.value}
				updateStateHandler={updateStateHandler}
			/>
			<InputSelect />
			<InputText
				placeholder="0"
				name={inputState.people.name}
				id={inputState.people.name}
				value={inputState.people.value}
				updateStateHandler={updateStateHandler}
			/>
		</Styled.Form>
	);
};

export default Form;
