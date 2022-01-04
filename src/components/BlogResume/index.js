import {
	Blog, Image, Title, Link, DatePost, Resume
} from './style'


const BlogResume = ({ blog, url }) => {

	console.log(blog)

	const data = {
		image: 'https://i.ytimg.com/vi/9sftDDfrdMI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCtXZRUWyl4s3uOOTcgYq8XdpRobw',
		title: '',
		date: '',
		resume: '...',
		...blog,
	}

	return (
		<Blog>			
			<Image src={`${url}${data.image}`} />
			<Title>
				<Link to={`/Blog/${data.id}`}>{data.title}</Link>
			</Title>
			<DatePost>{data.date}</DatePost>
			<Resume>{data.resume.slice(0, 200) + '...'}</Resume>
		</Blog>
	)
}

export default BlogResume