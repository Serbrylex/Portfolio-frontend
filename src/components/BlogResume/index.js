import React from 'react'
import { useSelector } from 'react-redux'

import {
	Blog, Image, Title, Link, DatePost, Resume
} from './style'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'


const BlogResume = ({ blog = false, key = '' }) => {	

	const url = useSelector(store => store.preferences.url)

	return (
		<Blog {...key}>			
			<Image src={`${url}${blog.image}`} />
			<Title>
				<Link to={`/blog/${blog.id}`}>{blog.title}</Link>
			</Title>
			<DatePost>{blog.date}</DatePost>
			<Resume>
				<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
					{blog.content.slice(0, 150) + '...'}
				</ReactMarkdown>
			</Resume>
		</Blog>
	)
}

export default BlogResume