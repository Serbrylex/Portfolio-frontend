import { useState } from 'react'

import {
	ProyectContainer, ImageDataContainer, Image, DataImage, ProyectInformation, Title, Tools,
	Links, ToolsTitle, Element, Link, Ancor
} from './style' 

import imageDefault from '../../images/Walk.svg'

const Proyect = ({ proyect, url }) => {
  
	const [showResume, setShowResume] = useState('false')
	const [focus, setFocus] = useState('false')	
	
	return( 
		<ProyectContainer>
			<ImageDataContainer onMouseOver={()=>{setShowResume('true')}} onMouseOut={()=>{setShowResume('false')}}>				
				{ proyect.main_image ?
					<Image src={`${url}${proyect.main_image}`} /> :
					<Image  src={imageDefault} /> 
				}
				<DataImage show={showResume}>
					<p>{proyect.resume}</p>
					<p>{proyect.date}</p>
				</DataImage>
			</ImageDataContainer>
			<ProyectInformation onMouseOver={()=>setFocus('true')} onMouseOut={()=>setFocus('false')} focus={focus}>
				<Title>{proyect.title}</Title>				
				<ToolsTitle >Tools</ToolsTitle>
				<Tools>
					{proyect.topics?.map((element, index)=>(
						<Element key={index}>{element}</Element>
					))}
				</Tools>						
				<Links>
					<Ancor href={proyect.github}>GitHub</Ancor>
					<Link to={`/Blog/${proyect.blog_id}`}>Blog</Link>
					<Ancor href={proyect.link}>Web</Ancor>
				</Links>
			</ProyectInformation>
		</ProyectContainer>
	)
}

export default Proyect