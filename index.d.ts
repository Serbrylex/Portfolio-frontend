type TUser = {
  id: number, 
  username: string, 
  email: string,
  access_token: string,
  isAuth?: boolean
}

type TBaseBlog = {
  id: number,
  user: number,
  title: string,
  image: string,
  content: string,
  date: string,  
  views: number,
  github: string,
  link: string,
}

type TBlog = TBaseBlog & {
  categories: TTopic[],
}

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

type TTopic = {
	category: string;
}

declare module "*.json" {
  const dataValue: any;
  export default dataValue;
}

interface Blob {
  readonly size: number;
  readonly type: string;
  slice(start?: number, end?: number, contentType?: string): Blob;
}

declare var Blob: {
  prototype: Blob;
  new(blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
};