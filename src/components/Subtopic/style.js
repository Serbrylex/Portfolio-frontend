import styled from 'styled-components'


export const SubtitleSection = styled.div`  
	width: 100%;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: start;
	margin: 20px 0; 
`

export const ParagraphSection = styled.div`
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

export const AddParagraph = styled.div`
	border-top: 1px solid black;	
	width: 80%;
	height: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 50px auto;
`

export const PlusParagraph = styled.button`
	background-color: #1A2026;
	border-radius: 4px;	
	padding: 10px 20px;
	width: auto;
	margin: 0 20px;	
	color: white;
	border: none;
	cursor: pointer;	
	border: 1px solid white;
`