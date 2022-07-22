import React from 'react'

import {
	FooterContainer, ContactTitleLarge, ContactTitleShort, ContactList, List, Ancor
} from './style' 

import { 
	AiOutlineFacebook, AiFillTwitterCircle, AiOutlineGithub, AiOutlineWhatsApp, AiOutlineMail, AiOutlineLinkedin 
} from 'react-icons/ai'

import { SiPlatzi } from 'react-icons/si'


const Footer = () => { 

	return(
		<FooterContainer>
			<ContactTitleLarge>Sergio Bryan Madrid Nuñez @Serbrylex</ContactTitleLarge>
			<ContactTitleShort>@Serbrylex</ContactTitleShort>
			<ContactList>
				<List>
					<Ancor href="https://platzi.com/p/bryan-madrid-nunez/"><SiPlatzi /></Ancor>
				</List>
				<List>
					<Ancor href="https://www.facebook.com/bryan.madridnunez"><AiOutlineFacebook /></Ancor>
				</List>
				<List>
					<Ancor href="https://twitter.com/Serbrylex"><AiFillTwitterCircle /></Ancor>
				</List>
				<List>
					<Ancor href="https://wa.me/9983963548?text=I%20wanna%20work%20with%20you"><AiOutlineWhatsApp /></Ancor>
				</List>
				<List>
					<Ancor href="mailto:sbryanmadridn@gmail.com"><AiOutlineMail /></Ancor>
				</List>
				<List>
					<Ancor href="https://github.com/Serbrylex"><AiOutlineGithub /></Ancor>
				</List>
				<List>
					<Ancor href="https://www.linkedin.com/in/sergio-bryan-madrid-nu%C3%B1ez-a5b8541a7/"><AiOutlineLinkedin /></Ancor>
				</List>
			</ContactList>
		</FooterContainer>
	)
}

export default Footer