import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		min-height: 100%;
    height: 100%;
    min-width: fit-content;
	}

	body {
		background: #f2f2fA;
		-webkit-font-smoothing: antialiased !important;
	}

	body, input, button {
		color: #222;
		font-size: 14px;
		font-family: Arial, Helvetica, sans-serif;
	}

`;
