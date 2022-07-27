// React
import { useRouter } from 'next/router'
import Head from 'next/Head'

import { useState, useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm' 

// Components
import ImageSection from '@components/ImageSection'
import Adds from '@components/Adds'
import Topics from '@components/Topics'
 
// Api
import apiCall from '@api' 

// Assets
import {
	Container, Main, Content, TitleSection, HTitle, 
	QuestionSection, ResumeSection, ParagraphResponse, Subtitle, 
	SubtitleSection, ParagraphSectionOne, LinksContainer, TheLinks,
	Left, Right
} from './style'

import './style.css'

import imageDefault from '@public/images/Walk.svg'

import {  
	AiOutlineGithub, AiOutlineLink
} from 'react-icons/ai'

// Hooks
import { useTranslation } from '@hooks/useTranslation'

const Blog = () => {

	
	const { query: { id } } = useRouter()
	const [allBlog, setAllBlog] = useState<TBlog>({
		user: 25,
		title: '',
		image: '',
		content: '',
		date: new Date(),
		views: 25,
		github: '',
		link: '',
		categories: [],
		resume: ''
	});
	const { words } = useTranslation({ container: 'blog', component: undefined })
	const url = useSelector(store => store.preferences.url)

	const blogDetail = async () => {
		const response = await apiCall({url: `${url}/blog/${id}/`})		
		const data = await response.json()		
		console.log(data)
		setAllBlog(data)
	}


	useEffect(()=>{
		blogDetail()
	}, [])

	
	return (		
		<Container>	
			<Head>
				<title>{allBlog.title ? allBlog.title : 'Serbrylex blog post'}</title>
				<meta name="description" content={`Este es el blog sobre: ${allBlog.title}, ${allBlog.categories}`}/>
			</Head>
			<Left></Left>
			<Main>
				<Content>
					<TitleSection>							
						<HTitle>{allBlog.title}</HTitle>							
					</TitleSection>

					<Topics topics={allBlog.categories} />

					{ allBlog.image ?
						<ImageSection edit={false} image={allBlog.image} /> :
						<ImageSection edit={false} image={imageDefault} /> 
					}						
					
					<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
						{allBlog.content}
					</ReactMarkdown>						

					{allBlog?.link && allBlog?.link.length > 0 || allBlog?.github.length > 0 &&
						<LinksContainer>
							<TheLinks href={allBlog.link}><AiOutlineLink />{words.link}</TheLinks>
							<TheLinks href={allBlog.github}><AiOutlineGithub />GitHub</TheLinks>								
						</LinksContainer>
					}
				</Content>
			</Main>		
			<Right></Right>		
		</Container>					
	)	
}

export default Blog 