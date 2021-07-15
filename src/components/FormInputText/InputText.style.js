import styled from 'styled-components';

export const FormControl = styled.div`
	position: relative;
	& + * {
		margin-top: 2rem;
	}
`;

export const FormLabel = styled.label`
	display: inline-block;
	text-transform: capitalize;
	margin-bottom: 0.75rem;
`;

export const FormInput = styled.input`
	display: block;
	background-color: ${({ theme }) => theme.neutralLightGray300};
	font-family: inherit;
	font-size: 1.5rem;
	font-weight: 700;
	text-align: right;
	color: ${({ theme }) => theme.neutralVeryDarkCyan};
	width: 100%;
	padding: 0.31rem 1.06rem;
	border: none;
	border-radius: 0.2em;
	box-sizing: border-box;

	${({ isInputValid, theme }) => {
		if (!isInputValid) {
			return `box-shadow: inset 0px 0px 0px 3px ${theme.red} !important;`;
		}
	}}

	&::placeholder {
		color: ${({ theme }) => theme.neutralDarkGray300};
	}

	&:focus {
		border: none;
		outline: none;
		box-shadow: inset 0px 0px 0px 3px ${({ theme }) => theme.primaryStrongCyan};
	}
`;

export const InvalidInputHelper = styled.span`
	display: none;
	${({ isInputValid, theme }) => {
		if (!isInputValid) {
			return `
				display: block;
				font-size: .875rem;
				color: ${theme.red};
				position: absolute;
				right: 0;
				transform: translateY(20%)
			`
		}
	}}
`;
