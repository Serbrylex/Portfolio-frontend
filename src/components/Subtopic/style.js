import styled from 'styled-components'


export const SubtitleSection = styled.div`  
	width: 100%;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: start;
	margin: 20px 0; 
`

export const ParagraphSectionOne = styled.div`
	width: 100%;
	height: auto;
`

export const InputTitle = styled.input`
	width: 80%;
	height: 25px;
	padding: 5px;
	font-size: 20px;
`

export const HTitle = styled.h1`
	width: 100%;
	height: 100%;		
	font-size: 30px;
	@media (max-width: 500px) {
		font-size: 20px;
	}
`

export const TextArea = styled.textarea`
	width: 98%;
	height: 50px;
	padding: 5px 1%;
`

export const ParagraphResponse = styled.p`
	width: 100%;
	height: auto;
	font-size: 20px;
	@media (max-width: 500px) {
		font-size: 16px;
	}
`