import React from 'react';
import * as Styled from './ResultLabel.style';
const ResultLabel = ({label, amount}) => {
	return (
		<Styled.ResultControl>
			<Styled.LabelContainer>
				<Styled.Label>{label}</Styled.Label>
				<Styled.SubLabel>/ person</Styled.SubLabel>
			</Styled.LabelContainer>
      <Styled.Amount>${amount}</Styled.Amount>
    </Styled.ResultControl>
	);
};

export default ResultLabel;
