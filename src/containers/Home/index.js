// React dependencies
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
   
// Assets
import {  
	Container, BodyContainer, SectionContainerPath, SectionContainerPathTitle, SectionContainerPathImage, 
	Image, SectionContainer, SectionContainerTitle, SectionSubtitle, SectionContainerContent, LastSectionContainer, LastSectionContainerTitle, DownloadButton,
	LastSectionContainerContent, LastSection, LastSectionList, WeAre, WeAreTitle, WeAreWho, Link, WeAreImage,
	SectionContainerContentDescription, SectionContainerContentDescriptionTitle, SectionContainerContentDescriptionInformation, ParagraphDescription,
	Span, IconContainer,
	Blogs
} from './style' 

import image from '../../assets/images/yomero.png' 

import { FaReact, FaFont, FaFirefox } from 'react-icons/fa'
import { SiEthereum, SiDjango, SiJavascript, SiPython, SiMongodb, SiSpacex, SiCss3, SiDuolingo } from 'react-icons/si'
import { GrMysql, GrNode } from 'react-icons/gr'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineBook, AiOutlineGithub, AiOutlineHtml5 } from 'react-icons/ai'
import { GiMaterialsScience, GiRobotAntennas, GiDatabase } from 'react-icons/gi'
import { BiRocket, BiBrain, BiTestTube } from 'react-icons/bi'
import { VscServerProcess } from 'react-icons/vsc'
import { FiHeadphones } from 'react-icons/fi'

// Components
import Layout from '../../components/Layout'
import Proyect from '../../components/Proyect'
import Loading from '../../components/Loading'
import BlogResume from '../../components/BlogResume' 

// API
import apiCall, { proyects } from '../../api' 

// Hooks
import { useTranslation } from '../../hooks/useTranslation'

const Home = () => {

	const url = useSelector(store => store.preferences.url)

	const [allBlogs, setAllBlogs] = useState([])	
	const { words } = useTranslation({ container: "home" })
	const [loading, setLoading] = useState(true)

	const ApiAsync = async () => {
		let response = await apiCall({url: `${url}/blog-list/all/`})		
		if (response.status === 200) {
			let data = await response.json()			
			if (data.length > 6) {
				data = data.splice(0, 6)
			}
			if (data.length !== 0) {
				setAllBlogs(data)		
			}			
		}
		setLoading(false)
	}

	useEffect(()=>{
		ApiAsync()
	},[])

	if (loading) {
		return <Loading />
	} else {

		// Hace falta configurar los idiomas y el tema, así como agregar los eventos aslfjas
		// se va a guardar en un contexto
		return( 
			<Layout title='Home' subtitle={words.subtitle}>						
				<Container>
					<BodyContainer>
						<SectionContainerPath>
							<SectionContainerPathTitle>
								<WeAre>
									<WeAreTitle>
										<Link>Sergio Bryan Madrid Nuñez</Link>
									</WeAreTitle>
									<WeAreImage>
										<Image src={image} alt='@Serbrylex' />
									</WeAreImage>
									<WeAreWho>
										{words.whoiam}
									</WeAreWho>
									<DownloadButton href={`${url}/media/extras/CV.pdf`} download="CV">
										{words.download_cv}
									</DownloadButton>								
								</WeAre>
							</SectionContainerPathTitle>
							<SectionContainerPathImage>
								<Image src={image} alt="@Serbrylex" />
							</SectionContainerPathImage>
						</SectionContainerPath>

						<SectionContainer color="false">
							<SectionContainerTitle align='left'>
								<SectionSubtitle>{words.proyects}</SectionSubtitle>
							</SectionContainerTitle>
							<SectionContainerContent>
								{proyects().map((proyect, index)=>(
									<Proyect key={index} proyect={proyect}/>
								))}
							</SectionContainerContent>						
						</SectionContainer>				

						{allBlogs.length > 0 &&
							<SectionContainer color="true">
								<SectionContainerTitle align='right'>
									<SectionSubtitle>{words.blogs}</SectionSubtitle>
								</SectionContainerTitle>
								<SectionContainerContent>
									<Blogs>																
										{allBlogs?.map((blog, index)=>(
											<BlogResume blog={blog} url={url} key={index}/>
										))}
									</Blogs>
								</SectionContainerContent>						
							</SectionContainer>
						}

						<SectionContainer color="false">
							<SectionContainerTitle align='left'>
								<SectionSubtitle>{words.about_me}</SectionSubtitle>
							</SectionContainerTitle>
							<SectionContainerContent>
								<SectionContainerContentDescription>
									<SectionContainerContentDescriptionTitle>{words.who}</SectionContainerContentDescriptionTitle>
									<SectionContainerContentDescriptionInformation>
										{words.iam.map((text, index)=>(
											<ParagraphDescription key={index}>{text}</ParagraphDescription>									
										))}
									</SectionContainerContentDescriptionInformation>
								</SectionContainerContentDescription>							
								<SectionContainerContentDescription>
									<SectionContainerContentDescriptionTitle>{words.trayectory}</SectionContainerContentDescriptionTitle>
									<SectionContainerContentDescriptionInformation>
										{words.trayecotry_description.map((text, index)=>(
											<ParagraphDescription key={index}>{text}</ParagraphDescription>																				
										))}
									</SectionContainerContentDescriptionInformation>
								</SectionContainerContentDescription>
							</SectionContainerContent>
						</SectionContainer>	

						<LastSection color="true">
							<LastSectionContainer>
								<LastSectionContainerTitle>
									<SectionSubtitle>{words.tools}</SectionSubtitle>
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
										English C1
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
										Git and GitHub
									</LastSectionList>
									<LastSectionList>
										<IconContainer>
											<AiOutlineHtml5 />
										</IconContainer>
										HTML5
									</LastSectionList>
									<LastSectionList>
										<IconContainer>
											<SiCss3 />
										</IconContainer>
										CSS
									</LastSectionList>

									<LastSectionList>
										<IconContainer>
											<BiTestTube />
										</IconContainer>
										Jest
									</LastSectionList>
									<LastSectionList>
										<IconContainer>
											<FaFirefox />
										</IconContainer>
										Selenium
									</LastSectionList>
									<LastSectionList>
										<IconContainer>
											<GrNode />
										</IconContainer>
										Node js
									</LastSectionList>
									<LastSectionList>
										<IconContainer>
											<AiOutlineBook />
										</IconContainer>
										Logical thinking
									</LastSectionList>
								</LastSectionContainerContent>
							</LastSectionContainer>
							<LastSectionContainer>
								<LastSectionContainerTitle>
									<SectionSubtitle>{words.interestings}</SectionSubtitle>
								</LastSectionContainerTitle>
								<LastSectionContainerContent>						
									<LastSectionList>
										<IconContainer>
											<AiOutlineBook />
										</IconContainer>
											Read
										</LastSectionList>
										<LastSectionList>
										<IconContainer>
											<GiMaterialsScience />
										</IconContainer>
											Science
										</LastSectionList>
										<LastSectionList>
										<IconContainer>
											<SiSpacex />
										</IconContainer>
											Entrepreneur
										</LastSectionList>
										<LastSectionList>
										<IconContainer>
											<BiRocket />
										</IconContainer>
											Space
										</LastSectionList>
										<LastSectionList>
										<IconContainer>
												<VscServerProcess />
										</IconContainer>
											Web Development
										</LastSectionList>
										<LastSectionList>
										<IconContainer>
												<BiBrain />
										</IconContainer>
											Stoicism
										</LastSectionList>
										<LastSectionList>
										<IconContainer>
												<SiDuolingo/>
										</IconContainer>
											Languages
										</LastSectionList>
										<LastSectionList>
											<IconContainer>
												<FiHeadphones />
											</IconContainer>
											I love music
										</LastSectionList>

										<LastSectionList>
											<IconContainer>
												<AiOutlineBook />
											</IconContainer>
											Maths
										</LastSectionList>
										<LastSectionList>
											<IconContainer>
												<GiRobotAntennas />
											</IconContainer>
											IA
										</LastSectionList>
										<LastSectionList>
											<IconContainer>
												<SiEthereum />
											</IconContainer>
											Cryptocurrency
										</LastSectionList>
										<LastSectionList>
											<IconContainer>
												<SiPython />
											</IconContainer>
											Machine Learnig
										</LastSectionList>
										<LastSectionList>
											<IconContainer>
												<GiDatabase />
											</IconContainer>
											Big Data											
										</LastSectionList>
										<LastSectionList>
											<IconContainer>
												<BiRocket />
											</IconContainer>											
											Engineering
										</LastSectionList>
								</LastSectionContainerContent>
							</LastSectionContainer>
						</LastSection>
					</BodyContainer>
				</Container>							
			</Layout>
		)
	}
}

export default Home