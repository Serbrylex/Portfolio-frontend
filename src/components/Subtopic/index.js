import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import ImageSection from '../../components/ImageSection'
import Paragraph from '../../components/Paragraph'

import {
	SubtitleSection, ParagraphSectionOne, InputTitle, HTitle, 
	TextArea, ParagraphResponse, AddSubtopic, PlusSubtopic
} from './style'
 
import { useInputValue } from '../../hooks/useInputValue'  
import TokenContext from '../../context/tokens'

import apiCall from '../../api'


const Subtopic = ({ idPost, send }) => {	
		
	const { isAuth } = useContext(TokenContext)
	const title = useInputValue('Subtitle')	
	const [idSubtopic, setIdSubtopic] = useState(undefined)		
	const [paragraphsSend, setParagraphsSend] = useState([false])
	const history = useHistory()


	const sendData = async () => {
		let response = await apiCall({
			urlDirection: 'blog/subtem/', 
			method: 'POST', 
			headers: {
				'Authorization': `Token ${isAuth.access_token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: idPost,
				title: title.value,
			})
		})
 
		let data = await response.json()

		setIdSubtopic(data.id)		
	}

	useEffect(()=>{
		if (idPost!==undefined && send) {
			for (var i = 0; i < paragraphsSend.length; i++) {
				if (!paragraphsSend[i]) {
					let algo = [...paragraphsSend]
					algo[i] = !algo[i]
					setParagraphsSend([...algo])
				}
			}									
		}
	},[idSubtopic, paragraphsSend])

	useEffect(()=>{

		// Si cambia significa que ya se mando la data
		if (idPost!==undefined && send) {
			sendData()			
		}

	},[idPost, send])
	

	const renderParagraphs = () => {
		let arrayOfParagraphs = []

		for (var i = 0; i < paragraphsSend.length; i++) {
			arrayOfParagraphs.push(
				<Paragraph 
					key={i}
					idSubtopic={idSubtopic}
					send={paragraphsSend[i]}					
				/>
			)
		}

		return arrayOfParagraphs
	}


	return(
		<>
			<SubtitleSection>
				{title.show ? 
					<InputTitle 
						type="text"
						maxlength='50'
						onBlur={() => title.setShow(false)}									
						{...title}
					/> : 
					<HTitle onClick={() => title.setShow(true)}>{title.value}</HTitle>
				}
			</SubtitleSection>

			{renderParagraphs()}

			<AddSubtopic>				
				<PlusSubtopic onClick={()=>setParagraphsSend([...paragraphsSend, false])}>Add Paragraph</PlusSubtopic>
			</AddSubtopic>
		</>		
	)

}

export default Subtopic