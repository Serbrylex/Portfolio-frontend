import { useContext } from 'react'

import { 
	HeaderContainer, HeaderLinksContainer, Link,
	Logo, MyData, MyDataTitle, MyDataDescription, ContactList, List, Ancor,
	PLinks, Linka, Icons
} from './style'

import LogoImg from '../../images/Logo.png'
import TokenContext from '../../context/tokens'

import { RiContactsLine } from 'react-icons/ri'
import { BsBook, BsBookmarkPlus } from 'react-icons/bs'
 
const Header = () => {
 
	const { isAuth } = useContext(TokenContext)

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
				<Link to='/Freelancer' title="Freelancer">
					<PLinks> Freelacer </PLinks>				
					<Icons><RiContactsLine color={'white'} /></Icons>
				</Link>

				<Link to='/Blogs/All' title="Blogs">
					<PLinks> Blogs </PLinks>
					<Icons><BsBook color={'white'} /></Icons>				
				</Link>

				{isAuth.isAuth && 
					<>
						<Link to='/CreateBlog' title="Add Blog">
							<PLinks> Add Blog </PLinks>
							<Icons><BsBookmarkPlus color={'white'} /></Icons>
						</Link>	
					</>
				}				
			</ContactList>		
		</HeaderContainer>	
	)	
}

export default Header