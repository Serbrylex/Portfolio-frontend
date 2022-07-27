import React from 'react'
import { useSelector } from 'react-redux'
import Linked from 'next/link'

import { 
	HeaderContainer, HeaderLinksContainer, Link,
	Logo, MyData, MyDataTitle, MyDataDescription, ContactList,
	PLinks, Line, IconContainer
} from './style'

import { AiOutlineBook } from 'react-icons/ai'

import { useTranslation } from '@hooks/useTranslation'

const Header = () => {
 
	const isAuth: boolean = useSelector(store => store.user.isAuth)
	const { words } = useTranslation({ component: "header", container: undefined })

	return (
		<HeaderContainer>			
			<ContactList who="first">
				<Linked href='#projects' title="Blogs">
					<Link><PLinks>Proyectos</PLinks></Link>
				</Linked>

				<Line></Line>

				<Linked href='#about' title="Add Blog">
					<Link><PLinks>About</PLinks></Link>
				</Linked>	

				<Line></Line>

				<Linked href='#interestings' title="Add Blog">
					<Link><PLinks>Intereses</PLinks></Link>
				</Linked>	
			</ContactList>		

			<HeaderLinksContainer>
				<Linked href='/'>
					<Link>
					<MyData>
						<MyDataDescription>Web Developer</MyDataDescription>
						<MyDataTitle>Bryan Madrid</MyDataTitle>
					</MyData>
					</Link>
				</Linked>
			</HeaderLinksContainer>	
						
			<ContactList>

				<Linked href='/blogs/all' title="Blogs">
					<Link>
					<PLinks>Blogs</PLinks>	
					<IconContainer>
						<AiOutlineBook />
					</IconContainer>
					</Link>
				</Linked> 
		
				<Line></Line>

				<Linked href='#contact' title="Add Blog" who='first'>
					<Link><PLinks>Contact</PLinks></Link>
				</Linked>	

				{isAuth && 
					<>
						<Line></Line>

						<Linked href='/create_blog' title="Add Blog">
							<Link><PLinks>{words.add_blog}</PLinks></Link>
						</Linked>						
					</>
				}
			</ContactList>		
		</HeaderContainer>	
	)	
}

export default Header