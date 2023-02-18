import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { FaRegCopyright } from 'react-icons/fa';
import styles from '../styles/Home.module.css';
import localFont from '@next/font/local';
const stormFont = localFont({
	src: './campi.ttf',
});

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<Box
			pt={8}
			className={styles.sprinkle}
		>
			<Flex
				mx='auto'
				flexGrow='1'
				maxW={1200}
				pb={8}
				justifyContent='center'
				alignItems='center'
			>
				<Image
					src='storm_logo.svg'
					alt='storm academy logo'
					maxW={{ base: '42px', lg: '62px' }}
					maxH={{ base: '42px', lg: '62px' }}
				/>
				<Heading
					ml='-1'
					as='h3'
					size={{base:'2xl',lg:'4xl'}}
					textTransform='uppercase'
					className={stormFont.className}
				>
					tørm academy
				</Heading>
			</Flex>

			<Flex
				mx='auto'
				flexGrow='1'
				maxW={1200}
				bgColor='brand.secondary'
				borderTopRadius='3xl'
				p={2}
				justifyContent='center'
				alignItems='center'
			>
				<FaRegCopyright color='white' />
				<Text
					ml={1}
					color='white'
					fontWeight='semibold'
				>
					StørmAcademy {year} | All Rights Reserved
				</Text>
			</Flex>
		</Box>
	);
};

export default Footer;
