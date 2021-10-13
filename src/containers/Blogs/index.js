import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { Helmet } from 'react-helmet'

// Components
import Header from '../../components/Header' 
import Footer from '../../components/Footer' 
import Loading from '../../components/Loading'

import {
	Container, BlogsContainer, MainTitle, Blog, Image, Title, DatePost, Resume, Link, Delete, 
	ImageLoading, WindowAlert, AlerText, Acept, Declite, WindowAlertItems, Buttons
} from './style'

import apiCall from '../../api' 

import { AiFillCloseCircle } from 'react-icons/ai'
import loading from '../../images/loading.gif'
import TokenContext from '../../context/tokens' 

const img = 'https://i.ytimg.com/vi/9sftDDfrdMI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCtXZRUWyl4s3uOOTcgYq8XdpRobw'

const Blogs = ({ url }) => {

	const { filters } = useParams()
	const [blogs, setBlogs] = useState([{},{},{}])
	const [isLoading, setIsLoading] = useState(false)
	const [showDelete, setShowDelete] = useState(false)
	const [element, setElement] = useState({})	
	const { isAuth } = useContext(TokenContext)

	const handleFirstDelete = (id, index, title) => {
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
		setBlogs([...newBlog])
		setElement({})
		setShowDelete(false)
	}

	const ApiAsync = async () => {
		setIsLoading(true)
		const response = await apiCall({urlDirection: `blog-list/${filters}/`})		

		const data = await response.json()
		console.log('Get Data')
		console.log(data)

		for (var i = 0; i < data.length; i++) {
			data[i].resume = data[i].resume.slice(0, 100) + '...'
		}

		setBlogs(data)			
		setIsLoading(false)
	}
	useEffect(()=>{	
		ApiAsync().catch(null)		
	},[])


	return(
		<>
			<Helmet>
                <title>@Serbrylex | Blogs</title>
				<meta name='description' content='Aquí veras todos los blogs escritos por @Serbrylex' />
			</Helmet>
			<Header/>
			<Container>
				<WindowAlert show={showDelete.toString()}>
					<WindowAlertItems>
						<AlerText>Are you sure that you want to delete: {element.title}?</AlerText>
						<Buttons>
							<Acept onClick={handleDeleteBlog}>Yeah</Acept>
							<Declite onClick={() => setShowDelete(false)}>Nop</Declite>
						</Buttons>
					</WindowAlertItems>
				</WindowAlert>
				<BlogsContainer show={showDelete.toString()}>
					<MainTitle>{filters}</MainTitle>
					{blogs?.map((blog, index) => (						
						<Blog key={blog.id}>
							{isAuth.isAuth &&
								<Delete onClick={()=> handleFirstDelete(blog.id, index, blog.title)}><AiFillCloseCircle /></Delete>
							}
							{
								blog.main_image ?
								<Image src={`${url}${blog.main_image}`} /> :
								<Image src={img} />
							}							
							<Title>
								<Link to={`/Blog/${blog.id}`}>{blog.title}</Link>
							</Title>
							<DatePost>{blog.date}</DatePost>
							<Resume>{blog.resume}</Resume>
						</Blog>
					))}				
				</BlogsContainer>
			</Container>
			{isLoading && <Loading />}
			<Footer />
		</>
	)
}

export default Blogs