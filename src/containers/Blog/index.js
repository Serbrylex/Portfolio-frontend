import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
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

const linkWeb = 'https://portafolioserbrylex.herokuapp.com'

const Blog = () => {

	
	const { id } = useParams()
	const [allBlog, setAllBlog] = useState([])	

	const blogDetail = async () => {
		const data = await apiCall({urlDirection: `blog-detail/${id}/`})
		console.log(data)
		data['topics'] = data['topics'].split(',')
		console.log(data['subtem'])
		setAllBlog(data)
	}


	useEffect(()=>{
		blogDetail()
	}, [])
		

	return (
		<>	
			<Helmet>
                <title>@Serbrylex | {allBlog.title}</title>
				<meta name='description' content={`Este es el blog sobre: ${allBlog.title}, ${setAllBlog.topics}`} />
			</Helmet>
			<Header admin={true}/>
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
								<ImageSection edit={false} image={`${linkWeb}${allBlog.main_image}`} /> :
								<ImageSection edit={false} image={imageDefault} /> 
							}
							<ResumeSection>
								<Subtitle>Resume</Subtitle>
								<ParagraphResponse>{allBlog.resume}</ParagraphResponse>
							</ResumeSection>
							<TopicsSection>
								<Subtitle>Topics:</Subtitle>
								<TopicsUl>
									{allBlog.topics?.map((topic, index)=>(
										<TopicList key={index}>{topic}</TopicList>
									))}									
								</TopicsUl>
							</TopicsSection>
							{allBlog.subtem?.map((eachSubtem, index)=>(
								<div key={index}>
									<SubtitleSection>								
										<HTitle>{eachSubtem.title}</HTitle>
									</SubtitleSection>
									<ParagraphSectionOne>								
										<ParagraphResponse>{eachSubtem.first_paragraph}</ParagraphResponse>			
									</ParagraphSectionOne>
									<ImageSection edit={false} image={`${linkWeb}${eachSubtem.first_image}`} />			
									<ParagraphSectionOne>								
										<ParagraphResponse>{eachSubtem.second_paragraph}</ParagraphResponse>								
									</ParagraphSectionOne>
									<ImageSection edit={false} image={`${linkWeb}${eachSubtem.second_image}`} />
									<ParagraphSectionOne>								
										<ParagraphResponse>{eachSubtem.third_paragraph}</ParagraphResponse>								
									</ParagraphSectionOne>
									<ImageSection edit={false} image={`${linkWeb}${eachSubtem.third_image}`} />
									<ParagraphSectionOne>
										<ParagraphResponse>{eachSubtem.fourth_paragraph}</ParagraphResponse>							
									</ParagraphSectionOne>
									<ImageSection edit={false} image={`${linkWeb}${eachSubtem.fourth_image}`}/>
									<ParagraphSectionOne>
										<ParagraphResponse>{eachSubtem.fifth_paragraph}</ParagraphResponse>								
									</ParagraphSectionOne>
									<ImageSection edit={false} image={`${linkWeb}${eachSubtem.fifth_image}`}/>			
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