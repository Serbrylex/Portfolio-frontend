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

import { useTranslation } from '@hooks/useTranslation'
import { formatDate } from '@services/formatDate'


const Project = ({ project }: {project: TProject}) => {
 
	const date = formatDate({ date: project.date })
	const { words, loading } = useTranslation({ component: "project", container: '' })
	
	return( 
		<ProyectContainer>
			<ImageDataContainer>
				<ImageLink href={project.link}>
					<Image src={project.image} />
				</ImageLink>
				<DateProyect>{date}</DateProyect>
			</ImageDataContainer>
			<ProyectInformation>
				<TitleSection>
					<Title href={project.link} target='_blank'>{project.name}</Title>
					<Ancor href={project.github} target='_blank' title="GitHub"><AiOutlineGithub /></Ancor>
				</TitleSection>
				<Tools>
					{project.tools.map((element, index)=>(
						<Element key={index}>{element}</Element>
					))}
				</Tools>		
				<ToolsTitle>{words.description}:</ToolsTitle>
				<Info>{project.description}</Info>
				<ToolsTitle>{words.dificulties}:</ToolsTitle>
				<Info>{project.gols}</Info>
			</ProyectInformation>
		</ProyectContainer>
	)
}

export default Project