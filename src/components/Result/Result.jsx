import React from 'react';
import * as Styled from './Result.style';

import ResultLabel from '../ResultLabel/ResultLabel';
import Button from '../ButtonPrimary/ButtonPrimary';

const Result = () => {
	return (
		<Styled.ResultContainer>
			<Styled.ResultContent>
				<div>
					<ResultLabel label="Tip Amount" amount="8.01" />
					<ResultLabel label="Total" amount="5.01" />
				</div>
				<Button disabled />
			</Styled.ResultContent>
		</Styled.ResultContainer>
	);
};

export default Result;
