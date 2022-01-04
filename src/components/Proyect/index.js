import React from 'react'

import {
	ProyectContainer, ImageDataContainer, Image, 
	DateProyect, ProyectInformation, Title, Tools, 
	ToolsTitle, Element, Ancor, ImageLink, TitleSection
} from './style' 

import {  
	AiOutlineGithub 
} from 'react-icons/ai'

import { useResetDate } from '../../hooks/useResetDate'

import { useTranslation } from '../../hooks/useTranslation'

const Proyect = ({ proyect }) => {
 
	const date = useResetDate({ date: proyect.date })
	const { words, loading } = useTranslation({ component: "proyect" })
	
	return( 
		<ProyectContainer>
			<ImageDataContainer>
				<ImageLink href={proyect.link}>
					<Image src={proyect.image} /> 					
				</ImageLink>
				<DateProyect>{date}</DateProyect>
			</ImageDataContainer>
			<ProyectInformation>
				<TitleSection>
					<Title href={proyect.link}>{proyect.name}</Title>
					<Ancor href={proyect.github} title="GitHub"><AiOutlineGithub /></Ancor>
				</TitleSection>
				<Tools>
					{proyect.tools.map((element, index)=>(
						<Element key={index}>{element}</Element>
					))}
				</Tools>		
				<ToolsTitle>{words.description}</ToolsTitle>
				<p>{proyect.description}</p>				
				<ToolsTitle>{words.dificulties}</ToolsTitle>
				<p>{proyect.gols}</p>						
			</ProyectInformation>
		</ProyectContainer>
	)
}

export default Proyect