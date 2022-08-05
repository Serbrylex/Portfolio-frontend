import React from 'react'

import {
	FooterContainer, ContactTitleLarge, ContactList, List, Ancor
} from './style' 

import { 
	AiOutlineFacebook, AiFillTwitterCircle, AiOutlineGithub, AiOutlineWhatsApp, AiOutlineMail, AiOutlineLinkedin
} from 'react-icons/ai'

import { SiPlatzi, SiEthereum } from 'react-icons/si'


const Footer = () => { 		

	function fallbackCopyTextToClipboard() {		
		try {
			var successful = document.execCommand('copy');    
		} catch (err) {
			console.error('Fallback: Oops, unable to copy', err);
		}
		
	}
	function copyTextToClipboard(text: string) {
		if (!navigator.clipboard) {
			fallbackCopyTextToClipboard();
			return;
		}
		navigator.clipboard.writeText(text).then(function() {
			console.log('Async: Copying to clipboard was successful!');
		}, function(err) {
			console.error('Async: Could not copy text: ', err);
		});
	}

	return(
		<FooterContainer id="contact">						
			<ContactTitleLarge onClick={()=>copyTextToClipboard('0xe9a5312043de79cd5dDa75BA1932E47dD659e110')}>				
				Consider supporting: 
				<SiEthereum/>
				0xe9a5312043de79cd5dDa75BA1932E47dD659e110
			</ContactTitleLarge>
			<ContactList>
				<List>
					<Ancor href="https://platzi.com/p/Serbrylex/"><SiPlatzi /></Ancor>
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