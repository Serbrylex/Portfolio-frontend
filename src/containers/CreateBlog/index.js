import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Subtopic from '../../components/Subtopic'
import ImageSection from '../../components/ImageSection'
import Adds from '../../components/Adds'
import Loading from '../../components/Loading'

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

import apiCall, { blogData } from '../../api' 


const CreateBlog = () => {
	
	const { isAuth } = useContext(TokenContext)
	const history = useHistory()

	if (!isAuth.isAuth){
		history.push("/Admin")
	}	

	const [idPost, setIdPost] = useState(undefined)		
	const [subtopicsSend, setSubtopicsSend] = useState([false])
	const [loading, setLoading] = useState(false)

	const title = useInputValue('Title')
	const question = useInputValue('This will be the main question ( ?')
	const imagen = useImage('')	
	const resume = useInputValue('muchas cosas han sigo escritas antes en esta web, pero ninguna como la que te voy a presentar en este instante, are you ready?')	
	const linkPage = useInputValue('www.page.com')
	const linkGitHub = useInputValue('www.github.com/proyect')

	const topics = useInputValue('topic1,topic2,topic3,topic4,topic5')

	const handleEndPost = async () => {		
		
		let objectOne = new FormData()	    				
	
		objectOne.append('user', isAuth.user.id)
		objectOne.append('title', title.value)		
		objectOne.append('questions', question.value)
		if (imagen.fileImage.name?.length){
			objectOne.append('main_image', imagen.fileImage, imagen.fileImage.name)
		}
		objectOne.append('resume', resume.value)
		objectOne.append('topics', topics.value)
		objectOne.append('views', 0)
		objectOne.append('github', linkGitHub.value)
		objectOne.append('link', linkPage.value)
		

		let response = await apiCall({
			urlDirection: 'blog/', 
			method: 'POST', 
			headers: {
				'Authorization': `Token ${isAuth.access_token}`,
			},
			body: objectOne
		})
		
		let data = await response.json()
		
		setIdPost(data.id)		
		
	}

	useEffect(()=>{
		if (idPost!==undefined) {
			for (var i = 0; i < subtopicsSend.length; i++) {
				if (!subtopicsSend[i]) {
					let algo = [...subtopicsSend]
					algo[i] = !algo[i]
					setSubtopicsSend([...algo])
				}
			}	

			setLoading(true)
			setTimeout(()=>{				
				setLoading(false)
				history.push('/Blogs/All')
			}, 10000)			
			
		}
	},[idPost, subtopicsSend])	

	const renderSubtopics = () => {

		let arrayOfSubtopics = []

		for (var i = 0; i < subtopicsSend.length; i++) {
			arrayOfSubtopics.push(
				<Subtopic 		
					key={i}					
					idPost={idPost}					
					send={subtopicsSend[i]}					
				/>
			)
		}

		return arrayOfSubtopics
	}

	return (
		<>	
			<Header admin={true}/>
			<Container>
				<SecondContainer>
					<Main>
						<Content>
						{loading ? 
							<Loading />
							:	
							<>					
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
										{topics.show ? 
											<InputList
												type="text" 									
												onBlur={() => topics.setShow(false)}									
												{...topics}
											/> : 
											<TopicList onClick={()=>topics.setShow(true)}>{topics.value}</TopicList>
										}									
									</TopicsUl>
								</TopicsSection>

								{renderSubtopics()}												

								<AddSubtopic>
									<PlusSubtopic onClick={()=>setSubtopicsSend([...subtopicsSend, false])}>Add Subtopic</PlusSubtopic>								
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
							</>
						}
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
						