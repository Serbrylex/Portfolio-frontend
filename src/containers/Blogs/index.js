// React
import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'

// Components
import Loading from '../../components/Loading'
import Layout from '../../components/Layout'

// Assets
import {
	Container, BlogsContainer, MainTitle, Blog, Image, Title, DatePost, Resume, Link, Delete, 
	ImageLoading, WindowAlert, AlerText, Acept, Declite, WindowAlertItems, Buttons,
	BlogsContainerHeader, SearchBar, BlogsContainerMap
} from './style'

import { AiFillCloseCircle } from 'react-icons/ai'
import loading from '../../assets/images/loading.gif'

// API
import apiCall from '../../api' 

// Context
import TokenContext from '../../context/tokens' 

// Hooks
import { useInputValue } from '../../hooks/useInputValue'
import { useTranslation } from '../../hooks/useTranslation'

const img = 'https://i.ytimg.com/vi/9sftDDfrdMI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCtXZRUWyl4s3uOOTcgYq8XdpRobw'

const Blogs = ({ url }) => {
 
	const { filters } = useParams()
	const [blogs, setBlogs] = useState([{},{},{}])
	const [isLoading, setIsLoading] = useState(false)
	const [showDelete, setShowDelete] = useState(false)
	const [element, setElement] = useState({})	
	const { isAuth } = useContext(TokenContext)
	const search = useInputValue('')
	const {words, loading} = useTranslation({ container: 'blogs' })

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
		const newToken = `Token ${isAuth.access_token}`
		apiCall({
			urlDirection: `blog/delete/${element.id}/`, 
			headers: {
				'Authorization': newToken,
				'Content-Type': 'application/json',				
			}, 
			method: 'DELETE' 
		})

		let newBlog = blogs
		
		newBlog.splice(element.index, 1)
		if (newBlog.length() !== 0) {
			setBlogs([...newBlog])
		} else {
			setBlogs([{}, {}, {}])
		}
		setElement({})
		setShowDelete(false)
	}

	const ApiAsync = async filter => {		
		const response = await apiCall({urlDirection: `blog-list/${filter}/`})		

		if (response.status !== 200) {
			setBlogs([{},{},{}])		
		} else {
			const data = await response.json()
			console.log('Get Data')
			console.log(data)

			for (var i = 0; i < data.length; i++) {
				data[i].resume = data[i].resume.slice(0, 100) + '...'
			}

			
			setBlogs(data)			
		}
		setIsLoading(false)
	}
	useEffect(()=>{	
		setIsLoading(true)
		ApiAsync(filters).catch(null)		
	},[])

	useEffect(()=>{
		if (search.value.length > 3) {
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
					<BlogsContainerMap>
						{blogs?.map((blog, index) => (						
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
								<Resume>{blog.resume}</Resume>
							</Blog>
						))}				
					</BlogsContainerMap>
				</BlogsContainer>
			</Container>
			{isLoading && <Loading />}			
		</Layout>
	)
}

export default Blogs