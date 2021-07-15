import React, { useContext, useEffect, useState } from 'react';
import * as Styled from './Result.style';

import { InputData } from '../../provider/InputDataProvider';
import ResultLabel from '../ResultLabel/ResultLabel';
import Button from '../ButtonPrimary/ButtonPrimary';

const Result = () => {
	const [tipPerPeople, setTipPerPeople] = useState(null)
	const [totalBillPerPerson, setTotalBillPerPerson] = useState(null)
	const [isBtnDisabled, setIsBtnDisabled] = useState(true)

	const { inputState } = useContext(InputData);
	const { bill, tip, people } = inputState;


	useEffect(() => {
		
		if (bill.isValid && bill.isDirty && people.isValid && bill.isDirty) {
			setIsBtnDisabled(false)

			let computedTip = (parseInt(bill.value) / 100) * parseInt(tip.value);
			let totalBill = parseInt(bill.value) + computedTip

			setTipPerPeople((computedTip / parseInt(people.value)).toFixed(2));
			setTotalBillPerPerson((totalBill / parseInt(people.value)).toFixed(2))

		} else {
			setIsBtnDisabled(true)
			setTipPerPeople(null);
			setTotalBillPerPerson(null);
		}
		//eslint-disable-next-line
	}, [inputState]);

	return (
		<Styled.ResultContainer>
			<Styled.ResultContent>
				<div>
					<ResultLabel label="Tip Amount" amount={tipPerPeople} />
					<ResultLabel label="Total" amount={totalBillPerPerson} />
				</div>
				<Button isBtnDisabled={isBtnDisabled} />
			</Styled.ResultContent>
		</Styled.ResultContainer>
	);
};

export default Result;
