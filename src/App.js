// eslint-disable-next-line
import * as Styled from './App.styled';

import ThemeProvider from './provider/ThemeProvider';
import InputDataProvider from './provider/InputDataProvider';
import Form from './components/Form/Form';
import Result from './components/Result/Result'

function App() {
	return (
		<ThemeProvider>
			<InputDataProvider>
				<Styled.App>
						<Styled.Logo />
					<Styled.AppContainer>
						<Form />
						<Result />	
					</Styled.AppContainer>
				</Styled.App>
			</InputDataProvider>
		</ThemeProvider>
	);
}

export default App;
