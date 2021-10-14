import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext, Fragment } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImageSection from '../../components/ImageSection'
import Adds from '../../components/Adds'
 
import apiCall from '../../api' 

import {
	Container, SecondContainer, Main, Content, TitleSection, HTitle, 
	QuestionSection, ResumeSection, TopicsSection, ParagraphResponse, Subtitle,
	TopicList, TopicsUl, SubtitleSection, ParagraphSectionOne, LinksContainer, TheLinks
} from './style'

import imageDefault from '../../images/Walk.svg'

import {  
	AiOutlineGithub, AiOutlineLink
} from 'react-icons/ai'

import TokenContext from '../../context/tokens'


const Blog = ({ url }) => {

	
	const { id } = useParams()
	const [allBlog, setAllBlog] = useState([])	
	/*
		{
			date
			github
			id
			image
			link
			questions
			resume
			title
			user
			views			
			subtems: [
				{
					id
					blog
					title
					paragraphs: [
						{
							id
							subtem
							paragraph
							picture
						}
					]
				}
			]
		}
	*/
	const { isAuth } = useContext(TokenContext)

	const blogDetail = async () => {
		const response = await apiCall({urlDirection: `blog/${id}/`})		
		const data = await response.json()
	
		setAllBlog(data)
	}


	useEffect(()=>{
		blogDetail()
	}, [])
		

	return (
		<>	
			<Helmet>
                <title>@Serbrylex | {allBlog.title ? allBlog.title : ''}</title>
				<meta name='description' content={`Este es el blog sobre: ${allBlog.title}, ${setAllBlog.categories}`} />
			</Helmet>
			<Header/>
			<Container>
				<SecondContainer>
					<Main>
						<Content>
							<TitleSection>							
								<HTitle>{allBlog.title}</HTitle>							
							</TitleSection>
							<QuestionSection>
								<Subtitle>Initial Questions</Subtitle>								
								<ParagraphResponse>{allBlog.questions}</ParagraphResponse>								
							</QuestionSection>
							{ allBlog.main_image ?
								<ImageSection edit={false} image={`${url}${allBlog.main_image}`} /> :
								<ImageSection edit={false} image={imageDefault} /> 
							}
							<ResumeSection>
								<Subtitle>Resume</Subtitle>
								<ParagraphResponse>{allBlog.resume}</ParagraphResponse>
							</ResumeSection> 
							<TopicsSection>
								<Subtitle>Topics:</Subtitle>
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
								<TheLinks href={allBlog.link}><AiOutlineLink />Link Page</TheLinks>
								<TheLinks href={allBlog.github}><AiOutlineGithub />GitHub</TheLinks>								
							</LinksContainer>						
						</Content>
					
						<Adds />							
					</Main>
				</SecondContainer>
			</Container>
			<Footer />
		</>
	)
}

export default Blog 