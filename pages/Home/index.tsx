// React dependencies
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Head from 'next/Head'
import Image from 'next/image'

// Assets
import {  
	Container, BodyContainer, SectionContainerPath, SectionContainerPathTitle, 
	SectionContainerPathImage, SectionContainer, SectionContainerTitle, 
	SectionSubtitle, SectionContainerContent, WeAre, WeAreTitle, WeAreWho, 
	Name, WeAreImage, SectionContainerContentDescription, DownloadButton,
	SectionContainerContentDescriptionTitle, SectionContainerContentDescriptionInformation, 
	ParagraphDescription, Span, Background, Blogs, Figure
} from './style' 

import image from '@public/images/yomero.png' 

// Components
import Project from '@components/Project'
import Loading from '@components/Loading'
import BlogResume from '@components/BlogResume' 
import ToolsInterestings from '@components/ToolsInterestings'

// API
import apiCall, { projects } from '@api' 

// Hooks
import { useTranslation } from '@hooks/useTranslation'

const Home = () => {

	const url = useSelector(store => store.preferences.url)

	const [allBlogs, setAllBlogs] = useState([])	
	const { words } = useTranslation({ container: "home", component: undefined })
	const [loading, setLoading] = useState<boolean>(true)

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
				<Container>
				<Head>
					<title>Serbrylex | Home</title>					
					<meta name='description' content={words.subtitle} />
				</Head>
					<BodyContainer>
						<SectionContainerPath>
							<Background></Background>
							<SectionContainerPathTitle>
								<WeAre>
									<WeAreTitle>
										<Name>Sergio Bryan Madrid Nuñez</Name>
									</WeAreTitle>
									<WeAreImage>										
										<Figure>
											<Image
												src={image}
												alt='@Serbrylex'
												layout='fixed'
											/>										
										</Figure>
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
								<Figure>
									<Image 
										src={image} 
										alt="@Serbrylex" 
										layout="fill"
										objectFit="cover"
									/>
								</Figure>	
							</SectionContainerPathImage>
						</SectionContainerPath>

						<SectionContainer color="false" id="projects">
							<SectionContainerTitle align='left'>
								<SectionSubtitle>{words.projects}</SectionSubtitle>
							</SectionContainerTitle>
							<SectionContainerContent>
								{projects().map((project, index)=>(
									<Project key={index} project={project}/>
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

						<SectionContainer color="false" id="about">
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

						<ToolsInterestings/>

					</BodyContainer>
				</Container>										
		)
	}
}

export default Home