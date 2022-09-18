
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
			'name': 'CO2Web3',
			'image': '/images/CO2Web3.png',
			'date': new Date(2021, 7, 13),
			'description': "CO2Web3, is an MVP that we created as part of the Ethereum Developer Program. I was in charge of handling the connection between the web app and the Smart Contract that I wrote and deployed in a testnet.",
			'gols': "It was our first time trying to build something useful in Ethereum.",
			'tools': ['Solidity', 'React.js', 'Next.js', 'TypeScript', 'Hardhat', 'Web3.js', 'Ethers.js'],
			'github': 'https://github.com/LuisFelipe09/co2-web-app',
			'link': 'https://github.com/LuisFelipe09/CO2W3-Contracts'
		},	
		{
			'name': 'PlatziPunks',
			'image': '/images/PlatziPunks.png',
			'date': new Date(2021, 7, 13),
			'description': "This project was part of the Ethereum Developer Program. We were learning about how to create NFTs and watching them in the frontend.",
			'gols': "This was the first time that I was trying to see the complete picture ethereum flow.",			
			'tools': ['Solidity', 'Web3.js', 'React.js', 'Ethers.js', 'Next.js', 'TypeScript', 'Hardhat'],
			'github': 'https://github.com/Serbrylex/web3dapp',
			'link': 'https://serbrylex.com/blog/10'
		},		
		{
			'name': 'BatataBit',
			'image': '/images/batatabit.png',
			'date': new Date(2022, 9, 17),
			'description': "BatataBit, is a design of a cripto product. In this project I use just html, css and js. I made the project mobile first as part of the Platzi course to improve my design abilities.",
			'gols': "Imprube my design skills.",			
			'tools': ['HTML', 'CSS', 'JavaScript'],
			'github': 'https://github.com/Serbrylex/BatataBitDesign',
			'link': 'https://serbrylex.github.io/BatataBitDesign/'
		},
		{
			'name': 'Original Instagram',
			'image': '/images/instagram.png',
			'date': new Date(2021, 6, 30),
			'description': 'Is an Instagram clon.',
			'gols': 'This app was fun to develop because for the base i followed two courses on Platzi (platzigram and petgram), both let a lot to the make it better. I developed an API with django and django rest framework, and consume it with fetch, i learned a lot in the process',
			'tools': ['Django', 'React.js', 'Amplify', 'Heroku', 'S3', 'Redux'],
			'github': 'https://github.com/Serbrylex/instagram_for_my_portfolio',
			'link': 'https://wondrous-lollipop-4d1a35.netlify.app',
		},
		{
			'name': 'My website',
			'image': '/images/MyPortafolio.png',
			'date': new Date(2021, 9, 3),
			'description': "It's my website, it has a description of my projects, links to them, and a blog where I write weekly and every time I learn something interesting, it's in English because I want to improve my word selection.",
			'gols': "The main difficulty was that for the first time I did not follow any tutorial or course, I developed it from scratch, only with the map of what I already knew.",
			'tools': ['React.js', 'AWS'],
			'github': 'https://github.com/Serbrylex/Portfolio-frontend',
			'link': 'https://serbrylex.com'
		},
		{
			'name': 'Comparte Ride',
			'image': 'images/comparteride.png',
			'date': new Date(2021, 8, 30),
			'description': 'Comparte Ride is an application that allows you to connect people with common needs (Still under development).',			
			'gols': "The main challenge was than i have to go deeply in python to keep with the backend development, the more interesting is that implements the use of tokens in each request, the uso of docker, redis and celery for asynchronous tasks.",
			'tools': ['Django', 'React.js', 'Celery', 'Redis', 'Docker', 'AWS'],
			'github': 'https://github.com/Serbrylex/cride_frontend',
			'link': 'https://serbrylex.com'
		},
	]	
	return en
}


export default apiCall