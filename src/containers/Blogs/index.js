// React
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

// Components
import Loading from '../../components/Loading'
import Layout from '../../components/Layout'
import Topics from '../../components/Topics'
import BlogsGrid from '../../components/BlogsGrid'

// Assets
import {
	Container, BlogsContainer, MainTitle, Blog, Image, Title, DatePost, Resume, Link, 
	ImageLoading, WindowAlert, AlerText, Acept, Declite, WindowAlertItems, Buttons,
	BlogsContainerHeader, SearchBar, BlogsContainerMap
} from './style'

import loading from '../../assets/images/loading.gif'

// API
import apiCall from '../../api'

// Hooks
import { useInputValue } from '../../hooks/useInputValue'
import { useTranslation } from '../../hooks/useTranslation'

const img = 'https://i.ytimg.com/vi/9sftDDfrdMI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCtXZRUWyl4s3uOOTcgYq8XdpRobw'

/*blogs?.map((blog, index) => (						
	<Blog key={index}>
		{isAuth.isAuth &&
			<Delete onClick={()=> handleFirstDelete(blog.id, index, blog.title)}><AiFillCloseCircle /></Delete>
		}
		{
			blog.image ?
			<Image src={`${url}${blog.image}`} /> :
			<Image src={img} />
		}							
		<Title>
			<Link to={`/Blog/${blog.id}`}>{blog.title}</Link>
		</Title>
		<DatePost>{blog.date}</DatePost>
		<Resume>
			<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
				{blog.content.slice(0, 200) + '...'}
			</ReactMarkdown>
		</Resume>
	</Blog>
))*/

const Blogs = () => {
 
	const { filters } = useParams()
	const [blogs, setBlogs] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [showDelete, setShowDelete] = useState(false)
	const [element, setElement] = useState({})	

	const user = useSelector(store => store.user)
	const url = useSelector(store => store.preferences.url)

	const search = useInputValue('')
	const {words, loading} = useTranslation({ container: 'blogs' })
	const [topics, setTopics] = useState([])	

	const handleFirstDelete = (id, index, title) => {
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
		setElement({})
		setShowDelete(false)
	}

	const ApiAsync = async filter => {		
		const response = await apiCall({url: `${url}/blog-list/${filter}/`})

		if (response.status !== 200) {
			setBlogs([])
		} else {
			const data = await response.json()						
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
		ApiAsync(filters).catch(null)	
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
		<Layout title={`${filters}`} subtitle={`${words.subtitle}: ${filters}`}>		
			<Container>
				<WindowAlert show={showDelete.toString()}>
					<WindowAlertItems>
						<AlerText>{words.delete_message}: {element.title}?</AlerText>
						<Buttons>
							<Acept onClick={handleDeleteBlog}>{words.si}</Acept>
							<Declite onClick={() => setShowDelete(false)}>{words.no}</Declite>
						</Buttons>
					</WindowAlertItems>
				</WindowAlert>
				<BlogsContainer show={showDelete.toString()}>
					<BlogsContainerHeader>						
						<MainTitle>{filters}</MainTitle>
						<SearchBar {...search} placeholder={words.search} />
					</BlogsContainerHeader>
					<Topics topics={topics}/>
					<BlogsContainerMap>
						{isLoading || blogs.length === 0? 
							<Loading />
						: <BlogsGrid blogs={blogs} handleFirstDelete={handleFirstDelete} />}
					</BlogsContainerMap>
				</BlogsContainer>
			</Container>					
		</Layout>
	)
}

export default Blogs