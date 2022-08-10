import React, { useState } from 'react'
import Linked from 'next/link'
import { useRouter } from 'next/router'

import { 
	HeaderContainer, HeaderLinksContainer, Link,
	Logo, MyData, MyDataTitle, MyDataDescription, ContactList,
	PLinks, Line, IconContainer
} from './style'

import { AiOutlineBook } from 'react-icons/ai'

import { useTranslation } from '@hooks/useTranslation'
import { useAppSelector } from '@hooks/useReduxH'

const Header = () => {
	
	const router = useRouter()
	const isAuth: boolean = useAppSelector(store => store.user.isAuth)
	const { words } = useTranslation({ component: "header", container: '' })	

	return (
		<HeaderContainer>			
			<ContactList who="first">
				<Linked href='/#projects' title="Blogs">
					<Link who='none'><PLinks>Proyectos</PLinks></Link>
				</Linked>

				<Line></Line>

				<Linked href='/#about' title="Add Blog">
					<Link who='none'><PLinks>About</PLinks></Link>
				</Linked>	

				<Line></Line>

				<Linked href='/#interestings' title="Add Blog">
					<Link who='none'><PLinks>Intereses</PLinks></Link>
				</Linked>	
			</ContactList>		

			<HeaderLinksContainer>
				<Linked href='/'>
					<Link who='none'>
					<MyData>
						<MyDataDescription>Web Developer</MyDataDescription>
						<MyDataTitle>Bryan Madrid</MyDataTitle>
					</MyData>
					</Link>
				</Linked>
			</HeaderLinksContainer>	
						
			<ContactList who='none'>

				<Linked href='/blogs/all' title="Blogs">
					<Link who='none'>
					<PLinks>Blogs</PLinks>	
					<IconContainer>
						<AiOutlineBook />
					</IconContainer>
					</Link>
				</Linked> 
		
				<Line></Line>

				<Linked href='#contact' title="Add Blog">
					<Link who='first'><PLinks>Contact</PLinks></Link>
				</Linked>	

				{isAuth && 
					<>
						<Line></Line>

						<Linked href='/create_blog' title="Add Blog">
							<Link who='dif'><PLinks>{words.add_blog}</PLinks></Link>
						</Linked>						
					</>
				}
			</ContactList>		
		</HeaderContainer>	
	)	
}

export default Header