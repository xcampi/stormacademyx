import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Heading,
	HStack,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Spacer,
	StackDivider,
	useDisclosure,
	useMediaQuery,
	VStack,
} from '@chakra-ui/react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import { useRef } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

const TopBar = () => {
	const [isLargeScreen] = useMediaQuery('(min-width: 900px)');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();
	return (
		<Flex
			py={4}
			alignItems='center'
			borderBottom='1px solid'
			borderColor='blackAlpha.400'
		>
			<Heading
				as='h1'
				size='lg'
				px={3}
				textTransform='uppercase'
			>
				<Image
					src='./storm_logo.svg'
					width={50}
					height={50}
					alt='storm academy svg'
				/>
			</Heading>
			{isLargeScreen ? (
				<>
					<HStack px={4}>
						<Button
							variant='ghost'
							colorScheme='blackAlpha'
							color='black'
							size='md'
							fontSize='xl'
							fontWeight='normal'
						>
							Home
						</Button>

						<Menu>
							<MenuButton
								as={Button}
								rightIcon={<MdKeyboardArrowDown />}
								variant='ghost'
								colorScheme='blackAlpha'
								color='black'
								size='md'
								fontSize='xl'
								fontWeight='normal'
							>
								Tutorials
							</MenuButton>
							<MenuList>
								<MenuItem>HTML5
									      function Redirect() {
            									location.assign("https://www.xcampi.netlify.io");
										      </MenuItem>
								<MenuItem>CSS3</MenuItem>
								<MenuItem>JavaScript</MenuItem>
								<MenuItem>PHP</MenuItem>
								<MenuItem>Java</MenuItem>
								<MenuItem>Ruby</MenuItem>
								<MenuItem>Swift</MenuItem>
							</MenuList>
						</Menu>
						<Button
							variant='ghost'
							colorScheme='blackAlpha'
							color='black'
							size='md'
							fontSize='xl'
							fontWeight='normal'
						>
							Support
						</Button>
						<Menu>
							<MenuButton
								as={Button}
								variant='ghost'
								colorScheme='blackAlpha'
								color='black'
								size='md'
								fontSize='xl'
								fontWeight='normal'
								rightIcon={<MdKeyboardArrowDown />}
							>
								Others
							</MenuButton>
							<MenuList>
								<MenuItem>Licenses</MenuItem>
								<MenuItem>Credits</MenuItem>
								<MenuItem>Partnerships</MenuItem>
								<MenuItem>About Us</MenuItem>
							</MenuList>
						</Menu>
					</HStack>
					<Spacer />
					<HStack spacing='4'>
						<Button
							border='1px solid'
							borderColor='brand.primary.200'
						>
							Login
						</Button>
						<Button
							variant='solid'
							colorScheme='green'
							color='white'
							bgColor='black'
						>
							Sign Up
						</Button>
					</HStack>
				</>
			) : (
				<>
					<Spacer />

					<IconButton
						aria-label='Side Menu'
						icon={<HiMenuAlt3 />}
						ref={btnRef}
						onClick={onOpen}
						variant='ghost'
						size='lg'
						fontSize='4xl'
					/>
					<Drawer
						isOpen={isOpen}
						placement='right'
						onClose={onClose}
						finalFocusRef={btnRef}
					>
						<DrawerOverlay />
						<DrawerContent>
							<DrawerCloseButton size='lg' />
							<DrawerHeader bgColor='brand.primary.200'>Menu</DrawerHeader>

							<DrawerBody>
								<VStack
									spacing={6}
									my={8}
									divider={<StackDivider borderColor='gray.200' />}
								>
									<Button
										variant='ghost'
										colorScheme='blackAlpha'
										color='black'
										size='md'
										fontSize='xl'
										fontWeight='normal'
									>
										Home
									</Button>

									<Menu>
										<MenuButton
											as={Button}
											rightIcon={<MdKeyboardArrowDown />}
											variant='ghost'
											colorScheme='blackAlpha'
											color='black'
											size='md'
											fontSize='xl'
											fontWeight='normal'
										>
											Tutorials
										</MenuButton>
										<MenuList>
											<MenuItem>HTML5
									      			function Redirect() {
            											location.assign("https://www.xcampi.netlify.io");
										      </MenuItem>
											<MenuItem>CSS3</MenuItem>
											<MenuItem>JavaScript</MenuItem>
											<MenuItem>PHP</MenuItem>
											<MenuItem>Java</MenuItem>
											<MenuItem>Ruby</MenuItem>
											<MenuItem>Swift</MenuItem>
										</MenuList>
									</Menu>
									<Button
										variant='ghost'
										colorScheme='blackAlpha'
										color='black'
										size='md'
										fontSize='xl'
										fontWeight='normal'
									>
										Contact
									</Button>
									<Menu>
										<MenuButton
											as={Button}
											variant='ghost'
											colorScheme='blackAlpha'
											color='black'
											size='md'
											fontSize='xl'
											fontWeight='normal'
											rightIcon={<MdKeyboardArrowDown />}
										>
											Others
										</MenuButton>
										<MenuList>
											<MenuItem>Licenses</MenuItem>
											<MenuItem>Credits</MenuItem>
											<MenuItem>Partnerships</MenuItem>
											<MenuItem>About Us</MenuItem>
										</MenuList>
									</Menu>
								</VStack>
							</DrawerBody>

							<DrawerFooter
								bgColor='brand.primary.100'
								justifyContent='space-around'
							>
								<HStack justifyContent='space-around'>
									<Button
										border='1px solid'
										borderColor='brand.primary.200'
									>
										Login
									</Button>
									<Button
										variant='solid'
										colorScheme='green'
										color='white'
										bgColor='black'
									>
										Sign Up
									</Button>
								</HStack>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</>
			)}
		</Flex>
	);
};

export default TopBar;
