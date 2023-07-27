
const apiCall = async ({ url = '', method = "get", body, headers }: {
	url: string,
	method?: string | undefined,
	body?: BodyInit | null | undefined,
	headers?: HeadersInit | undefined
}) => {		

	try{

		const response = await fetch(url, {
			method,
			headers,
			body,
		})		

		return response
	}catch(error){	
		return Promise.reject(error)
	}

}


export const projects = () => {
	const en = [		
		{
			'name': 'AMarine Services',
			'image': 'images/amarine.png',
			'date': new Date(2023, 5, 20),
			'description': "Welcome to our AMarine tool! It's designed to streamline your onboarding process effortlessly. You'll find everything you need, including branch locations, statistics, and charts, along with a handy feature for managing employee satisfaction ratios. We're here to support you throughout your journey, making your experience smooth and enjoyable!",			
			'gols': "The goals of this project are simplify onboarding, provide location information,present statistics and charts, monitor employee satisfaction and enhance efficiency",
			'tools': ['Next.js', 'React.js', 'Charts.js', 'Netlify'],
			'github': 'https://github.com/Serbrylex/amarine-services',
			'link': 'https://main--wondrous-nasturtium-6f7971.netlify.app/'
		},		
		{
			'name': 'CO2Web3',
			'image': '/images/CO2Web3.png',
			'date': new Date(2021, 7, 13),
			'description': "CO2Web3, is an MVP that we created as part of the Ethereum Developer Program.  I was responsible for managing the connection between the web app and the Smart Contract that I wrote and deployed on a testnet.",
			'gols': "It was our first attempt at building something meaningful on Ethereum.",
			'tools': ['Solidity', 'React.js', 'Next.js', 'TypeScript', 'Hardhat', 'Web3.js', 'Ethers.js'],
			'github': 'https://github.com/LuisFelipe09/co2-web-app',
			'link': 'https://github.com/LuisFelipe09/CO2W3-Contracts'
		},	
		{
			'name': 'PlatziPunks',
			'image': '/images/PlatziPunks.png',
			'date': new Date(2021, 7, 13),
			'description': "This project was part of the Ethereum Developer Program where we were learning how to create NFTs and display them on the frontend.",
			'gols': "This was the first time I was trying to understand the complete flow of Ethereum.",			
			'tools': ['Solidity', 'Web3.js', 'React.js', 'Ethers.js', 'Next.js', 'TypeScript', 'Hardhat'],
			'github': 'https://github.com/Serbrylex/web3dapp',
			'link': 'https://main--creative-griffin-26d86d.netlify.app/'
		},		
		{
			'name': 'BatataBit',
			'image': '/images/batatabit.png',
			'date': new Date(2022, 9, 17),
			'description': "BatataBit is a design for a cryptocurrency product. In this project, I utilized HTML, CSS, and JavaScript exclusively. As part of the Platzi course, I implemented a mobile-first approach to enhance my design skills.",
			'gols': "Improve my design skills.",			
			'tools': ['HTML', 'CSS', 'JavaScript'],
			'github': 'https://github.com/Serbrylex/BatataBitDesign',
			'link': 'https://serbrylex.github.io/BatataBitDesign/'
		},
		{
			'name': 'Original Instagram',
			'image': '/images/instagram.png',
			'date': new Date(2021, 6, 30),
			'description': "It's a Instagram clon.",
			'gols': 'This app was fun to develop because I followed two courses on Platzi (Platzigram and Petgram) as the foundation, which provided valuable insights for making it even better. I developed an API using Django and Django Rest Framework, and consumed it using the Fetch API. I learned a lot throughout the entire process.',
			'tools': ['Django', 'React.js', 'Amplify', 'Heroku', 'S3', 'Redux'],
			'github': 'https://github.com/Serbrylex/instagram_for_my_portfolio',
			'link': 'https://wondrous-lollipop-4d1a35.netlify.app',
		},
		{
			'name': 'My website',
			'image': '/images/MyPortafolio.png',
			'date': new Date(2021, 9, 3),
			'description': "It's my website that showcases descriptions of my projects and provides links to them. Additionally, it includes a blog where I write on a weekly basis, sharing interesting things I learn along my journey. The website is in English as I am determined to improve my writing skills.",
			'gols': "The main challenge was that, for the first time, I didn't follow any tutorials or courses. I developed it entirely from scratch, relying solely on the knowledge I already had and a rough outline of the project. I strive to apply everything that I learn in my daily life to this project.",
			'tools': ['React.js', 'AWS'],
			'github': 'https://github.com/Serbrylex/Portfolio-frontend',
			'link': 'https://serbrylex.com'
		}
	]	
	return en
}


export default apiCall