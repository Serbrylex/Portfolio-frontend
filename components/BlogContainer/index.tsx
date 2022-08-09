/*import React, { useEffect } from 'react'

import {
	BlogDiv, DataContainer, ImageContainer, Image, Resume, Link, Title, DateTime
} from './style'


import { useAppSelector } from '@hooks/useReduxH'

const BlogContainer = ({ blog }: { blog: TBlog }) => { 
	
	const url = useAppSelector(store => store.preferences.url)
	const imageDefault = '/images/Walk.svg'

	useEffect(()=>{
		if (blog.resume !== undefined) {
			blog.resume = blog.resume.slice(0, 80) + '...'
		}
	}, [])
 

	/*return(
			<BlogDiv>
				<ImageContainer>					
					{ blog.image ?
						<Image src={blog.image} /> :
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

	return <div></div>
}

export default BlogContainer*/