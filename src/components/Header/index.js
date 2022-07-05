import React from 'react'
import { useSelector } from 'react-redux'

import { 
	HeaderContainer, HeaderLinksContainer, Link,
	Logo, MyData, MyDataTitle, MyDataDescription, ContactList,
	PLinks, Line, IconContainer
} from './style'

import { AiOutlineBook } from 'react-icons/ai'
 
import TokenContext from '../../context/tokens'

import { useTranslation } from '../../hooks/useTranslation'

const Header = () => {
 
	const isAuth = useSelector(store => store.user.isAuth)
	const { words } = useTranslation({ component: "header" })

	return (
		<HeaderContainer>			
			<ContactList who="first">
				<Link to='/blogs/all' title="Blogs">
					<PLinks>Proyectos</PLinks>					
				</Link>

				<Line></Line>

				<Link to='/create_blog' title="Add Blog">
					<PLinks>About</PLinks>					
				</Link>	

				<Line></Line>

				<Link to='/create_blog' title="Add Blog">
					<PLinks>Intereses</PLinks>					
				</Link>	
			</ContactList>		

			<HeaderLinksContainer>
				<Link to='/'>				
					<MyData>
						<MyDataDescription>Web Developer</MyDataDescription>
						<MyDataTitle>Bryan Madrid</MyDataTitle>
					</MyData>
				</Link>
			</HeaderLinksContainer>	
						
			<ContactList>

				<Link to='/blogs/all' title="Blogs">
					<PLinks>Blogs</PLinks>	
					<IconContainer>
						<AiOutlineBook />
					</IconContainer>
				</Link>
		
				<Line></Line>

				<Link to='/create_blog' title="Add Blog" who='first'>
					<PLinks>Contact</PLinks>					
				</Link>	

				{isAuth && 
					<>
						<Line></Line>

						<Link to='/create_blog' title="Add Blog">
							<PLinks>{words.add_blog}</PLinks>						
						</Link>						
					</>
				}
			</ContactList>		
		</HeaderContainer>	
	)	
}

export default Header