import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import { theme } from '../utils/theme';
import { Open_Sans } from '@next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<main className={sans.className}>
				<Component {...pageProps} />
			</main>
		</ChakraProvider>
	);
}
