// React
import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext, Fragment } from 'react'

// Components
import ImageSection from '../../components/ImageSection'
import Adds from '../../components/Adds'
import Layout from '../../components/Layout'
 
// Api
import apiCall from '../../api' 

// Assets
import {
	Container, Main, Content, TitleSection, HTitle, 
	QuestionSection, ResumeSection, TopicsSection, ParagraphResponse, Subtitle,
	TopicList, TopicsUl, SubtitleSection, ParagraphSectionOne, LinksContainer, TheLinks
} from './style'

import imageDefault from '../../assets/images/Walk.svg'

import {  
	AiOutlineGithub, AiOutlineLink
} from 'react-icons/ai'

// Context
import TokenContext from '../../context/tokens'

// Hooks
import { useTranslation } from '../../hooks/useTranslation'

const Blog = ({ url }) => {

	
	const { id } = useParams()
	const [allBlog, setAllBlog] = useState([])			
	const { words } = useTranslation({ container: 'blog' })

	const blogDetail = async () => {
		const response = await apiCall({urlDirection: `blog/${id}/`})		
		const data = await response.json()		
		setAllBlog(data)
	}


	useEffect(()=>{
		blogDetail()
	}, [])
		

	return (
		<Layout title={`${allBlog.title ? allBlog.title : ''}`} subtitle={`Este es el blog sobre: ${allBlog.title}, ${setAllBlog.categories}`}>
			<Container>				
				<Main>
					<Content>
						<TitleSection>							
							<HTitle>{allBlog.title}</HTitle>							
						</TitleSection>
						<QuestionSection>
							<Subtitle>{words.questions}</Subtitle>								
							<ParagraphResponse>{allBlog.questions}</ParagraphResponse>								
						</QuestionSection>
						{ allBlog.image ?
							<ImageSection edit={false} image={`${url}${allBlog.image}`} /> :
							<ImageSection edit={false} image={imageDefault} /> 
						}
						<ResumeSection>
							<Subtitle>{words.resume}</Subtitle>
							<ParagraphResponse>{allBlog.resume}</ParagraphResponse>
						</ResumeSection> 
						<TopicsSection>
							<Subtitle>{words.topics}</Subtitle>
							<TopicsUl>
								{allBlog.categories?.map((topic, index)=>(
									<TopicList key={index}>{topic.category}</TopicList>
								))}									
							</TopicsUl>
						</TopicsSection>
						{allBlog.subtems?.map((eachSubtem, index)=>(
							<div key={index}>
								{eachSubtem.title &&										
									<SubtitleSection>								
										<HTitle>{eachSubtem.title}</HTitle>
									</SubtitleSection>
								}									
								{eachSubtem.paragraphs?.map((eachParagraph, index)=>(
									<Fragment key={index}>
										<ParagraphSectionOne>								
											<ParagraphResponse>{eachParagraph.paragraph}</ParagraphResponse>			
										</ParagraphSectionOne>		
										{eachParagraph.picture &&
											<ImageSection edit={false} image={url+eachParagraph.picture} />
										}
									</ Fragment>
								))}
							</div>
						))}
						<LinksContainer>
							<TheLinks href={allBlog.link}><AiOutlineLink />{words.link}</TheLinks>
							<TheLinks href={allBlog.github}><AiOutlineGithub />GitHub</TheLinks>								
						</LinksContainer>						
					</Content>
				
					<Adds />							
				</Main>				
			</Container>			
		</ Layout>
	)
}

export default Blog 