import { 
	HeaderContainer, HeaderLinksContainer, PLinks, Link, Preferences,
	Logo, MyData, MyDataTitle, MyDataDescription, Icons, Linka
} from './style'

import LogoImg from '../../images/Logo.png'

import { BsBook, BsBookmarkPlus } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'
 
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
			<Preferences>				
				<PLinks>						
					<Linka href="https://www.fiverr.com/share/DwoNAa">Freelacer?</Linka>
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
				}								
			</Preferences>
		</HeaderContainer>	
	)
}

export default Header