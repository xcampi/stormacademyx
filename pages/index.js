import Head from 'next/head';
import Home from './home';

export default function Index() {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.svg'
					sizes='any'
					type='image/svg+xml'
				/>

				{/* Custom Meta Tags */}
				{/* Primary Meta Tag */}
				<title>Storm Academy</title>
				<meta
					name='title'
					content='Storm Academy'
				/>
				<meta
					name='description'
					content='StørmAcademy is an upcoming coding platform. This project will provide multiple ways to code which will consist in an online code editor where the client/user can edit the syntax given in an exercise, or in a course.'
				/>

				{/* Open Graph / Facebook */}
				<meta
					property='og:type'
					content='website'
				/>
				<meta
					property='og:url'
					content='https://storm-academy.vercel.app/'
				/>
				<meta
					property='og:title'
					content='Storm Academy'
				/>
				<meta
					property='og:description'
					content='StørmAcademy is an upcoming coding platform. This project will provide multiple ways to code which will consist in an online code editor where the client/user can edit the syntax given in an exercise, or in a course.'
				/>
				<meta
					property='og:image'
					content='https://storm-academy.vercel.app/favicon.svg'
				/>

				{/* Twitter */}
				<meta
					property='twitter:card'
					content='summary_large_image'
				/>
				<meta
					property='twitter:url'
					content='https://storm-academy.vercel.app/'
				/>
				<meta
					property='twitter:title'
					content='Storm Academy'
				/>
				<meta
					property='twitter:description'
					content='StørmAcademy is an upcoming coding platform. This project will provide multiple ways to code which will consist in an online code editor where the client/user can edit the syntax given in an exercise, or in a course.'
				/>
				<meta
					property='twitter:image'
					content='https://storm-academy.vercel.app/favicon.svg'
				/>
			</Head>
			<Home />
		</>
	);
}
