import { Button, Flex, Heading, Image, Stack } from '@chakra-ui/react';
import { RiArrowRightUpLine } from 'react-icons/ri';
import localFont from '@next/font/local';
const knowledgeFont = localFont({
	src: './jobless.ttf',
});

const Hero = () => {
	return (
		<Flex
			flexDirection={{ base: 'column', lg: 'row' }}
			alignItems='center'
			justifyContent='center'
			gap={{ base: 6, md: 12, lg: 20 }}
			py={8}
		>
			<Image
				alignSelf='center'
				src='./img2.svg'
				alt='coding'
				minWidth='300px'
				width='28%'
			/>
			<Flex flexDirection='column'>
				<Heading
					as='h2'
					size='3xl'
					mb={4}
					color='blackAlpha.900'
					textAlign={{ base: 'center', lg: 'left' }}
				>
					<div
						className={knowledgeFont.className}
						style={{
							letterSpacing: '2px',
							fontWeight: 500,
						}}
					>
						Knowledge Is Power!!
					</div>
				</Heading>
				<Heading
					as='h3'
					size='md'
					maxW='600'
					fontWeight={500}
					textAlign={{ base: 'center', lg: 'left' }}
				>
					StørmAcademy is an upcoming Coding Platform which will provide multiple Courses, Exercices and fun ways to learn code. 
					The idea for this project was originally thought on the 10th April, 2022 by xCampi. 
					Started being worked full-time in August 2022.

					<br />
					<Button
						mt={4}
						rightIcon={<RiArrowRightUpLine size='20px' />}
						variant='outline'
						colorScheme='blackAlpha'
						color='black'
						_hover={{
							color: 'white',
							bgColor: 'black',
						}}
					>
						Pre-Register now
					</Button>
				</Heading>
			</Flex>
		</Flex>
	);
};

export default Hero;
