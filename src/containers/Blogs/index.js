import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
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

const linkWeb = 'https://portafolioserbrylex.herokuapp.com'

const img = 'https://i.ytimg.com/vi/9sftDDfrdMI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCtXZRUWyl4s3uOOTcgYq8XdpRobw'

const Blogs = () => {

	const { filters } = useParams()
	const [blogs, setBlogs] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [showDelete, setShowDelete] = useState(false)
	const [element, setElement] = useState({})

	const handleFirstDelete = (id, index) => {
		setShowDelete(true)
		setElement({
			id,
			index
		})
	}

	const handleDeleteBlog = () => {		
		apiCall({urlDirection: `blog-delete/${element.id}/`, method: 'POST'})

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
	},[])

	if (isLoading) {
		return (
			<>
				<Header admin={true}/>
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
			<Header admin={true}/>
			<Container>
				<WindowAlert show={showDelete.toString()}>
					<WindowAlertItems>
						<AlerText>Are you sure that you want to delete: ?</AlerText>
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
							{true &&
								<Delete onClick={()=> handleFirstDelete(blog.id, index)}><AiFillCloseCircle /></Delete>
							}
							{
								blog.main_image ?
								<Image src={`${linkWeb}${blog.main_image}`} /> :
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