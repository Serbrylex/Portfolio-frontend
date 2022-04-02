import React from 'react'
import { useSelector } from 'react-redux'

import { 
	HeaderContainer, HeaderLinksContainer, Link,
	Logo, MyData, MyDataTitle, MyDataDescription, ContactList,
	PLinks, Icons
} from './style'

import LogoImg from '../../assets/images/Logo.png'

import { BsBook, BsBookmarkPlus } from 'react-icons/bs'
 
import TokenContext from '../../context/tokens'

import { useTranslation } from '../../hooks/useTranslation'

const Header = () => {
 
	const isAuth = useSelector(store => store.user.isAuth)
	const { words } = useTranslation({ component: "header" })

	return (
		<HeaderContainer>			
			<HeaderLinksContainer>
				<Link to='/'>
					<Logo src={LogoImg} alt="" />		
					<MyData>
						<MyDataTitle>Bryan Madrid</MyDataTitle>
						<MyDataDescription>Web Developer</MyDataDescription>
					</MyData>
				</Link>
			</HeaderLinksContainer>	
						
			<ContactList>


				<Link to='/blogs/all' title="Blogs">
					<PLinks>Blogs</PLinks>
					<Icons><BsBook color={'white'} /></Icons>				
				</Link>

				{isAuth && 
					<>
						<Link to='/create_blog' title="Add Blog">
							<PLinks>{words.add_blog}</PLinks>
							<Icons><BsBookmarkPlus color={'white'} /></Icons>
						</Link>	
					</>
				}				
			</ContactList>		
		</HeaderContainer>	
	)	
}

export default Header