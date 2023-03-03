import { extendTheme } from '@chakra-ui/react';

const colors = {
	brand: {
		primary: {
			100: '#C4E344',
			200: '#A3C320',
			300: '#C5F014',
			400: '#BBD15E',
			500: '#8DA234',
		},
		secondary: '#313131',
	},
};

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

export const theme = extendTheme({ colors, config });
