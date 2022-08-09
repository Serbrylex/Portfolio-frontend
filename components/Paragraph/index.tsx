/*import { useEffect } from 'react'

import { useInputValue } from '@hooks/useInputValue'  
import { useImage } from '@hooks/useImage'	
import { useAppSelector } from '@hooks/useReduxH'

import ImageSection from '@components/ImageSection'
import apiCall from '@api'

import { ParagraphContainer, ParagraphSection, TextArea, ParagraphResponse } from './style'

const Paragraph = ({ idSubtopic, send }: {idSubtopic: number, send: boolean}) => {

	const url = useAppSelector(store => store.preferences.url)
	const user = useAppSelector(store => store.user)

	const paragraph = useInputValue('This will be a paragraph')
	const imagen = useImage('')	

	const sendData = async () => {
		let objectOne = new FormData()	    				
	
		objectOne.append('paragraph', paragraph.value)
		objectOne.append('id', idSubtopic)		
		objectOne.append('picture', imagen.fileImage, imagen.image)
		

		await apiCall({
			url: `${url}/blog/subtem/paragraph/`, 
			method: 'POST', 
			headers: {
				'Authorization': `Token ${user.access_token}`,
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
						onBlur={() => paragraph.setShow(false)}									
						{...paragraph}						
					></TextArea>
					: 
					<ParagraphResponse onClick={() => paragraph.setShow(true)}>{paragraph.value}</ParagraphResponse>						
				}
			</ParagraphSection>
			<ImageSection edit={false} {...imagen} />	
		</ParagraphContainer>
	)
}

export default Paragraph*/