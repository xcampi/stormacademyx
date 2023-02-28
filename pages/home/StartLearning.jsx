import {
	Flex,
	Heading,
	Image,
	List,
	ListIcon,
	ListItem,
	Text,
	VStack,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const StartLearning = () => {
	return (
		<Flex
			alignItems='center'
			justifyContent='center'
			p={12}
		>
			<Flex
				flexGrow='1'
				alignItems='center'
				maxW={1200}
				flexDirection={{ base: 'column', lg: 'row' }}
			>
				<VStack
					flexGrow={1}
					alignItems='flex-start'
					maxW='600'
					spacing='6'
				>
					<Heading
						as='h3'
						size='3xl'
						textTransform='capitalize'
					>
						its easy to start <br /> learning!!
					</Heading>
					<Text
						textTransform='capitalize'
						fontSize='xl'
						color='blackAlpha.700'
						lineHeight='6'
					>
						our aim is to create great learning experience for you. so come and
						lets get started.
					</Text>
					<List spacing={3}>
						<ListItem>
							<Flex
								fontSize='xl'
								fontWeight='semibold'
								alignItems='center'
							>
								<ListIcon
									as={FaCheckCircle}
									color='green.500'
								/>
								Create Account
							</Flex>
						</ListItem>
						<ListItem>
							<Flex
								fontSize='xl'
								fontWeight='semibold'
								alignItems='center'
							>
								<ListIcon
									as={FaCheckCircle}
									color='green.500'
								/>
								Start learning
							</Flex>
						</ListItem>
						<ListItem>
							<Flex
								fontSize='xl'
								fontWeight='semibold'
								alignItems='center'
							>
								<ListIcon
									as={FaCheckCircle}
									color='green.500'
								/>
								Get certificates
							</Flex>
						</ListItem>
					</List>
				</VStack>
				<Flex
					justifyContent='center'
					flexGrow={1}
				>
					<Image
						src='login.svg'
						alt='login'
						width='100%'
						height='auto'
						maxW='400px'
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default StartLearning;
