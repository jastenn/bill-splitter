import styled from 'styled-components';

export const ResultControl = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& + * {
		padding-top: 1.75rem;
	}
`;

export const LabelContainer = styled.div`
	& + div {
		margin-top: 10rem;
	}
`;

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
