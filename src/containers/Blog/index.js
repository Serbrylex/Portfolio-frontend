import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
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
	const { token } = useContext(TokenContext)
	const [admin, setAdmin] = useState(false)

	const blogDetail = async () => {
		const data = await apiCall({urlDirection: `blog-detail/${id}/`})		
		data['topics'] = data['topics'].split(',')		
		setAllBlog(data)
	}


	useEffect(()=>{
		blogDetail()

		if (token.length !== 0){
			setAdmin(true)
		}	
	}, [])
		

	return (
		<>	
			<Helmet>
                <title>@Serbrylex | {allBlog.title ? allBlog.title : ''}</title>
				<meta name='description' content={`Este es el blog sobre: ${allBlog.title}, ${setAllBlog.topics}`} />
			</Helmet>
			<Header admin={admin}/>
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
									{allBlog.topics?.map((topic, index)=>(
										<TopicList key={index}>{topic}</TopicList>
									))}									
								</TopicsUl>
							</TopicsSection>
							{allBlog.subtem?.map((eachSubtem, index)=>(
								<div key={index}>
									{eachSubtem.title &&										
										<SubtitleSection>								
											<HTitle>{eachSubtem.title}</HTitle>
										</SubtitleSection>
									}									
									<ParagraphSectionOne>								
										<ParagraphResponse>{eachSubtem.first_paragraph}</ParagraphResponse>			
									</ParagraphSectionOne>									
									{eachSubtem.first_image !== null &&
										<ImageSection edit={false} image={`${url}${eachSubtem.first_image}`} />			
									}
									<ParagraphSectionOne>								
										<ParagraphResponse>{eachSubtem.second_paragraph}</ParagraphResponse>								
									</ParagraphSectionOne>
									{eachSubtem.second_image !== null &&
										<ImageSection edit={false} image={`${url}${eachSubtem.second_image}`} />
									}
									<ParagraphSectionOne>								
										<ParagraphResponse>{eachSubtem.third_paragraph}</ParagraphResponse>								
									</ParagraphSectionOne>
									{eachSubtem.third_image !== null &&
										<ImageSection edit={false} image={`${url}${eachSubtem.third_image}`} />
									}
									<ParagraphSectionOne>
										<ParagraphResponse>{eachSubtem.fourth_paragraph}</ParagraphResponse>							
									</ParagraphSectionOne>
									{eachSubtem.fourth_image !== null &&
										<ImageSection edit={false} image={`${url}${eachSubtem.fourth_image}`}/>
									}
									<ParagraphSectionOne>
										<ParagraphResponse>{eachSubtem.fifth_paragraph}</ParagraphResponse>								
									</ParagraphSectionOne>
									{eachSubtem.fifth_image !== null &&
										<ImageSection edit={false} image={`${url}${eachSubtem.fifth_image}`}/>
									}
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