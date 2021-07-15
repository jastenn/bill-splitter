import React from "react";
import { ThemeProvider as StyleProvider } from "styled-components";

const ThemeProvider = (props) => {
	const theme = {
		primaryStrongCyan: "hsl(172, 67%, 45%)",
		neutralVeryDarkCyan: "hsl(183, 100%, 15%)",
		neutralDarkGray400: "hsl(186, 14%, 43%)",
		neutralDarkGray300: "hsl(184, 14%, 56%)",
		neutralLightGray400: "hsl(185, 41%, 84%)",
		neutralLightGray300: "hsl(189, 41%, 97%)",
		neutralLightCyanHover: "#9fe8df",	
		red: '#B47C6D',
		white: "hsl(0, 0%, 100%)",
	};

	return <StyleProvider theme={theme}>{props.children}</StyleProvider>;
};

export default ThemeProvider;
