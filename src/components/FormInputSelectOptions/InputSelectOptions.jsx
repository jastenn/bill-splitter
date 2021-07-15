import React, { useContext, useState } from 'react';
import * as Styled from './InputSelectOptions.style';
import { InputData } from '../../provider/InputDataProvider';

const radioOptionData = [
	{
		value: 5,
		id: '5percent',
		label: '5%',
	},
	{
		value: 10,
		id: '10percent',
		label: '10%',
	},
	{
		value: 15,
		id: '15percent',
		label: '15%',
	},
	{
		value: 25,
		id: '25percent',
		label: '25%',
	},
	{
		value: 50,
		id: '50percent',
		label: '50%',
	},
];

const InputSelectOption = () => {
	// eslint-disable-next-line
	const numRegex = /^[0-9]*$/
	const [customTip, setCustomTip] = useState('')
	const { inputState, dispatchInput } = useContext(InputData);

	const radioChangeHandler = (e) => {
		const el = e.target;

		dispatchInput({ type: `update:${el.name}`, value: el.value });
	};

	const customTipHandler = (e) => {
		const el = e.target
		if(numRegex.test(el.value)) {
			console.log('valid input')
			setCustomTip(el.value)
			dispatchInput({ type: `update:${el.name}`, value: el.value})
		} else {
			console.log('invalid input')
		}
	}

	return (
		<Styled.SelectContainer>
			{radioOptionData.map((curOption, index) => (
				<Styled.SelectOptionContainer key={curOption.id}>
					<Styled.SelectOption
						type="radio"
						name="tip"
						id={curOption.id}
						value={curOption.value}
						checked={(curOption.value === parseInt(inputState.tip.value)) ? 1 : 0}
						onChange={
							curOption.value === inputState.tip.value ? '' : radioChangeHandler
						}
					/>
					<Styled.SelectLabel
						value={curOption.value}
						activeOpt={inputState.tip.value}
						htmlFor={curOption.id}
					>
						<span>{curOption.label}</span>
					</Styled.SelectLabel>
				</Styled.SelectOptionContainer>
			))}
			<Styled.CustomTipInput name="tip" value={customTip} placeholder="Custom" onChange={customTipHandler} />
		</Styled.SelectContainer>
	);
};

export default InputSelectOption;
