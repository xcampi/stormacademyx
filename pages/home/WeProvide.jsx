import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';

const WeProvide = () => {
	return (
		<Flex
			alignItems='center'
			justifyContent='center'
			bgGradient='linear(to-l, brand.primary.100, brand.primary.200)'
			py={7}
		>
			<Flex
				flexDirection={{ base: 'column', lg: 'row' }}
				alignItems='center'
				justifyContent='center'
				maxW={1800}
			>
				<Flex
					width={{ base: '100%', lg: '50%' }}
					justifyContent='center'
				>
					<Image
						src='CodeTyping.svg'
						alt='code typing'
						width='50%'
						minWidth='200px'
					/>
				</Flex>
				<VStack
					width={{ base: '100%', lg: '50%' }}
					maxW={{ base: '90%', lg: '38%' }}
					alignItems={{ base: 'center', lg: 'flex-start' }}
				>
					<Heading
						as='h4'
						size='xl'
						textAlign={{ base: 'center', lg: 'left' }}
					>
						We Provide Smart Online Education
					</Heading>
					<Text
						fontSize={{base:'xl',lg:'2xl'}}
						textAlign={{ base: 'center', lg: 'left' }}
					>
						Our courses comes with, hands-on online practice problems, relevant
						resources. And tools that help you Dive deep into learning from
						anywhere.
					</Text>
				</VStack>
			</Flex>
		</Flex>
	);
};

export default WeProvide;
