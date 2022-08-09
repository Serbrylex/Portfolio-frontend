import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

// Assets
import {
	BlogsGridContainer, GroupOfThree, GroupOfTwo, BlogContainer,
	ImageContainer, Img, Information, Title, Delete
} from './style'

import { AiFillCloseCircle } from 'react-icons/ai'

import { useAppSelector, useAppDispatch } from '@hooks/useReduxH'


const Blog = ({ blog, position, handleFirstDelete }: {
	blog: TBaseBlog,
	position: number,
	handleFirstDelete: Function
}) => {

	const history = useRouter()
	const user = useAppSelector(store => store.user)
	const url = useAppSelector(store => store.preferences.url)

	return (
		<BlogContainer first_blog={position === 0}>
			{user.isAuth &&
				<Delete onClick={()=> handleFirstDelete(blog.id, position, blog.title)}><AiFillCloseCircle /></Delete>
			}
			<ImageContainer first_blog={position === 0}>
				<Img src={blog.image} alt={blog.title} />
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

const BlogsGrid = ({ blogs, handleFirstDelete }: {
	blogs: TBaseBlog[],
	handleFirstDelete: Function
}) => {	
	
	const [elements, setElements] = useState<JSX.Element[]>([])
	const user = useAppSelector(store => store.user)
	const url = useAppSelector(store => store.preferences.url)	

	useEffect(()=>{	
		const aux_elements = []
		if (blogs.length > 0) {
			aux_elements.push(
				<Blog blog={blogs[0]} position={0} handleFirstDelete={handleFirstDelete} key={0}/>
				
			)
			for (var i = 1; i < blogs.length; i+=5) {
				aux_elements.push(				
					<>	
						{blogs.length > i &&
						<GroupOfThree key={i}>
							{blogs.length > i && <Blog blog={blogs[i]} key={i} position={i} handleFirstDelete={handleFirstDelete}/>}
							{blogs.length > i+1 && <Blog blog={blogs[i+1]} key={i+1} position={i+1} handleFirstDelete={handleFirstDelete}/>}
							{blogs.length > i+2 && <Blog blog={blogs[i+2]} key={i+2} position={i+2} handleFirstDelete={handleFirstDelete}/>}
						</GroupOfThree>		
						}
						{blogs.length > i+3 &&
						<GroupOfTwo key={i+1}>
							{blogs.length > i+3 && <Blog blog={blogs[i+3]} key={i+3} position={i+3} handleFirstDelete={handleFirstDelete}/>}
							{blogs.length > i+4 && <Blog blog={blogs[i+4]} key={i+4} position={i+4} handleFirstDelete={handleFirstDelete}/>}
						</GroupOfTwo>		
						}					
					</>
				)
			}
			setElements(aux_elements)
		}	
	}, [blogs.length])	
	return (
		<BlogsGridContainer>	
			{elements}
		</BlogsGridContainer>				
	)
}

export default BlogsGrid