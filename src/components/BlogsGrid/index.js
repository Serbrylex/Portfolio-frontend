import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import apiCall from '../../api'

// Assets
import {
	BlogsGridContainer, GroupOfThree, GroupOfTwo, BlogContainer,
	ImageContainer, Img, Information, Title, Delete
} from './style'

import { AiFillCloseCircle } from 'react-icons/ai'


const Blog = ({ blog, position, handleFirstDelete }) => {

	const history = useHistory()
	const user = useSelector(store => store.user)
	const url = useSelector(store => store.preferences.url)

	return (
		<BlogContainer first_blog={position === 0}>
			{user.isAuth &&
				<Delete onClick={()=> handleFirstDelete(blog.id, position, blog.title)}><AiFillCloseCircle /></Delete>
			}
			<ImageContainer first_blog={position === 0}>
				<Img src={`${url}${blog.image}`} alt={blog.title} />
			</ImageContainer>
			<Information>
				<Title onClick={()=>history.push(`/blog/${blog.id}`)}>{blog.title}</Title>				
				<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
					{blog.content.slice(0, 150) + '...'}
				</ReactMarkdown>				
			</Information>
		</BlogContainer>
	)
}

const BlogsGrid = ({ blogs, handleFirstDelete }) => {	
	
	const [elements, setElements] = useState([])
	const user = useSelector(store => store.user)
	const url = useSelector(store => store.preferences.url)	

	useEffect(()=>{
		console.log('Im inside')
		console.log(blogs)
		const aux_elements = []
		if (blogs.length > 0) {
			aux_elements.push(
				<Blog blog={blogs[0]} position={0} handleFirstDelete={handleFirstDelete}/>
				
			)
			for (var i = 1; i < blogs.length; i+=5) {
				aux_elements.push(				
					<>	
						{blogs.length > i &&
						<GroupOfThree>
							{blogs.length > i && <Blog blog={blogs[i]} position={i} handleFirstDelete={handleFirstDelete}/>}
							{blogs.length > i+1 && <Blog blog={blogs[i+1]} position={i+1} handleFirstDelete={handleFirstDelete}/>}
							{blogs.length > i+2 && <Blog blog={blogs[i+2]} position={i+2} handleFirstDelete={handleFirstDelete}/>}
						</GroupOfThree>		
						}
						{blogs.length > i+3 &&
						<GroupOfTwo>
							{blogs.length > i+3 && <Blog blog={blogs[i+3]} position={i+3} handleFirstDelete={handleFirstDelete}/>}
							{blogs.length > i+4 && <Blog blog={blogs[i+4]} position={i+4} handleFirstDelete={handleFirstDelete}/>}
						</GroupOfTwo>		
						}					
					</>
				)
			}
			setElements([...aux_elements])
		}	
	}, [blogs.length])	

	return (
		<BlogsGridContainer>	
			{elements}
		</BlogsGridContainer>				
	)
}

export default BlogsGrid