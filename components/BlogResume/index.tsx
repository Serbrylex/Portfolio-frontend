import React from 'react'
import { useSelector } from 'react-redux'

import {
	Blog, Image, Title, Link, DatePost, Resume
} from './style'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'


const BlogResume = ({ blog } : { blog: TBlog }) => {	

	const url = useSelector(store => store.preferences.url)

	return (
		<Blog>			
			<Image src={blog.image} />
			<Title>				
				<Link href={`/blog/${blog.id}`}><a>{blog.title}</a></Link>				
			</Title>
			<DatePost>{blog.date.toString()}</DatePost>
			<Resume>
				<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
					{blog.content.slice(0, 150) + '...'}
				</ReactMarkdown>
			</Resume>
		</Blog>
	)
}

export default BlogResume