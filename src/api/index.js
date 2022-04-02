import comparteride from '../assets/images/comparteride.png'
import instagram from  '../assets/images/instagram.png'
import portfolio from '../assets/images/MyPortafolio.png'
import tooldou from '../assets/images/Tooldou.png'

const apiCall = async ({ url = '', method = "get", body, headers }) => {		

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


export const proyects = () => {
	const es = [
		{
			'name': 'Original Instagram',
			'image': instagram,
			'date': new Date('2021', '06', '30'),
			'description': 'Es un clon de instagram.',
			'gols': 'Está aplicación fue divertido desarrollarla porque para las bases seguí dos cursos (platzigram y petgram, ambos provenientes en platzi) y ambos dejaban bastante a pulir, en ambos cursos se construia un monolito, por lo que tube que aprender ciertas cosas por mi cuenta, implemente el backend como una API a la que se comunica el frontend.',
			'tools': ['Django', 'React.js', 'AWS', 'Heroku'],
			'github': 'https://github.com/Serbrylex/instagram_for_my_portfolio',
			'link': 'https://master.d2wckr9gxsnzjm.amplifyapp.com/',
		},
		{
			'name': 'Mi sitio web',
			'image': portfolio,
			'date': new Date('2021', '09', '3'),
			'description': 'Es mi sitio web, tiene una descripción de mis proyectos, enlaces a ellos, y blog donde pienso escribir semanalmente y cada vez que aprenda algo interesante, será en inglés para mejorar mi selección de palabras.',
			'gols': 'El principal desafío de está aplicación fue que no seguí ningun curso por primera vez, tenía que seguir el mapa de lo que ya sabía.',
			'tools': ['React.js', 'AWS'],
			'github': 'https://github.com/Serbrylex/Portfolio-frontend',
			'link': 'https://master.dpk3kg6kahbq9.amplifyapp.com/'
		},		
		{
			'name': 'Tooldou',
			'image': tooldou,
			'date': new Date('2021', '07', '13'),
			'description': 'Pretende solucionar un problema actual respecto a la asignatura de alimentos y bebidas, al mismo tiempo que ofrece una herramienta para estudiantes y negocios.',
			'gols': 'Buscar un modelo de negocios y buscar la aceptación de las escuelas para implementar el software.',
			'tools': ['Django', 'React.js', 'AWS', 'Heroku'],
			'github': 'https://github.com/Serbrylex/',
			'link': 'https://master.dpk3kg6kahbq9.amplifyapp.com/'
		},
		{
			'name': 'Comparte Ride',
			'image': comparteride,
			'date': new Date('2021', '08', '30'),
			'description': 'Comparte Ride es una aplicación que permite conectar individuos con necesidades en común. (Aún está en progreso)',
			'gols': 'El principal desafío de está aplicación es que tuve que sumergirme en python hasta sus bases para poder seguir el desarrollo del backend y lograr desarrollar una api que es consumida en el frontend, lo más interesante es que implementa tokens en el envio de peticiones, por lo que tube que aprender sobre JWT.',
			'tools': ['Django', 'React.js', 'Celery', 'Redis', 'Docker', 'AWS'],
			'github': 'https://github.com/Serbrylex/cride_frontend',
			'link': 'https://master.d39un5rth4eij9.amplifyapp.com/'
		},
	]	

	const en = [
		{
			'name': 'Original Instagram',
			'image': instagram,
			'date': new Date('2021', '06', '30'),
			'description': 'Is an Instagram clon.',
			'gols': 'This app was fun to develop because for the base i followed two courses on Platzi (platzigram and petgram), both let a lot to the make it better. I developed an API with django and django rest framework, and consume it with fetch, i learned a lot in the process',
			'tools': ['Django', 'React.js', 'AWS', 'Heroku'],
			'github': 'https://github.com/Serbrylex/instagram_for_my_portfolio',
			'link': 'https://master.d2wckr9gxsnzjm.amplifyapp.com/',
		},
		{
			'name': 'My web site',
			'image': portfolio,
			'date': new Date('2021', '09', '3'),
			'description': "It's my website, it has a description of my projects, links to them, and a blog where I write weekly and every time I learn something interesting, it's in English because I want to improve my word selection.",
			'gols': "The main difficulty was that for the first time I did not follow any tutorial or course, I developed it from scratch, only with the map of what I already knew.",
			'tools': ['React.js', 'AWS'],
			'github': 'https://github.com/Serbrylex/Portfolio-frontend',
			'link': 'https://master.dpk3kg6kahbq9.amplifyapp.com/'
		},		
		{
			'name': 'Tooldou',
			'image': tooldou,
			'date': new Date('2021', '07', '13'),
			'description': "This future app aims to solve a real problem with food and beverage assignment, while providing students and businesses with a tool to increase their knowledge about recipes.",
			'gols': "Find a real business model and acceptance in schools to implement the software.",			
			'tools': ['Django', 'React.js', 'AWS', 'Heroku'],
			'github': 'https://github.com/Serbrylex/',
			'link': 'https://master.dpk3kg6kahbq9.amplifyapp.com/'
		},
		{
			'name': 'Comparte Ride',
			'image': comparteride,
			'date': new Date('2021', '08', '30'),
			'description': 'Comparte Ride is an application that allows you to connect people with common needs (Still under development).',			
			'gols': "The main challenge was than i have to go deeply in python to keep with the backend development, the more interesting is that implements the use of tokens in each request, the uso of docker, redis and celery for asynchronous tasks.",
			'tools': ['Django', 'React.js', 'Celery', 'Redis', 'Docker', 'AWS'],
			'github': 'https://github.com/Serbrylex/cride_frontend',
			'link': 'https://master.d39un5rth4eij9.amplifyapp.com/'
		},
	]	

	let languageShort = navigator.language || navigator.userLanguage	
	if (languageShort.includes('en')) {
		return en
	}
	return es
}


export default apiCall