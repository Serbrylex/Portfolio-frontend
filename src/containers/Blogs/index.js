import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { Helmet } from 'react-helmet'

// Components
import Header from '../../components/Header' 
import Footer from '../../components/Footer' 

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
	const [blogs, setBlogs] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [showDelete, setShowDelete] = useState(false)
	const [element, setElement] = useState({})
	const [admin, setAdmin] = useState(false)
	const { token } = useContext(TokenContext)

	const handleFirstDelete = (id, index, title) => {
		setShowDelete(true)
		setElement({
			id,
			index,
			title
		})
	}

	const handleDeleteBlog = () => {		
		const newToken = `Token ${token.access_token}`
		apiCall({
			urlDirection: `blog-delete/${element.id}/`, 
			headers: {
				'Authorization': newToken,
				'Content-Type': 'application/json',				
			}, 
			method: 'POST'
		})

		let newBlog = blogs
		
		newBlog.splice(element.index, 1)
		setBlogs([...newBlog])
		setElement({})
		setShowDelete(false)
	}

	const ApiAsync = async () => {
		setIsLoading(true)
		const data = await apiCall({urlDirection: `blog-list/${filters}/`})

		for (var i = 0; i < data.length; i++) {
			data[i].resume = data[i].resume.slice(0, 100) + '...'
		}

		setBlogs(data)			
		setIsLoading(false)
	}
	useEffect(()=>{	
		ApiAsync().catch(null)

		if (token.length !== 0){
			setAdmin(true)
		}	
	},[])

	if (isLoading) {
		return (
			<>
				<Header admin={admin}/>
				<Container>
					<BlogsContainer>
						<MainTitle>{filters}</MainTitle>	
						<ImageLoading>Cargando...</ImageLoading>
					</BlogsContainer>
				</Container>
				<Footer />
			</>							
		)
	}

	return(
		<>
			<Helmet>
                <title>@Serbrylex | Blogs</title>
				<meta name='description' content='Aquí veras todos los blogs escritos por @Serbrylex' />
			</Helmet>
			<Header admin={admin}/>
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
							{admin &&
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
			<Footer />
		</>
	)
}

export default Blogs