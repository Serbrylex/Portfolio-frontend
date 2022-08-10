// React
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'

// React Markdown
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm' 

// Components
import ImageSection from '@components/ImageSection'
import Topics from '@components/Topics'
import Loading from '@components/Loading'
 
// Api
import apiCall from '@api' 

// Assets
import {
	Container, Main, Content, TitleSection, HTitle, LinksContainer, TheLinks
} from '@styles/blog';

import style from '@styles/markdown-styles.module.css';

import imageDefault from '@public/images/Walk.svg'

import {  
	AiOutlineGithub, AiOutlineLink
} from 'react-icons/ai'

// Hooks
import { useTranslation } from '@hooks/useTranslation'
import { useAppSelector } from '@hooks/useReduxH'

const Blog = () => {

	
	const router = useRouter()
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [allBlog, setAllBlog] = useState<TBlog>({
		id: 1,
		user: 25,
		title: '',
		image: '',
		content: '',
		date: new Date().toString(),
		views: 25,
		github: '',
		link: '',
		categories: []
	});
	const { words } = useTranslation({ container: 'blog', component: '' })
	const url = useAppSelector(store => store.preferences.url)

	const blogDetail = async (refe: string) => {		
		const response = await apiCall({url: `${url}/blog/${refe}/`})		
		const data = await response.json()				
		setAllBlog(data)
		setIsLoading(false)
	}

	useEffect(()=>{		
		if (router.query.id !== 'object' && router.query.id !== undefined ) {
			const refe: string = router.query.id as string;
			if (parseInt(refe) !== NaN) {
				blogDetail(refe);
			}		
		}
	}, [router.query.id])

	
	return (		
		<Container>					
			<Head>
				<title>{allBlog.title ? allBlog.title : 'Serbrylex blog post'}</title>
				<meta name="description" content={`Este es el blog sobre: ${allBlog.title}, ${allBlog.categories}`}/>
			</Head>
			{isLoading ? <Loading /> :
			<Main>
				<Content>
					<TitleSection>							
						<HTitle>{allBlog.title}</HTitle>							
					</TitleSection>

					<Topics topics={allBlog.categories} />

					{ allBlog.image ?
						<ImageSection edit={false} image={allBlog.image} setImage={()=>{}} setFileImage={()=>{}}/> :
						<ImageSection edit={false} image={imageDefault} setImage={()=>{}} setFileImage={()=>{}}/> 
					}														
					<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className={style.reactMarkDown}>
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
			}						
		</Container>					
	)	
}

export default Blog 