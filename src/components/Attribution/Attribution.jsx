import React from 'react'
import * as Styled from './Attribution.style'

const Attribution = () => {
  return (
		<Styled.AttributionContainer>
			Challenge by{' '}
			<a href="https://www.frontendmentor.io?ref=challenge">
				Frontend Mentor
			</a>
			. Coded by <a href="https://github.com/jastenn">Justine Aviso</a>.
		</Styled.AttributionContainer>
	);
}

export default Attribution
