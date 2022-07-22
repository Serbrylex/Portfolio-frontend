// React dependencies
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Head from 'next/head'

// Assets
import {  
	Container, BodyContainer, SectionContainerPath, SectionContainerPathTitle, 
	SectionContainerPathImage, Image, SectionContainer, SectionContainerTitle, 
	SectionSubtitle, SectionContainerContent, WeAre, WeAreTitle, WeAreWho, 
	Link, WeAreImage, SectionContainerContentDescription, DownloadButton,
	SectionContainerContentDescriptionTitle, SectionContainerContentDescriptionInformation, 
	ParagraphDescription, Span, Background, Blogs
} from './style' 

import image from '@public/images/yomero.png' 

// Components
import Layout from '@components/Layout'
import Proyect from '@components/Proyect'
import Loading from '@components/Loading'
import BlogResume from '@components/BlogResume' 
import ToolsInterestings from '@components/ToolsInterestings'

// API
import apiCall, { proyects } from '@api' 

// Hooks
import { useTranslation } from '@hooks/useTranslation'

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
			<Layout>
				<Head>
					<title>Home</title>					
					<meta name='description' content={words.subtitle} />
				</Head>
				<Container>
					<BodyContainer>
						<SectionContainerPath>
							<Background></Background>
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

						<ToolsInterestings />

					</BodyContainer>
				</Container>							
			</Layout>
		)
	}
}

export default Home