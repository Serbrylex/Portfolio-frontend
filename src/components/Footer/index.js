import {
	FooterContainer, ContactTitle, ContactList, Ancor
} from './style' 

import { 
	AiOutlineFacebook, AiFillTwitterCircle, AiOutlineGithub, AiOutlineWhatsApp, AiOutlineMail, AiOutlineLinkedin 
} from 'react-icons/ai'

const Footer = () => {

	return(
		<FooterContainer>
			<ContactTitle>@Serbrylex</ContactTitle>
			<ContactList>
				<p>
					<Ancor href="https://www.facebook.com/bryan.madridnunez"><AiOutlineFacebook /></Ancor>
				</p>
				<p>
					<Ancor href="https://twitter.com/Serbrylex"><AiFillTwitterCircle /></Ancor>
				</p>
				<p>
					<Ancor href="https://wa.me/9983963548?text=I%20wanna%20work%20with%20you"><AiOutlineWhatsApp /></Ancor>
				</p>
				<p>
					<Ancor href="mailto:sbryanmadridn@gmail.com"><AiOutlineMail /></Ancor>
				</p>
				<p>
					<Ancor href="https://github.com/Serbrylex"><AiOutlineGithub /></Ancor>
				</p>
				<p>
					<Ancor href="https://www.linkedin.com/in/sergio-bryan-madrid-nu%C3%B1ez-a5b8541a7/"><AiOutlineLinkedin /></Ancor>
				</p>
			</ContactList>
		</FooterContainer>
	)
}

export default Footer