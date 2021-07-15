import React, { createContext, useEffect, useReducer } from 'react';

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
		case 'invalid:bill':
			return {
				...state,
				bill: {
					...state.bill,
					isValid: false,
				},
			};
		case 'valid:bill':
			return {
				...state,
				bill: {
					...state.bill,
					isValid: true,
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
		case 'invalid:tip':
			return {
				...state,
				tip: {
					...state.tip,
					isValid: false,
				},
			};
		case 'valid:tip':
			return {
				...state,
				tip: {
					...state.tip,
					isValid: true,
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
		case 'invalid:people':
			return {
				...state,
				people: {
					...state.people,
					isValid: false,
				},
			};
		case 'valid:people':
			return {
				...state,
				people: {
					...state.people,
					isValid: true,
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

	useEffect(() => {
		const { bill, tip, people } = inputState;

		if (bill.isDirty && tip.isDirty && people.isDirty) {
			const computedTip = (parseInt(bill.value) / 100) * parseInt(tip.value);
			if (Number.isNaN(computedTip)) {
			}
		}
	}, [inputState]);

	return (
		<InputData.Provider value={{ inputState, dispatchInput }}>
			{props.children}
		</InputData.Provider>
	);
};

export default InputDataProvider;
