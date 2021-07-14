import styled from 'styled-components';

export const ResultControl = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& + * {
		margin-top: 1.25rem;
	}
`;

export const LabelContainer = styled.div``;

export const Label = styled.h3`
	text-transform: capitalize;
	font-size: 1rem;
`;

export const SubLabel = styled.p`
	font-size: 0.875rem;
	color: ${({ theme }) => theme.neutralDarkGray300};
`;

export const Amount = styled.h2`
	font-size: 2rem;
	color: ${({ theme }) => theme.primaryStrongCyan};
`;
