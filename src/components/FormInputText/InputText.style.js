import styled from 'styled-components';

export const FormControl = styled.div`
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
	box-sizing: border-box;
	display: block;
	width: 100%;
	font-family: inherit;
	font-size: 1.5rem;
	font-weight: 700;
	background-color: ${({ theme }) => theme.neutralLightGray300};
	border: none;
	border-radius: 0.2em;
	text-align: right;
	padding: 0.31rem 1.06rem;
	color: ${({ theme }) => theme.neutralVeryDarkCyan};
	box-sizing: border-box;

	&::placeholder {
		color: ${({ theme }) => theme.neutralDarkGray300};
	}
	&:focus {
		box-shadow: inset 0px 0px 0px 3px ${({ theme }) => theme.primaryStrongCyan};
		border: none;
		outline: none;
	}
`;
