type TUser = {
  id: number, 
  username: string, 
  email: string,
  access_token: string,
  isAuth?: boolean
}

type TBlog = {
  user: number,
  title: string,
  image: string,
  content: string,
  date: Date,  
  views: number,
  github: string,
  link: string
  categories?: string[]
}

type TBlogs = Blog[];