// React
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Head from 'next/Head'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

// Components
import Subtopic from '@components/Subtopic'
import ImageSection from '@components/ImageSection'
import Loading from '@components/Loading'

// Assets 
import { 
	Container, SecondContainer, Main, Content, TitleSection, InputTitle, HTitle, 
	QuestionSection, ResumeSection, TopicsSection, TextArea, ParagraphResponse, Subtitle,
	InputList, TopicList, TopicsUl, SendPost, SendPostContainer, LinksContainer, InputLinks, TheLinks,
	AddSubtopic, PlusSubtopic
} from './style' 
   
import { 
	AiOutlineGithub, AiOutlineLink
} from 'react-icons/ai'

// API
import apiCall from '@api';

// Hooks
import { useTranslation } from '@hooks/useTranslation'
import { useInputValue } from '@hooks/useInputValue'  
import { useImage } from '@hooks/useImage'


const CreateBlog = () => {
	
	const user = useSelector(store => store.user)
	const url = useSelector(store => store.preferences.url)
	const history = useRouter()	

	if (!user.isAuth){
		history.push("/admin")
	}
		
	const [loading, setLoading] = useState(false)

	const title = useInputValue("Title")	
	const imagen = useImage('')	
	const resume = useInputValue('muchas cosas han sigo escritas antes en esta web, pero ninguna como la que te voy a presentar en este instante, are you ready?')	
	const linkPage = useInputValue('www.page.com')
	const linkGitHub = useInputValue('www.github.com/proyect')

	const topics = useInputValue('topic1,topic2,topic3,topic4,topic5')

	const handleEndPost = async () => {		
		
		let objectOne = new FormData()	    				
			
		objectOne.append('title', title.value)				
		if (imagen.fileImage.name?.length){
			objectOne.append('image', imagen.fileImage, imagen.fileImage.name)
		}
		objectOne.append('content', resume.value)				
		objectOne.append('github', linkGitHub.value)
		objectOne.append('link', linkPage.value)
		
		let response = await apiCall({
			url: `${url}/blog/`, 
			method: 'POST', 
			headers: {
				'Authorization': `Token ${user.access_token}`,
			},
			body: objectOne
		})
		
		let data = await response.json()		

		await apiCall({
			url: `${url}/blog/categories/`, 
			method: 'POST', 
			headers: {
				'Authorization': `Token ${user.access_token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				blog_id: data.id,
				categories: topics.value
			})
		})	

		history.push("/")		
	}

	return (		
			<Container>
				<Head>
					<title>Create Blog</title>
					<meta name="description" content="Create Blog" />
				</Head>
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

							<ImageSection {...imagen} edit={true} />			

							<ResumeSection>
								<Subtitle>Resume</Subtitle>
								{resume.show ? 
									<TextArea
										type="text" 									
										onBlur={() => resume.setShow(false)}									
										{...resume}
									/> : 									
									<div onClick={()=>resume.setShow(true)} >
										<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
											{resume.value}
										</ReactMarkdown>
									</div>
								}
							</ResumeSection>							
							

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
					</Main>
				</SecondContainer>
				{loading && <Loading /> }
			</Container>								
	)
}

export default CreateBlog							
						