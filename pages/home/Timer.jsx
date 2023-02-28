import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { IoIosRocket } from 'react-icons/io';
import { useState, useEffect } from 'react';
import localFont from '@next/font/local';
const launchFont = localFont({
	src: './league.otf',
});

const Timer = () => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const deadline = 'June, 3, 2023';

	const getTime = () => {
		const time = Date.parse(deadline) - Date.now();
		if (time > 0) {
			setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
			setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
			setMinutes(Math.floor((time / 1000 / 60) % 60));
			setSeconds(Math.floor((time / 1000) % 60));
		} else {
			setDays(0);
			setHours(0);
			setMinutes(0);
			setSeconds(0);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => getTime(deadline), 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Flex
			flexDirection='column'
			my={12}
			alignItems='center'
		>
			<HStack justifyContent='center'>
				<Text
					fontSize={{ base: '2xl', lg: '4xl' }}
					mr='2'
					fontWeight='light'
					className={launchFont.className}
				>
					Launching Soon...
				</Text>
				<IoIosRocket size='50px' />
			</HStack>
			<Flex
				mt={6}
				gap={{ base: 2, lg: 6 }}
				flexWrap='wrap'
			>
				<VStack spacing='-2'>
					<Text
						fontSize={{ base: '2xl', lg: '4xl' }}
						fontWeight='semibold'
					>
						{days}
					</Text>
					<Text fontSize={{ base: 'xl', lg: '2xl' }}>Days</Text>
				</VStack>
				<Text
					fontWeight='bold'
					fontSize={{ base: '2xl', lg: '4xl' }}
				>
					:
				</Text>
				<VStack spacing='-2'>
					<Text
						fontSize={{ base: '2xl', lg: '4xl' }}
						fontWeight='semibold'
					>
						{hours}
					</Text>
					<Text fontSize={{ base: 'xl', lg: '2xl' }}>Hours</Text>
				</VStack>

				<Text
					fontWeight='bold'
					fontSize={{ base: '2xl', lg: '4xl' }}
				>
					:
				</Text>
				<VStack spacing='-2'>
					<Text
						fontSize={{ base: '2xl', lg: '4xl' }}
						fontWeight='semibold'
					>
						{minutes}
					</Text>
					<Text fontSize={{ base: 'xl', lg: '2xl' }}>Minutes</Text>
				</VStack>
				<Text
					fontWeight='bold'
					fontSize={{ base: '2xl', lg: '4xl' }}
				>
					:
				</Text>
				<VStack spacing='-2'>
					<Text
						fontSize={{ base: '2xl', lg: '4xl' }}
						fontWeight='semibold'
					>
						{seconds}
					</Text>
					<Text fontSize={{ base: 'xl', lg: '2xl' }}>Seconds</Text>
				</VStack>
			</Flex>
		</Flex>
	);
};

export default Timer;
