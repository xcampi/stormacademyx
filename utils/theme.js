import { extendTheme } from '@chakra-ui/react';

const colors = {
	brand: {
		primary: {
			100: '#67F858',
			200: '#21C523',
			300: '#009500',
			400: '#006600',
			500: '#003A00',
		},
		secondary: '#313131',
	},
};

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

export const theme = extendTheme({ colors, config });
