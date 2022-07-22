import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'

import Paragraph from '../../components/Paragraph'

import {
	SubtitleSection, InputTitle, HTitle, AddParagraph, PlusParagraph
} from './style'
 
import { useInputValue } from '../../hooks/useInputValue'  
import TokenContext from '../../context/tokens'

import apiCall from '../../api'


const Subtopic = ({ idPost = null, send = false }) => {	
		
	const user = useSelector(store => store.user)
	const url = useSelector(store => store.preferences.url)

	const title = useInputValue('Subtitle')	
	const [idSubtopic, setIdSubtopic] = useState(undefined)		
	const [paragraphsSend, setParagraphsSend] = useState([false])	

	const sendData = async () => {
		let response = await apiCall({
			url: `${url}/blog/subtem/`, 
			method: 'POST', 
			headers: {
				'Authorization': `Token ${user.access_token}`,
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

			<AddParagraph>				
				<PlusParagraph onClick={()=>setParagraphsSend([...paragraphsSend, false])}>Add Paragraph</PlusParagraph>
			</AddParagraph>
		</>		
	)

}

export default Subtopic