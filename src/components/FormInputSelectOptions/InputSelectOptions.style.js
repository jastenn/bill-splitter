import styled from 'styled-components';
import { FormInput } from '../FormInputText/InputText.style';

export const SelectContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 1.13rem;
`;

export const SelectOptionContainer = styled.div`
	overflow: hidden;
	height: 3rem;
	border-radius: 0.3rem;
`;

export const SelectOption = styled.input`
	position: absolute;
	z-index: -1;
	opacity: 0;
	&:focus + label {
		opacity: 0.8;
	}
	&:checked:focus + label {
		opacity: .8;
	}
	&:checked + label {
		opacity: 1;
		background-color: ${({ theme }) => theme.primaryStrongCyan};
		color: ${({ theme }) => theme.neutralVeryDarkCyan};
		cursor: default;
	}
`;

export const SelectLabel = styled.label`
	display: block;
	font-size: 1.5rem;
	font-weight: 700;
	text-align: center;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.neutralVeryDarkCyan};
	color: white;
	cursor: pointer;
	transition: 100ms ease background-color, 100ms ease color;
	&:hover {
		background-color: ${({theme}) => theme.neutralLightCyanHover};
		color: ${({ theme }) => theme.neutralVeryDarkCyan};
	}
	& span {
		display: block;
		transform: translateY(8%);
	}
`;

export const CustomTipInput = styled(FormInput)`
	&::placeholder {
		opacity: 0.6;
		color: ${({ theme }) => theme.neutralVeryDarkCyan};
	}
`;
