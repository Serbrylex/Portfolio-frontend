import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
	BlogDiv, DataContainer, ImageContainer, Image, Resume, Link, Title, DateTime
} from './style'


import imageDefault from '../../assets/images/Walk.svg'

const BlogContainer = ({ blog }: { blog: TBlog }) => { 
	
	const url = useSelector(store => store.preferences.url)

	useEffect(()=>{
		if (blog.resume !== undefined) {
			blog.resume = blog.resume.slice(0, 80) + '...'
		}
	}, [])
 

	return(
			<BlogDiv>
				<ImageContainer>					
					{ blog.main_image ?
						<Image src={blog.main_image} /> :
						<Image src={imageDefault} /> 
					}
				</ImageContainer>	
				<DataContainer>
					<Title>
						<Link href={`/blog/${blog.id}`}>			   	
							<a>
								{blog.title}
							</a>
						</Link>
					</Title>
					<DateTime>{blog.date}</DateTime>
					<Resume>{blog.resume}</Resume>				
				</DataContainer>
			</BlogDiv>
	)
}

export default BlogContainer