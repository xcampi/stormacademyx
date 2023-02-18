import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Flex,
	Heading,
	HStack,
	Image,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import { HiStar } from 'react-icons/hi';
import { FiClock } from 'react-icons/fi';

const courseCard = [
	{
		image: 'cpp.png',
		star: 4.9,
		review: 430,
		time: '02:35',
		title: 'Learn C++: Beginner Tutorial',
	},
	{
		image: 'javascript.svg',
		star: 4.8,
		review: 410,
		time: '03:35',
		title: 'Learn JS: Beginner Tutorial',
	},
	{
		image: 'react.svg',
		star: 4.8,
		review: 560,
		time: '06:35',
		title: 'Learn ReactJS: Beginner Tutorial',
	},
];

const Courses = () => {
	return (
		<Flex
			alignItems='center'
			justifyContent='center'
			bgColor='brand.secondary'
			py={12}
			px={4}
		>
			<Flex
				direction='column'
				alignItems='center'
				maxW={1200}
			>
				<Heading
					mb={12}
					color='white'
					as='h3'
					size='2xl'
					textTransform='capitalize'
					textAlign='center'
				>
					Popular Courses
				</Heading>
				<SimpleGrid
					columns={{ base: 1, lg: 3 }}
					spacing={6}
				>
					{courseCard.map((item, index) => (
						<Card
							borderRadius='xl'
							key={index}
							bgColor='white'
							size='md'
						>
							<CardHeader>
								<Flex
									alignItems='center'
									justifyContent='center'
									height='200px'
								>
									<Image
										width='auto'
										height='100%'
										src={item.image}
										alt={item.title}
									/>
								</Flex>
							</CardHeader>
							<Divider />
							<CardBody>
								<HStack
									mb={4}
									justifyContent='space-between'
								>
									<Flex alignItems='center'>
										<HiStar color='#21C523' />
										<Text ml={1}>{item.star}</Text>
										<Text
											color='blackAlpha.600'
											ml={2}
										>{`(${item.review} Reviews)`}</Text>
									</Flex>
									<Flex alignItems='center'>
										<FiClock />
										<Text ml={1}>{item.time}:00</Text>
									</Flex>
								</HStack>
								<Heading
									as='h3'
									size='xl'
								>
									{item.title}
								</Heading>
							</CardBody>
							<CardFooter>
								<Button
									borderRadius='2xl'
									variant='outline'
									color='black'
									border='1px solid'
									borderColor='black'
								>
									View Course
								</Button>
							</CardFooter>
						</Card>
					))}
				</SimpleGrid>
			</Flex>
		</Flex>
	);
};

export default Courses;
