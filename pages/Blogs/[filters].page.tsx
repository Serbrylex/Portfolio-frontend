// React
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

// Components
import Loading from '@components/Loading'
import Topics from '@components/Topics'
import BlogsGrid from '@components/BlogsGrid'

// Assets
import {
	Container, BlogsContainer, MainTitle, Blog, Image, Title, DatePost, Resume, Link, 
	ImageLoading, WindowAlert, AlerText, Acept, Declite, WindowAlertItems, Buttons,
	BlogsContainerHeader, SearchBar, BlogsContainerMap
} from './style'

// API
import apiCall from '@api'

// Hooks
import { useInputValue } from '@hooks/useInputValue'
import { useTranslation } from '@hooks/useTranslation'
import { useAppSelector } from '@hooks/useReduxH'

type Element = {
	id: number,
	index: number,
	title: string
}

const Blogs = () => {
 
	const { query: { filters } }  = useRouter()
	const [blogs, setBlogs] = useState<TBaseBlog[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [showDelete, setShowDelete] = useState<boolean>(false)
	const [element, setElement] = useState<Element>({
		id: 9999,
		index: 9999,
		title: 'hi'
	})	

	const user = useAppSelector(store => store.user)
	const url = useAppSelector(store => store.preferences.url)

	const search = useInputValue('')
	const {words, loading} = useTranslation({ container: 'blogs', component: '' })
	const [topics, setTopics] = useState([])	

	const handleFirstDelete = (id: number, index: number, title: string) => {
		// Handle the window to alert than the blog will be delete
		// and if the admin confirms, the id is used to delete de blog
		setShowDelete(true)
		setElement({
			id,
			index,
			title
		})
	}

	const handleDeleteBlog = () => {		
		const newToken = `Token ${user.access_token}`
		apiCall({
			url: `${url}/blog/delete/${element.id}/`, 
			headers: {
				'Authorization': newToken,
				'Content-Type': 'application/json',				
			}, 
			method: 'DELETE' 
		})	

		let newBlog = blogs
		
		newBlog.splice(element.index, 1)
		if (newBlog.length !== 0) {
			setBlogs([...newBlog])
		} else {
			setBlogs([])
		}
		setElement({
			id: 9999,
			index: 9999,
			title: 'hi'
		})
		setShowDelete(false)
	}

	const ApiAsync = async (filter: string) => {		
		const response = await apiCall({url: `${url}/blog-list/${filter}/`})

		if (response.status !== 200) {
			setBlogs([])
		} else {
			const data: TBaseBlog[] = await response.json()						
			setBlogs(data)			
		}
		setIsLoading(false)
	}

	const getTopics = async () => {
		const response = await apiCall({url: `${url}/categories/`})

		if (response.status === 200) {			
			const data = await response.json()						
			setTopics(data)			
		}
		setIsLoading(false)	
	}

	useEffect(()=>{			
		ApiAsync(filters as string).catch(null)	
		getTopics()	
	},[])

	useEffect(()=>{
		if (search.value.length > 3) {
			setIsLoading(true)
			ApiAsync(search.value)
		} else if (search.value.length === 0) {
			ApiAsync('all')
		}
	},[search.value])


	return(		
			<Container>
				<Head>
					<title>{filters}</title>
					<meta name="description" content={`${words.subtitle}: ${filters}`} />
				</Head>
				<WindowAlert show={showDelete}>
					<WindowAlertItems>
						<AlerText>{words.delete_message}: {element.title}?</AlerText>
						<Buttons>
							<Acept onClick={handleDeleteBlog}>{words.si}</Acept>
							<Declite onClick={() => setShowDelete(false)}>{words.no}</Declite>
						</Buttons>
					</WindowAlertItems>
				</WindowAlert>
				<BlogsContainer>
					<BlogsContainerHeader>						
						<MainTitle>{filters}</MainTitle>
						<SearchBar {...search} placeholder={words.search as string} />
					</BlogsContainerHeader>
					<Topics topics={topics}/>
					<BlogsContainerMap>
						{isLoading || blogs.length === 0? 
							<Loading />
						: <BlogsGrid blogs={blogs} handleFirstDelete={handleFirstDelete} />}
					</BlogsContainerMap>
				</BlogsContainer>
			</Container>		
	)
}

export default Blogs