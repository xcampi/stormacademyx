import { Box, Container } from '@chakra-ui/react';
import TopBar from '../../components/TopBar';
import Hero from './Hero';
import styles from '../../styles/Home.module.css';
import Timer from './Timer';
import WeProvide from './WeProvide';
import Features from './Features';
import Courses from './Courses';
import StartLearning from './StartLearning';
import Footer from '../../components/Footer';

const index = () => {
	return (
		<>
			<Box className={styles.wave}>
				<Container
					maxW='1800'
					color='black'
				>
					<TopBar />
					<Hero />
				</Container>
			</Box>
			<Timer />
			<WeProvide />
			<Features />
			<Courses />
			<StartLearning/>
			<Footer/>
		</>
	);
};

export default index;
