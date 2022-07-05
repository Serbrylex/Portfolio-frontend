// React
import { useParams } from 'react-router-dom'
import { useState, useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm' 

// Components
import ImageSection from '../../components/ImageSection'
import Adds from '../../components/Adds'
import Layout from '../../components/Layout'
import Topics from '../../components/Topics'
 
// Api
import apiCall from '../../api' 

// Assets
import {
	Container, Main, Content, TitleSection, HTitle, 
	QuestionSection, ResumeSection, ParagraphResponse, Subtitle, 
	SubtitleSection, ParagraphSectionOne, LinksContainer, TheLinks,
	Left, Right
} from './style'

import './style.css'

import imageDefault from '../../assets/images/Walk.svg'

import {  
	AiOutlineGithub, AiOutlineLink
} from 'react-icons/ai'

// Hooks
import { useTranslation } from '../../hooks/useTranslation'

const Blog = () => {

	
	const { id } = useParams()
	const [allBlog, setAllBlog] = useState({
		content: '',
		link: '',
		github: ''
	})			
	const { words } = useTranslation({ container: 'blog' })
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
		<Layout title={`${allBlog.title ? allBlog.title : ''}`} subtitle={`Este es el blog sobre: ${allBlog.title}, ${setAllBlog.categories}`}>
			<Container>	
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
		</ Layout>
	)	
}

export default Blog 