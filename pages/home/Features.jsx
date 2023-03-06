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
		title: 'Certifications',
		desc: 'Our courses give you a certification that will help you getting more knowledge and a possibility to create the impossible.',
	},
	{
		icon: <HiCode size='60px' />,
		title: 'Variety of Courses',
		desc: 'A wide range of Courses that offer multiple and unique tutorials.',
	},
	{
		icon: <FaChalkboardTeacher size='60px' />,
		title: 'Instructors',
		desc: 'Our instructors actively work to keep providing fun and unique tutorials to improve your experience!',
	},
	{
		icon: <BiSupport size='60px' />,
		title: 'Support & Contact',
		desc: 'We will help with any error or questions our users provide us.',
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
											Our features
									</Heading>

									<Heading
										mt='4'
										textTransform='capitalize'
										as='h3'
										size='2xl'
										color='white'
									>
										Specially for you
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
								See All
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
