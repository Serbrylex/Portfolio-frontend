import comparteride from '../images/comparteride.png'
import instagram from  '../images/instagram.png'
import portfolio from '../images/MyPortafolio.png'
import tooldou from '../images/Tooldou.png'

const apiCall = async ({ urlDirection = '', method = "get", body, headers }) => {	

	//const url = 'https://portafolioserbrylex.herokuapp.com/' + urlDirection
	const url = 'http://127.0.0.1:8000/' + urlDirection

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


export const proyects = [
	{
		'name': 'Tooldou',
		'image': tooldou,
		'date': new Date('2021', '07', '13'),
		'description': 'Pretende solucionar un problema actual respecto a la asignatura de alimentos y bebidas, al mismo tiempo que ofrece una herramienta para estudiantes y negocios.',
		'gols': 'Buscar un modelo de negocios y buscar la aceptación de las escuelas para implementar el software.',
		'tools': ['Django', 'React.js', 'AWS Amplify', 'Heroku'],
		'github': 'https://github.com/Serbrylex/',
		'link': 'https://master.dpk3kg6kahbq9.amplifyapp.com/'
	},
	{
		'name': 'Original Instagram',
		'image': instagram,
		'date': new Date('2021', '06', '30'),
		'description': 'Es un clon de instagram.',
		'gols': 'Está aplicación fue divertido desarrollarla porque para las bases seguí dos cursos y ambos dejaban bastante a pulir, en ambos cursos se construia un monolito, por lo que tube que aprender ciertas cosas por mi cuenta, implemente el backend como una API a la que se comunica el frontend.',
		'tools': ['Django', 'React.js', 'AWS Amplify', 'Heroku'],
		'github': 'https://github.com/Serbrylex/instagram_for_my_portfolio',
		'link': 'https://master.d2wckr9gxsnzjm.amplifyapp.com/',
	},
	{
		'name': 'Mi sitio web',
		'image': portfolio,
		'date': new Date('2021', '09', '3'),
		'description': 'Es mi sitio web, tiene una descripción de mis proyectos, enlaces a ellos, y proximamente estare trabajando en un pequeño blog donde pienso escribir semanalmente y cada vez que aprenda algo interesante.',
		'gols': 'El principal desafío de está aplicación fue que no seguí ningun curso por primera vez, tenía que seguir el mapa de lo que ya sabía.',
		'tools': ['React.js', 'AWS Amplify'],
		'github': 'https://github.com/Serbrylex/Portfolio-frontend',
		'link': 'https://master.dpk3kg6kahbq9.amplifyapp.com/'
	},		
	{
		'name': 'Comparte Ride',
		'image': comparteride,
		'date': new Date('2021', '08', '30'),
		'description': 'Comparte Ride es una aplicación que permite conectar individuos con necesidades en común. (Aún está en progreso)',
		'gols': 'El principal desafío de está aplicación es que tube que sumergirme en python hasta sus bases para poder seguir el desarrollo del backend y lograr desarrollar una api que es consumida en el frontend, lo más interesante es que implementa tokens en el envio de peticiones, por lo que tube que aprender sobre JWT.',
		'tools': ['Django', 'React.js', 'Celery', 'Redis', 'Docker', 'AWS'],
		'github': 'https://github.com/Serbrylex/cride_frontend',
		'link': 'https://master.d39un5rth4eij9.amplifyapp.com/'
	},
]	


export default apiCall