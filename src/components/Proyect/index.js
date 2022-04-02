import React from 'react'

import {
	ProyectContainer, ImageDataContainer, Image, 
	DateProyect, ProyectInformation, Title, Tools, 
	ToolsTitle, Element, Ancor, ImageLink, TitleSection,
	Info
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
				<Info>{proyect.description}</Info>
				<ToolsTitle>{words.dificulties}</ToolsTitle>
				<Info>{proyect.gols}</Info>
			</ProyectInformation>
		</ProyectContainer>
	)
}

export default Proyect