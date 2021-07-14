import styled from 'styled-components';
import { ReactComponent as LogoSvg } from './images/logo.svg';

export const App = styled.div`
	background-color: ${({ theme }) => theme.neutralLightGray400};
	min-height: 100vh;
	padding-top: 2.88rem;
	color: ${({ theme }) => theme.neutralDarkGray400};
`;

export const AppContainer = styled.div`
	background-color: ${({ theme }) => theme.white};
	width: 100%;
	max-width: 57.5rem;
	margin: 0 auto;
	padding: 2rem;
	border-radius: 0.875em;
`;

export const Logo = styled(LogoSvg)`
	display: block;
	fill: #3d6666;
	margin: 0 auto 2.25rem auto;
`;
