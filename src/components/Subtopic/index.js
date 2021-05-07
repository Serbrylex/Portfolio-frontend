import { useState, useEffect } from 'react'

import ImageSection from '../../components/ImageSection'

import {
	SubtitleSection, ParagraphSectionOne, InputTitle, HTitle, TextArea, ParagraphResponse
} from './style'
 
import { useInputValue } from '../../hooks/useInputValue'  
import { useImage } from '../../hooks/useImage'

import apiCall from '../../api'


const Subtopic = ({ idBlog,  send, token, orderId }) => {	
	
	const subtitle = useInputValue('Subtitle')
	const paragraphOne = useInputValue('Click me and set your paragraph')
	const paragraphTwo = useInputValue('Click me and set your paragraph')
	const paragraphThree = useInputValue('Click me and set your paragraph')
	const paragraphFour = useInputValue('Click me and set your paragraph')
	const paragraphFive = useInputValue('Click me and set your paragraph')

	useEffect(()=>{
		let elementsParagraph = [subtitle, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive]
		
		for (var i = 0; i < elementsParagraph.length; i++) {			
			if (elementsParagraph[i].value.length > 499){
				elementsParagraph[i].setValue(elementsParagraph[i].value.substr(0, 499))
			}
		}

	}, [subtitle, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive])
	
	const imagenOne = useImage('')
	const imagenTwo = useImage('')
	const imagenThree = useImage('')
	const imagenFour = useImage('')
	const imagenFive = useImage('')	

	const asyncFetch = async ({ urlDirection, method, headers, body }) => {
		const responseData = await apiCall({urlDirection, method, headers, body})
		return(responseData)
	}

	useEffect(()=>{
		if (send) {
			let objectForm = new FormData()		
			const newToken = `Token ${token}`

			objectForm.append('orderId', orderId)
			objectForm.append('blog', idBlog)
			objectForm.append('title', subtitle.value)
			objectForm.append('first_paragraph', paragraphOne.value)
			objectForm.append('second_paragraph', paragraphTwo.value)
			objectForm.append('third_paragraph', paragraphThree.value)
			objectForm.append('fourth_paragraph', paragraphFour.value)
			objectForm.append('fifth_paragraph', paragraphFive.value)

			//objectForm.append('token', newToken)

			if (imagenOne.fileImage.name?.length){
				objectForm.append('first_image', imagenOne.fileImage, imagenOne.fileImage.name)
			}
			if (imagenTwo.fileImage.name?.length){			
				objectForm.append('second_image', imagenTwo.fileImage, imagenTwo.fileImage.name)
			}
			if (imagenThree.fileImage.name?.length){			
				objectForm.append('third_image', imagenThree.fileImage, imagenThree.fileImage.name)
			}
			if (imagenFour.fileImage.name?.length){			
				objectForm.append('fourth_image', imagenFour.fileImage, imagenFour.fileImage.name)
			}
			if (imagenFive.fileImage.name?.length){			
				objectForm.append('fifth_image', imagenFive.fileImage, imagenFive.fileImage.name)
			}
			
			const responseData = asyncFetch({
				urlDirection: 'subtem-create/', 
				method: 'POST', 
				headers: {
					'Authorization': newToken,
				},
				body: objectForm
			})		

			console.log(responseData)
		}
	}, [send])


	return(
		<>
			<SubtitleSection>
				{subtitle.show ? 
					<InputTitle 
						type="text"
						maxlength='500'
						onBlur={() => subtitle.setShow(false)}									
						{...subtitle}
					/> : 
					<HTitle onClick={() => subtitle.setShow(true)}>{subtitle.value}</HTitle>
				}
			</SubtitleSection>
			<ParagraphSectionOne>
				{paragraphOne.show ? 
					<TextArea 
						type="text" 									
						maxlength='500'
						onBlur={() => paragraphOne.setShow(false)}									
						{...paragraphOne}
					/> : 
					<ParagraphResponse onClick={() => paragraphOne.setShow(true)}>{paragraphOne.value}</ParagraphResponse>
				}				
			</ParagraphSectionOne>
			<ImageSection {...imagenOne} />	 		
			<ParagraphSectionOne>
				{paragraphTwo.show ? 
					<TextArea 
						type="text" 									
						maxlength='500'
						onBlur={() => paragraphTwo.setShow(false)}									
						{...paragraphTwo}
					/> : 
					<ParagraphResponse onClick={() => paragraphTwo.setShow(true)}>{paragraphTwo.value}</ParagraphResponse>
				}				
			</ParagraphSectionOne>
			<ImageSection {...imagenTwo} />
			<ParagraphSectionOne>
				{paragraphThree.show ? 
					<TextArea 
						type="text" 									
						maxlength='500'
						onBlur={() => paragraphThree.setShow(false)}									
						{...paragraphThree}
					/> : 
					<ParagraphResponse onClick={() => paragraphThree.setShow(true)}>{paragraphThree.value}</ParagraphResponse>
				}				
			</ParagraphSectionOne>
			<ImageSection {...imagenThree} />
			<ParagraphSectionOne>
				{paragraphFour.show ? 
					<TextArea 
						type="text" 									
						maxlength='500'
						onBlur={() => paragraphFour.setShow(false)}									
						{...paragraphFour}
					/> : 
					<ParagraphResponse onClick={() => paragraphFour.setShow(true)}>{paragraphFour.value}</ParagraphResponse>
				}				
			</ParagraphSectionOne>
			<ImageSection {...imagenFour} />
			<ParagraphSectionOne>
				{paragraphFive.show ? 
					<TextArea 
						type="text" 	
						maxlength='500'								
						onBlur={() => paragraphFive.setShow(false)}									
						{...paragraphFive}
					/> : 
					<ParagraphResponse onClick={() => paragraphFive.setShow(true)}>{paragraphFive.value}</ParagraphResponse>
				}				
			</ParagraphSectionOne>
			<ImageSection {...imagenFive} />
		</>		
	)

}

export default Subtopic