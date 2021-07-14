import React, { createContext, useReducer } from 'react';

export const InputData = createContext();

const initialInputState = {
	bill: {
		name: 'bill',
		value: '',
		isDirty: false,
		isValid: false,
	},
	tip: {
		name: 'tip',
		value: '',
		isDirty: false,
		isValid: false,
	},
	people: {
		name: 'people',
		value: '',
		isDirty: false,
		isValid: false,
	},
};

const billReducer = (state, action) => {
	switch (action.type) {
		case 'update:bill':
			return {
				...state,
				bill: {
					...state.bill,
					value: action.value,
					isDirty: true,
				},
			};
		case 'update:tip':
			return {
				...state,
				tip: {
					...state.tip,
					value: action.value,
					isDirty: true,
				},
			};
		case 'update:people':
			return {
				...state,
				people: {
					...state.people,
					value: action.value,
					isDirty: true,
				},
			};
		default:
			console.warn('Invalid Action Type');
			break;
	}
};

const InputDataProvider = (props) => {
	const [inputState, dispatchInput] = useReducer(
		billReducer,
		initialInputState
	);
	return (
		<InputData.Provider value={{ inputState, dispatchInput }}>
			{props.children}
		</InputData.Provider>
	);
};

export default InputDataProvider;
