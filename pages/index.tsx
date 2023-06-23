// React dependencies
import { useState, useEffect } from 'react'
import Head from 'next/head'

// Assets
import {  
	Container, BodyContainer, SectionContainerPath, SectionContainerPathTitle, 
	SectionContainerPathImage, SectionContainer, SectionContainerTitle, 
	SectionSubtitle, SectionContainerContent, WeAre, WeAreTitle, WeAreWho, 
	Name, WeAreImage, SectionContainerContentDescription, DownloadButton,
	SectionContainerContentDescriptionTitle, SectionContainerContentDescriptionInformation, 
	ParagraphDescription, Background, Blogs, Figure, Image
} from '@styles/home' 


// Components
import Project from '@components/Project'
import Loading from '@components/Loading'
import BlogResume from '@components/BlogResume' 
import ToolsInterestings from '@components/ToolsInterestings'

// API
import apiCall, { projects } from '@api' 

// Hooks
import { useTranslation } from '@hooks/useTranslation'
import { useAppSelector } from '@hooks/useReduxH'

const Home = () => {

	const url = useAppSelector(store => store.preferences.url);
	const image = '/images/yomero.png'
	const [allBlogs, setAllBlogs] = useState([])	
	const { words } = useTranslation({ container: "home", component: '' })
	const [loading, setLoading] = useState<boolean>(true)

	const ApiAsync = async () => {
		try {
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
		} catch (error) {

		}
		setLoading(false)
	}

	useEffect(()=>{
		ApiAsync()
	},[])

	const renderParagraphs = (array: string | string[]) => {
		const para = array as string[]
		return para.map((text, index)=>(
			<ParagraphDescription key={index}>{text}</ParagraphDescription>									
		))}

	

		return( 							
				<Container>
				<Head>
					<title>Serbrylex | Home</title>					
					<meta name='description' content={words.subtitle as string} />
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
											/>										
										</Figure>
									</WeAreImage>
									<WeAreWho>
										{words.whoiam}
									</WeAreWho>
									<DownloadButton href={`/cv/CVGA.pdf`} download="CV">
										{words.download_cv}
									</DownloadButton>								
								</WeAre>
							</SectionContainerPathTitle>
							<SectionContainerPathImage>							
								<Figure>
									<Image 
										src={image} 
										alt="@Serbrylex" 																				
									/>
								</Figure>	
							</SectionContainerPathImage>
						</SectionContainerPath>

						<SectionContainer tcolor={false} id="projects">
							<SectionContainerTitle>
								<SectionSubtitle>{words.projects}</SectionSubtitle>
							</SectionContainerTitle>
							<SectionContainerContent>
								{projects().map((project, index)=>(
									<Project key={index} project={project}/>
								))}
							</SectionContainerContent>						
						</SectionContainer>				

						{allBlogs.length > 0 &&
							<SectionContainer tcolor={true}>
								<SectionContainerTitle>
									<SectionSubtitle>{words.blogs}</SectionSubtitle>
								</SectionContainerTitle>
								<SectionContainerContent>
									<Blogs>																
										{allBlogs?.map((blog, index)=>(
											<BlogResume blog={blog} key={index}/>
										))}
									</Blogs>
								</SectionContainerContent>						
							</SectionContainer>
						}

						<SectionContainer tcolor={false} id="about">
							<SectionContainerTitle>
								<SectionSubtitle>{words.about_me}</SectionSubtitle>
							</SectionContainerTitle>
							<SectionContainerContent>
								<SectionContainerContentDescription>
									<SectionContainerContentDescriptionTitle>{words.who}</SectionContainerContentDescriptionTitle>
									<SectionContainerContentDescriptionInformation>
										{renderParagraphs(words.iam)}
									</SectionContainerContentDescriptionInformation>
								</SectionContainerContentDescription>							
								<SectionContainerContentDescription>
									<SectionContainerContentDescriptionTitle>{words.trayectory}</SectionContainerContentDescriptionTitle>
									<SectionContainerContentDescriptionInformation>
										{renderParagraphs(words.trayecotry_description)}
									</SectionContainerContentDescriptionInformation>
								</SectionContainerContentDescription>
							</SectionContainerContent>
						</SectionContainer>	

						<ToolsInterestings/>

					</BodyContainer>
				</Container>										
		)
	
}

export default Home