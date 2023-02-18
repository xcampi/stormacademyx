import {
	Box,
	Button,
	Card,
	CardBody,
	CardHeader,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';
import { GrCertificate } from 'react-icons/gr';
import { HiCode } from 'react-icons/hi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { RiArrowRightUpLine } from 'react-icons/ri';

const featCard = [
	{
		icon: <GrCertificate size='60px' />,
		title: 'get certificate',
		desc: 'add value to your learning and increase the chance of getting hired on your dream job',
	},
	{
		icon: <HiCode size='60px' />,
		title: 'variety of courses',
		desc: 'a wide range of courses to choose and learn from with hands-on practices.',
	},
	{
		icon: <FaChalkboardTeacher size='60px' />,
		title: 'amazing instructor',
		desc: 'our amazing instructors brings experience, knowledge and fun on the table.',
	},
	{
		icon: <BiSupport size='60px' />,
		title: 'life time support',
		desc: 'you get an amazing 24x7 support from our customer services for all kind of queries.',
	},
];

const Features = () => {
	return (
		<Container
			maxW={1800}
			py={16}
			centerContent
		>
			<Grid
				templateColumns='repeat(3, 1fr)'
				gap={6}
				maxW={1200}
			>
				<GridItem colSpan={{ base: 3, lg: 2 }}>
					<Card
						p={6}
						size='sm'
						bgColor='brand.secondary'
						h='100%'
						borderRadius='20'
					>
						<CardHeader>
							<Flex alignItems='center'>
								<Box>
									<Heading
										textTransform='capitalize'
										as='h3'
										size='2xl'
										color='white'
									>
										our features
									</Heading>

									<Heading
										mt='4'
										textTransform='capitalize'
										as='h3'
										size='2xl'
										color='white'
									>
										specially for you !!
									</Heading>
								</Box>
								<Flex
									flexGrow='1'
									justifyContent='center'
								>
									<Image
										width='130px'
										height='130px'
										src='storm_logo_green.svg'
										alt='storm academy logo'
									/>
								</Flex>
							</Flex>
						</CardHeader>
						<CardBody>
							<Button
								borderRadius='3xl'
								colorScheme='whatsapp'
								rightIcon={<RiArrowRightUpLine size='20px' />}
							>
								See All Features
							</Button>
						</CardBody>
					</Card>
				</GridItem>
				{featCard.map((item, index) => (
					<GridItem
						key={index}
						colSpan={{ base: 3, lg: 1 }}
					>
						<Card
							size='md'
							border='1px solid'
							borderColor='blackAlpha.200'
						>
							<CardHeader>{item.icon}</CardHeader>
							<CardBody>
								<Heading
									mb={2}
									size='lg'
									textTransform='capitalize'
								>
									{item.title}
								</Heading>
								<Text
									fontSize='lg'
									textTransform='capitalize'
								>
									{item.desc}
								</Text>
							</CardBody>
						</Card>
					</GridItem>
				))}
			</Grid>
		</Container>
	);
};

export default Features;
