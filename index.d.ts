type TUser = {
  id: number, 
  username: string, 
  email: string,
  access_token: string,
  isAuth?: boolean
}

type TBlog = {
  id: number,
  user: number,
  title: string,
  image: string,
  content: string,
  date: Date,  
  views: number,
  github: string,
  link: string,
  categories?: string[],
  resume?: string
}

type TBlogs = Blog[];

type TProject = {
  name: string,
  image: string,
  date: Date,
  description: string,
  gols: string,
  tools: string[],
  github: string,
  link: string,
  url?: string
}