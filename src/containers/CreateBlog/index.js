import { useState, useContext } from 'react'
import { useHistory  } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subtopic from '../../components/Subtopic'
import ImageSection from '../../components/ImageSection'
import Adds from '../../components/Adds'

import TokenContext from '../../context/tokens'

import { useInputValue } from '../../hooks/useInputValue'  
import { useImage } from '../../hooks/useImage'
 
import {
	Container, SecondContainer, Main, Content, TitleSection, InputTitle, HTitle, 
	QuestionSection, ResumeSection, TopicsSection, TextArea, ParagraphResponse, Subtitle,
	InputList, TopicList, TopicsUl, SendPost, SendPostContainer, LinksContainer, InputLinks, TheLinks,
	AddSubtopic, PlusSubtopic
} from './style' 
 
import { 
	AiOutlineGithub, AiOutlineLink
} from 'react-icons/ai'

import apiCall from '../../api'


const CreateBlog = () => {

	let history = useHistory()
	const { token } = useContext(TokenContext)

	if (!token.access_token){
		history.push("/Admin")
	}

	// Subtopic
	const [idBlog, setIdBlog] = useState(0)
	const [send, setSend] = useState(false)
	const [subtopics, setSubtopics] = useState(1)

	const title = useInputValue('Title')
	const imagen = useImage('')
	const question = useInputValue('¿What the fuck is JavaScript?')
	const resume = useInputValue('muchas cosas han sigo escritas antes en esta web, pero ninguna como la que te voy a presentar en este instante, are you ready?')
	const topicOne = useInputValue('React.js')
	const topicTwo = useInputValue('Django')
	const topicThree = useInputValue('Scrapy (yes, the python framework)')
	const topicFour = useInputValue('MySql')
	const topicFive = useInputValue('How to plant an aguacate?')
	const linkPage = useInputValue('www.page.com')
	const linkGitHub = useInputValue('www.github.com/proyect')

	const asyncFetch = async ({ urlDirection, method, headers, body }) => {
		const responseData = await apiCall({urlDirection, method, headers, body})
		return(responseData)
	}

	const handleEndPost = async () => {		
		
		let objectOne = new FormData()	    		
		const newToken = `Token ${token.access_token}`
	
		objectOne.append('user', 1)
		objectOne.append('title', title.value)
		objectOne.append('questions', question.value)
		if (imagen.fileImage.name?.length){
			objectOne.append('main_image', imagen.fileImage, imagen.fileImage.name)
		}
		objectOne.append('resume', resume.value)		
		objectOne.append('topics', `${topicOne.value},${topicTwo.value},${topicThree.value},${topicFour.value},${topicFive.value}`)
		objectOne.append('views', 0)

		objectOne.append('github', linkGitHub.value)
		objectOne.append('link', linkPage.value)

		//objectOne.append('token', newToken)

		let idPost = await asyncFetch({
			urlDirection: 'blog-create/', 
			method: 'POST', 
			headers: {
				'Authorization': newToken,
			},
			body: objectOne
		})
		setIdBlog(idPost.id)
		setSend(true)

		history.push("/Blogs/All")		
	}

	return (
		<>	
			<Header admin={true}/>
			<Container>
				<SecondContainer>
					<Main>
						<Content>
							<TitleSection>
								{title.show ? 
									<InputTitle 
										type="text" 									
										onBlur={() => title.setShow(false)}									
										{...title}
									/> : 
									<HTitle onClick={() => title.setShow(true)}>{title.value}</HTitle>
								}
							</TitleSection>
							<QuestionSection>
								<Subtitle>Initial Questions</Subtitle>
								{question.show ? 
									<TextArea
										type="text" 									
										maxlength='600'
										onBlur={() => question.setShow(false)}									
										{...question}
									/> : 
									<ParagraphResponse onClick={() => question.setShow(true)}>{question.value}</ParagraphResponse>
								}
							</QuestionSection>
							<ImageSection {...imagen} />							
							<ResumeSection>
								<Subtitle>Resume</Subtitle>
								{resume.show ? 
									<TextArea
										type="text" 									
										onBlur={() => resume.setShow(false)}									
										{...resume}
									/> : 
									<ParagraphResponse onClick={() => resume.setShow(true)}>{resume.value}</ParagraphResponse>
								}
							</ResumeSection>
							<TopicsSection>
								<Subtitle>Topics:</Subtitle>
								<TopicsUl>
									{topicOne.show ? 
										<InputList
											type="text" 									
											onBlur={() => topicOne.setShow(false)}									
											{...topicOne}
										/> : 
										<TopicList onClick={() => topicOne.setShow(true)}>{topicOne.value}</TopicList>
									}
									{topicTwo.show ? 
										<InputList 
											type="text" 									
											onBlur={() => topicTwo.setShow(false)}									
											{...topicTwo}
										/> : 
										<TopicList onClick={() => topicTwo.setShow(true)}>{topicTwo.value}</TopicList>
									}
									{topicThree.show ? 
										<InputList 
											type="text" 									
											onBlur={() => topicThree.setShow(false)}									
											{...topicThree}
										/> : 
										<TopicList onClick={() => topicThree.setShow(true)}>{topicThree.value}</TopicList>
									}
									{topicFour.show ? 
										<InputList 
											type="text" 									
											onBlur={() => topicFour.setShow(false)}									
											{...topicFour}
										/> : 
										<TopicList onClick={() => topicFour.setShow(true)}>{topicFour.value}</TopicList>
									}
									{topicFive.show ? 
										<InputList 
											type="text" 									
											onBlur={() => topicFive.setShow(false)}									
											{...topicFive}
										/> : 
										<TopicList onClick={() => topicFive.setShow(true)}>{topicFive.value}</TopicList>
									}
								</TopicsUl>
							</TopicsSection>
							<Subtopic 
								idBlog={idBlog}
								send={send}
								token={token.access_token}	
								orderId={1}						
							/>
							{subtopics > 1 &&
								<Subtopic 
									idBlog={idBlog}
									send={send}
									token={token.access_token}							
									orderId={2}
								/>
							}
							{subtopics > 2 &&
								<Subtopic 
									idBlog={idBlog}
									send={send}
									token={token.access_token}							
									orderId={3}
								/>
							}
							{subtopics > 3 &&
								<Subtopic 
									idBlog={idBlog}
									send={send}
									token={token.access_token}							
									orderId={4}
								/>
							}
							{subtopics > 4 &&
								<Subtopic 
									idBlog={idBlog}
									send={send}
									token={token.access_token}							
									orderId={5}
								/>
							}
							<AddSubtopic>
								<PlusSubtopic onClick={()=>setSubtopics(subtopics+1)}>+ Subtopic</PlusSubtopic>
							</AddSubtopic>
							<LinksContainer>
								{linkPage.show ? 
									<InputLinks 
										type="text"
										onBlur={() => linkPage.setShow(false)}									
										{...linkPage}
									/> : 
									<TheLinks onClick={() => linkPage.setShow(true)}><AiOutlineLink />Web Site</TheLinks>
								}
								{linkGitHub.show ? 
									<InputLinks 
										type="text" 									
										onBlur={() => linkGitHub.setShow(false)}									
										{...linkGitHub}
									/> :  
									<TheLinks onClick={() => linkGitHub.setShow(true)}><AiOutlineGithub />GitHub</TheLinks>
								}
							</LinksContainer>
							<SendPostContainer>
								<SendPost onClick={handleEndPost}>Save</SendPost>
							</SendPostContainer>
						</Content>
						<Adds />
					</Main>
				</SecondContainer>
			</Container>
			<Footer />
		</>
	)
}

export default CreateBlog 