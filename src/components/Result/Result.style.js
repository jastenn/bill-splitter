import styled from 'styled-components';

export const ResultContainer = styled.div`
	background-color: ${({ theme }) => theme.neutralVeryDarkCyan};
	margin: 0 -0.75rem;
	min-height: 10rem;
	border-radius: 1.06rem;

	@media (min-width: 700px) {
		width: 50%;
		align-self: stretch;
		border-radius: 1.25rem;
		transform: translateX(-2%);
	}
`;

export const ResultContent = styled.div`
	margin: 0 1.2rem;
  padding: 2.38rem 0;
  color: white;

	@media (min-width :700px) {
		margin: 0 2.38rem;
		padding: 2.5rem 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}
`;
