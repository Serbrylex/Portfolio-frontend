import { 
	HeaderContainer, HeaderLinksContainer, PLinks, Link,
	Logo, MyData, MyDataTitle, MyDataDescription, Icons, Linka, ContactList, List, Ancor
} from './style'

import LogoImg from '../../images/Logo.png'
 
import { BsBook, BsBookmarkPlus } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'

import { 
	AiOutlineFacebook, AiFillTwitterCircle, AiOutlineGithub, AiOutlineWhatsApp, AiOutlineMail, AiOutlineLinkedin 
} from 'react-icons/ai'

import { SiPlatzi } from 'react-icons/si'
 
const Header = ({ admin }) => {

	return (
		<HeaderContainer>			
			<HeaderLinksContainer>
				<Link to='/'>
					<Logo src={LogoImg} alt="" />		
				</Link>
				<MyData>
					<MyDataTitle>Bryan Madrid</MyDataTitle>
					<MyDataDescription>Web Developer</MyDataDescription>
				</MyData>
			</HeaderLinksContainer>	
						
			<ContactList>
				<List>
					<Ancor href="https://platzi.com/p/bryan-madrid-nunez/" title="Platzi"><SiPlatzi /></Ancor>
				</List>
				<List>
					<Ancor href="https://www.facebook.com/bryan.madridnunez" title="Facebook"><AiOutlineFacebook /></Ancor>
				</List>
				<List>
					<Ancor href="https://twitter.com/Serbrylex" title="Twitter"><AiFillTwitterCircle /></Ancor>
				</List>
				<List>
					<Ancor href="https://wa.me/9983963548?text=I%20wanna%20work%20with%20you" title="WhatsApp"><AiOutlineWhatsApp /></Ancor>
				</List>
				<List>
					<Ancor href="mailto:sbryanmadridn@gmail.com" title="Email"><AiOutlineMail /></Ancor>
				</List>
				<List>
					<Ancor href="https://github.com/Serbrylex" title="GitHub"><AiOutlineGithub /></Ancor>
				</List>
				<List>
					<Ancor href="https://www.linkedin.com/in/sergio-bryan-madrid-nu%C3%B1ez-a5b8541a7/" title="LinkedIn"><AiOutlineLinkedin /></Ancor>
				</List>
			</ContactList>		
		</HeaderContainer>	
	)
	/*<PLinks>						
		<Linka href="https://www.fiverr.com/share/DwoNAa">Freelacer(?</Linka>
	</PLinks>
	<Icons>
		<Link to='/About'><RiContactsLine color={'white'} /></Link>					
	</Icons>
	<PLinks>						
		<Link to='/Blogs/All'>Blogs</Link>
	</PLinks>
	<Icons>
		<Link to='/Blogs/All'><BsBook color={'white'} /></Link>					
	</Icons>
	{admin && 
		<>
			<PLinks>
				<Link to='/CreateBlog'>Blog +</Link>	
			</PLinks>
			<Icons>
				<Link to='/CreateBlog'><BsBookmarkPlus color={'white'} /></Link>								
			</Icons>
		</>
	}*/				
}

export default Header