import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import App from './App';
import ukoTheme from './theme';
import themes from '@/enums/themes';

const appTheme = ukoTheme({
	theme: themes.LIGHT,
	direction: 'ltr',
	responsiveFontSizes: true,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={appTheme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
