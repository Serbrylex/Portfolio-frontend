import {
	BlogDiv, DataContainer, ImageContainer, Image, Resume, Link, Title, DateTime
} from './style'

import { useEffect } from 'react'

import imageDefault from '../../images/Walk.svg'

const linkWeb = 'https://portafolioserbrylex.herokuapp.com'

const BlogContainer = ({ blog }) => { 

	const lestResume = () => {		
		blog.resume = blog.resume.slice(0, 100) + '...'
	}

	useEffect(()=>{
		lestResume()
	}, [])
 

	return(
			<BlogDiv>
				<ImageContainer>					
					{ blog.main_image ?
						<Image src={`${linkWeb}${blog.main_image}`} /> :
						<Image src={imageDefault} /> 
					}
				</ImageContainer>	
				<DataContainer>
					<Title>
						<Link to={`/Blog/${blog.id}`}>			   	
							{blog.title}
						</Link>
					</Title>
					<DateTime>{blog.date}</DateTime>
					<Resume>{blog.resume}</Resume>				
				</DataContainer>
			</BlogDiv>
	)
}

export default BlogContainer