import { useEffect, useContext } from 'react'

import { useInputValue } from '../../hooks/useInputValue'  
import { useImage } from '../../hooks/useImage'	

import ImageSection from '../../components/ImageSection'
import TokenContext from '../../context/tokens'
import apiCall from '../../api'

import { ParagraphContainer, ParagraphSection, TextArea, ParagraphResponse } from './style'

const Paragraph = ({ idSubtopic, send }) => {

	const { isAuth } = useContext(TokenContext)
	const paragraph = useInputValue('This will be a paragraph')
	const imagen = useImage('')	

	const sendData = async () => {
		let objectOne = new FormData()	    				
	
		objectOne.append('paragraph', paragraph.value)
		objectOne.append('id', idSubtopic)
		if (imagen.fileImage.name?.length){
			objectOne.append('picture', imagen.fileImage, imagen.fileImage.name)
		}

		await apiCall({
			urlDirection: 'blog/subtem/paragraph/', 
			method: 'POST', 
			headers: {
				'Authorization': `Token ${isAuth.access_token}`,
			},
			body: objectOne
		})
		
	}

	useEffect(()=>{
		if (idSubtopic!==undefined && send) {
			sendData()
		}
	}, [idSubtopic, send])

	return(
		<ParagraphContainer>
			<ParagraphSection>
				{ paragraph.show ? 			
					<TextArea 
						type="text" 									
						maxlength='500'
						onBlur={() => paragraph.setShow(false)}									
						{...paragraph}
					/> : 
					<ParagraphResponse onClick={() => paragraph.setShow(true)}>{paragraph.value}</ParagraphResponse>						
				}
			</ParagraphSection>
			<ImageSection {...imagen} />	
		</ParagraphContainer>
	)
}

export default Paragraph