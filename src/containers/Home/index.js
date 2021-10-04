// React dependencies
import { useState, useEffect, useContext } from 'react'
import { Helmet } from "react-helmet";
   
// Styles and images
import {  
	Container, BodyContainer, SectionContainerPath, SectionContainerPathTitle, SectionContainerPathImage, 
	Image, SectionContainer, SectionContainerTitle, SectionSubtitle, SectionContainerContent, LastSectionContainer, LastSectionContainerTitle, DownloadButton,
	LastSectionContainerContent, LastSection, LastSectionList, WeAre, WeAreTitle, WeAreWho, Link, WeAreImage,
	SectionContainerContentDescription, SectionContainerContentDescriptionTitle, SectionContainerContentDescriptionInformation, ParagraphDescription,
	Span, IconContainer
} from './style' 

import image from '../media/yomero.jpeg' 

// Components
import Header from '../../components/Header' 
import Footer from '../../components/Footer' 
import BlogContainer from '../../components/BlogContainer'
import Proyect from '../../components/Proyect'
import SeeMore from '../../components/SeeMore'
 
import apiCall from '../../api' 

import TokenContext from '../../context/tokens'

import { FaReact } from 'react-icons/fa'
import { SiDjango, SiJavascript, SiPython, SiMongodb, SiSpacex } from 'react-icons/si'
import { GrMysql, GrAssistListening } from 'react-icons/gr'
import { BsPhone } from 'react-icons/bs'
import { FaFont } from 'react-icons/fa'
import { AiOutlineBook, AiOutlineGithub } from 'react-icons/ai'
import { GiMaterialsScience } from 'react-icons/gi'
import { BiRocket, BiBrain } from 'react-icons/bi'
import { VscServerProcess } from 'react-icons/vsc'
import { FiHeadphones } from 'react-icons/fi'


const Home = ({ url }) => {

	const [allBlogs, setAllBlogs] = useState([])
	const [allProyects, setAllProyects] = useState([])
	const [admin, setAdmin] = useState(false)
	//const { token } = useContext(TokenContext)

	const ApiAsync = async () => {
		let data = await apiCall({urlDirection: `blog-list/all/`})

		data = data.splice(0, 6)
		setAllBlogs(data)
		// De momento proyects lo gua dejar ahí
		setAllProyects(data)
	}

	/*useEffect(()=>{		
		if (token.length !== 0){
			if (token.access_token){
				setAdmin(true)
			} else {
				console.log('¿Qué has encontrao, wacho?')
			}
		}	
	},[token])*/

	/*useEffect( () => {
		ApiAsync().catch(null)	 
	},[])*/


	// Hace falta configurar los idiomas y el tema, así como agregar los eventos aslfjas
	// se va a guardar en un contexto
	return( 
		<>	
			<Helmet>
                <title>@Serbrylex</title>
				<meta name='description' content='Si quires trabajar con @Serbrylex, este es el lugar' />
			</Helmet>
			<Header admin={admin}/>
			<Container>
				<BodyContainer>
					<SectionContainerPath>
						<SectionContainerPathTitle>
							<WeAre>
								<WeAreTitle>
									<Link>Sergio Bryan Madrid Nuñez</Link>
								</WeAreTitle>
								<WeAreImage>
									<Image src={image} alt='Yo mero' />
								</WeAreImage>
								<WeAreWho>
									Soy un eterno estudiante que busca algún día poder cambiar el mundo a través de la tecnología.
								</WeAreWho>
								<DownloadButton href={`${url}/media/extras/CV.pdf`} download="CV">
									Descargar CV
								</DownloadButton>								
							</WeAre>
						</SectionContainerPathTitle>
						<SectionContainerPathImage>
							<Image src={image} alt="" />
						</SectionContainerPathImage>
					</SectionContainerPath>

					<SectionContainer color="false">
						<SectionContainerTitle align='left'>
							<SectionSubtitle>Proyects</SectionSubtitle>
						</SectionContainerTitle>
						<SectionContainerContent>
							{apiCall.proyects.map((proyect, index)=>(
								<Proyect key={index} proyect={proyect}/>
							))}
						</SectionContainerContent>						
					</SectionContainer>				

					<SectionContainer color="true">
						<SectionContainerTitle align='right'>
							<SectionSubtitle>Sobre mi</SectionSubtitle>
						</SectionContainerTitle>
						<SectionContainerContent>
							<SectionContainerContentDescription>
								<SectionContainerContentDescriptionTitle>¿Quién soy?</SectionContainerContentDescriptionTitle>
								<SectionContainerContentDescriptionInformation>
									<ParagraphDescription>Interesante pregunta, soy un joven de 20 años que usa la tecnología para darle forma al mundo.</ParagraphDescription>
									<ParagraphDescription>Una persona fascinada por el infinito potencial humano que busca llevarse a sí mismo al limite con tal de alcanzar sus metas.</ParagraphDescription>
								</SectionContainerContentDescriptionInformation>
							</SectionContainerContentDescription>							
							<SectionContainerContentDescription>
								<SectionContainerContentDescriptionTitle>Trayectoria</SectionContainerContentDescriptionTitle>
								<SectionContainerContentDescriptionInformation>
									<ParagraphDescription>Mi primer contacto con la programación fue durante la preparatoría, 
									estudía programación en el CBTis #111 en dónde aprendí pseudocodigo, las bases de C++, Java y algo de desarrollo de apps moviles con AndroidStudio y junto a un amigo vi algo de Kotlin,
									por mi cuenta aprendí las bases del desarrollo web pues sólo lo vimos muy por encima.</ParagraphDescription>
									<ParagraphDescription>Cuando terminé la preparatoría
									tuve que trabajar y ahorrando poco a poco pagué la subscripción anual de <Span>platzi</Span> (la agarre en black friday) y ahí
									fue donde mejore exponencialmente. Aprendí correctamente <Span>HTML, CSS, JavaScript, React js, Python y Django</Span>; También tomé cursos
									sobre el <Span>manejo de las emociones, administración efectiva del tiempo, inglés e incluso sobre finanzas</Span> y gracias a Platzi, cursos aparte en Udemy, videos en youtube y distintos libros hoy soy competente en el desarrollo web.</ParagraphDescription>
									<ParagraphDescription>Sigo aprendiendo todos los días y aunque hoy sé más sobre frontend en un futuro cercano me gustaría poder ser un completo fullstack.
									Tengo como objetivo pagar mi universidad con el dinero que me de trabajar como desarrollador de software, voy a entrar a la <Span>Universidad del Caribe</Span> en la licenciatura: <Span>Ingeniería en Datos e Inteligencia Organizacional</Span>,
									pues tiene economía, algo de física, matemáticas y mucha programación
									y en el tiempo que estudíe ahí espero poder obtener una beca para estudiar de intercambio en Estados Unidos. Cuando terminé la universidad pienso migrar para poder contribuir
									al <Span>sueño espacial</Span>.</ParagraphDescription>
								</SectionContainerContentDescriptionInformation>
							</SectionContainerContentDescription>
						</SectionContainerContent>
					</SectionContainer>	

					<LastSection color="false">
						<LastSectionContainer>
							<LastSectionContainerTitle>
								<SectionSubtitle>Herramientas</SectionSubtitle>
							</LastSectionContainerTitle>
							<LastSectionContainerContent>						
								<LastSectionList>
									<IconContainer>
										<FaReact />
									</IconContainer>
									React
								</LastSectionList>
								<LastSectionList>
									<IconContainer>
										<SiDjango />
									</IconContainer>
									Django
								</LastSectionList>
								<LastSectionList>
									<IconContainer>
										<SiJavascript />
									</IconContainer>
									JavaScript
								</LastSectionList>
								<LastSectionList>
									<IconContainer>
										<SiPython />
									</IconContainer>
									Python
								</LastSectionList>
								<LastSectionList>
									<IconContainer>
										<FaFont />
									</IconContainer>
									English
								</LastSectionList>
								<LastSectionList>
									<IconContainer>
										<GrMysql />
									</IconContainer>
									MySQL
								</LastSectionList>
								<LastSectionList>
									<IconContainer>
										<SiMongodb/>
									</IconContainer>
									Mongo DB
								</LastSectionList>
								<LastSectionList>
									<IconContainer>
										<BsPhone/>
									</IconContainer>
									Responsive Web
								</LastSectionList>
								<LastSectionList>
									<IconContainer>
										<SiPython />
									</IconContainer>
									Scraping
								</LastSectionList>
								<LastSectionList>
									<IconContainer>
										<AiOutlineGithub />
									</IconContainer>
									GitHub
								</LastSectionList>
							</LastSectionContainerContent>
						</LastSectionContainer>
						<LastSectionContainer>
							<LastSectionContainerTitle>
								<SectionSubtitle>Intereses</SectionSubtitle>
							</LastSectionContainerTitle>
							<LastSectionContainerContent>						
								<LastSectionList>
									<IconContainer>
										<AiOutlineBook />
									</IconContainer>
										Leer
									</LastSectionList>
									<LastSectionList>
									<IconContainer>
										<GiMaterialsScience />
									</IconContainer>
										Ciencia
									</LastSectionList>
									<LastSectionList>
									<IconContainer>
										<SiSpacex />
									</IconContainer>
										Emprendimiento
									</LastSectionList>
									<LastSectionList>
									<IconContainer>
										<BiRocket />
									</IconContainer>
										El espacio
									</LastSectionList>
									<LastSectionList>
									<IconContainer>
											<VscServerProcess />
									</IconContainer>
										Desarrollo web
									</LastSectionList>
									<LastSectionList>
									<IconContainer>
											<BiBrain />
									</IconContainer>
										Estoicismo
									</LastSectionList>
									<LastSectionList>
									<IconContainer>
											<GrAssistListening />
									</IconContainer>
										Aprender nuevos idiomas
									</LastSectionList>
									<LastSectionList>
									<IconContainer>
											<FiHeadphones />
									</IconContainer>
										Amo la música
									</LastSectionList>
							</LastSectionContainerContent>
						</LastSectionContainer>
					</LastSection>
				</BodyContainer>
			</Container>
			<Footer />			
		</>
	)
}

export default Home