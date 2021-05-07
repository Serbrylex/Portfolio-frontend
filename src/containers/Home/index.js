// React dependencies
import { useState, useEffect, useContext } from 'react'
import { Helmet } from "react-helmet";
 
// Styles and images
import { 
	Container, BodyContainer, SectionContainerPath, SectionContainerPathTitle, SectionContainerPathImage, 
	Image, SectionContainer, SectionContainerTitle, SectionSubtitle, SectionContainerContent,
	SectionContainerContentProyects, LastSectionContainer, LastSectionContainerTitle, 
	LastSectionContainerContent, LastSection, LastSectionList, WeAre, WeAreTitle, WeAreWho, Link, WeAreImage
} from './style'
import image from '../../images/Walk.svg' 

// Components
import Header from '../../components/Header'
import BlogContainer from '../../components/BlogContainer'
import Proyect from '../../components/Proyect'
import Footer from '../../components/Footer'
import SeeMore from '../../components/SeeMore'
 
import apiCall from '../../api' 

import TokenContext from '../../context/tokens'

const Home = ({ url }) => {

	const [allBlogs, setAllBlogs] = useState([])
	const [allProyects, setAllProyects] = useState([])
	const [admin, setAdmin] = useState(false)
	const { token } = useContext(TokenContext)

	const ApiAsync = async () => {
		let data = await apiCall({urlDirection: `blog-list/all/`})

		data = data.splice(0, 6)
		setAllBlogs(data)
		// De momento proyects lo gua dejar ahí
		setAllProyects(data)
	}

	useEffect(()=>{		
		if (token.length !== 0){
			if (token.access_token){
				setAdmin(true)
			} else {
				console.log('¿Qué has encontrao, wacho?')
			}
		}	
	},[token])

	useEffect( () => {
		ApiAsync().catch(null)	 
	},[])


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
									<Link>We are</Link>
								</WeAreTitle>
								<WeAreWho>We are just two friends having fun coding your dreams</WeAreWho>
								<WeAreImage>
									<Image src={image} alt="" />
								</WeAreImage>
							</WeAre>
						</SectionContainerPathTitle>
						<SectionContainerPathImage>
							<Image src={image} alt="" />
						</SectionContainerPathImage>
					</SectionContainerPath>

					<SectionContainer color="false">				
						<SectionContainerTitle align='right'>
							<SectionSubtitle>Blogs</SectionSubtitle>
						</SectionContainerTitle>
						<SectionContainerContent>
							{allBlogs?.map((blog, index)=>(
								<BlogContainer key={index} blog={blog} url={url} />
							))}									
						</SectionContainerContent>				
						<SeeMore link='/Blogs' title='All blogs' color="false"/>				
					</SectionContainer>

					<SectionContainer color="true">
						<SectionContainerTitle align='left'>
							<SectionSubtitle>Proyects</SectionSubtitle>
						</SectionContainerTitle>
						<SectionContainerContentProyects>
							{allProyects?.map((proyect, index)=>(
								<Proyect key={index} proyect={proyect} url={url}/>
							))}
						</SectionContainerContentProyects>
						<SeeMore link="/Blogs/proyects" title='Proyects Blogs' color='true' />				
					</SectionContainer>

					<LastSection color="false">
						<LastSectionContainer>
							<LastSectionContainerTitle>
								<SectionSubtitle>Skills</SectionSubtitle>
							</LastSectionContainerTitle>
							<LastSectionContainerContent>						
								<LastSectionList>React.js...</LastSectionList>
								<LastSectionList>Django...</LastSectionList>
								<LastSectionList>JavaScript...</LastSectionList>
								<LastSectionList>Python...</LastSectionList>
								<LastSectionList>English...</LastSectionList>
								<LastSectionList>MySQL...</LastSectionList>
								<LastSectionList>Mongo DB...</LastSectionList>
								<LastSectionList>Responsive Web...</LastSectionList>
								<LastSectionList>Scraping...</LastSectionList>
							</LastSectionContainerContent>
						</LastSectionContainer>
						<LastSectionContainer>
							<LastSectionContainerTitle>
								<SectionSubtitle>Interestings</SectionSubtitle>
							</LastSectionContainerTitle>
							<LastSectionContainerContent>						
								<LastSectionList>Read...</LastSectionList>
								<LastSectionList>The San Francisco Culture...</LastSectionList>
								<LastSectionList>Enterpreneur...</LastSectionList>
								<LastSectionList>Space...</LastSectionList>
								<LastSectionList>Science...</LastSectionList>
								<LastSectionList>Interplanetary life...</LastSectionList>
								<LastSectionList>We love music...</LastSectionList>
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