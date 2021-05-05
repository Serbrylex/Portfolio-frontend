import { useState, useContext } from 'react'
import { useHistory  } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subtopic from '../../components/Subtopic'
import ImageSection from '../../components/ImageSection'
import Adds from '../../components/Adds'

import TokenContext from '../../context/tokens'

import { useInputValue } from '../../hooks/useInputValue'  

import {
	Container, SecondContainer, Main, Content, TitleSection, InputTitle, HTitle, 
	QuestionSection, ResumeSection, TopicsSection, TextArea, ParagraphResponse, Subtitle,
	InputList, TopicList, TopicsUl, SendPost, SendPostContainer, LinksContainer, InputLinks, TheLinks
} from './style' 
 
import imageDefault from '../../images/MainImage.png'
import { 
	AiOutlineGithub, AiOutlineLink
} from 'react-icons/ai'

import apiCall from '../../api'

const useImage = ({ defaultImage = imageDefault }) => {
	const [image, setImage] = useState(defaultImage)
	const [fileImage, setFileImage] = useState('')

	return {
		image,
		setImage,
		fileImage, 
		setFileImage
	}
}

const CreateBlog = () => {

	/*
	return {
	    value,
	    onChange,
	    show,
		setShow
	}
	*/
	let history = useHistory()
	const { token } = useContext(TokenContext)

	const title = useInputValue('Title')
	const question = useInputValue('¿What the fuck is JavaScript?')
	const resume = useInputValue('muchas cosas han sigo escritas antes en esta web, pero ninguna como la que te voy a presentar en este instante, are you ready?')
	const topicOne = useInputValue('React.js')
	const topicTwo = useInputValue('Django')
	const topicThree = useInputValue('Scrapy (yes, the python framework)')
	const topicFour = useInputValue('MySql')
	const topicFive = useInputValue('How to plant an aguacate?')
	
	const linkPage = useInputValue('Page Link')
	const linkGitHub = useInputValue('GitHub')

	const subtitle = useInputValue('Subtitle')
	const paragraphOne = useInputValue('Click me and set your paragraph')
	const paragraphTwo = useInputValue('Click me and set your paragraph')
	const paragraphThree = useInputValue('Click me and set your paragraph')
	const paragraphFour = useInputValue('Click me and set your paragraph')
	const paragraphFive = useInputValue('Click me and set your paragraph')

	const imagen = useImage('')
	const imagenOne = useImage('')
	const imagenTwo = useImage('')
	const imagenThree = useImage('')
	const imagenFour = useImage('')
	const imagenFive = useImage('')	

	const asyncFetch = async ({ urlDirection, method, body }) => {
		const responseData = await apiCall({urlDirection, method, body})
		return(responseData)
	}

	const handleEndPost = async () => {		
		
		let objectOne = new FormData()	    
		let objectTwo = new FormData()		
	
		objectOne.append('user', 1)
		objectOne.append('title', title.value)
		objectOne.append('questions', question.value)
		if (imagen.fileImage.name?.length){
			objectOne.append('main_image', imagen.fileImage, imagen.fileImage.name)
		}
		objectOne.append('resume', resume.value)		
		objectOne.append('topics', `${topicOne.value},${topicTwo.value},${topicThree.value},${topicFour.value},${topicFive.value}`)
		objectOne.append('views', 0)
		objectOne.append('github', linkPage.value)
		objectOne.append('link', linkGitHub.value)			
		objectOne.append('token', token.access_token)

		const newToken = `Token ${token.access_token}`

		let idPost = await asyncFetch({
			urlDirection: 'blog-create/', 
			method: 'POST', 
			headers: {
				'Authorization': newToken,
			},
			body: objectOne
		})
		
		objectTwo.append('blog', idPost.id)
		objectTwo.append('title', subtitle.value)
		objectTwo.append('first_paragraph', paragraphOne.value)
		objectTwo.append('second_paragraph', paragraphTwo.value)
		objectTwo.append('third_paragraph', paragraphThree.value)
		objectTwo.append('fourth_paragraph', paragraphFour.value)
		objectTwo.append('fifth_paragraph', paragraphFive.value)

		objectTwo.append('token', token.access_token)

		if (imagenOne.fileImage.name?.length){
			objectTwo.append('first_image', imagenOne.fileImage, imagenOne.fileImage.name)
		}
		if (imagenTwo.fileImage.name?.length){			
			objectTwo.append('second_image', imagenTwo.fileImage, imagenTwo.fileImage.name)
		}
		if (imagenThree.fileImage.name?.length){			
			objectTwo.append('third_image', imagenThree.fileImage, imagenThree.fileImage.name)
		}
		if (imagenFour.fileImage.name?.length){			
			objectTwo.append('fourth_image', imagenFour.fileImage, imagenFour.fileImage.name)
		}
		if (imagenFive.fileImage.name?.length){			
			objectTwo.append('fifth_image', imagenFive.fileImage, imagenFive.fileImage.name)
		}
		
		asyncFetch({
			urlDirection: 'subtem-create/', 
			method: 'POST', 
			headers: {
				'Authorization': newToken,
			},
			body: objectTwo
		})		

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
								subtitle={subtitle}
								paragraphOne={paragraphOne}
								paragraphTwo={paragraphTwo}
								paragraphThree={paragraphThree}
								paragraphFour={paragraphFour}
								paragraphFive={paragraphFive}
								imagenOne={imagenOne}
								imagenTwo={imagenTwo}
								imagenThree={imagenThree}
								imagenFour={imagenFour}
								imagenFive={imagenFive}								
							/>
							<LinksContainer>
								{linkPage.show ? 
									<InputLinks 
										type="text"
										onBlur={() => linkPage.setShow(false)}									
										{...linkPage}
									/> : 
									<TheLinks onClick={() => linkPage.setShow(true)}><AiOutlineLink />{linkPage.value}</TheLinks>
								}
								{linkGitHub.show ? 
									<InputLinks 
										type="text" 									
										onBlur={() => linkGitHub.setShow(false)}									
										{...linkGitHub}
									/> : 
									<TheLinks onClick={() => linkGitHub.setShow(true)}><AiOutlineGithub />{linkGitHub.value}</TheLinks>
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