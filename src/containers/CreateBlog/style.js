import styled from 'styled-components'

 
export const Container = styled.div`
	width: 90%;
	height: auto;
	padding: 0 5%;
	background-color: #3B4956;
	color: white;
	@media (max-width: 500px) {
		width: 100%; 
		padding: 0;
	}
`

export const SecondContainer = styled.div` 
	width: 100%;
	height: auto;	
`

export const Main = styled.div`
	display: flex;
	background-color: #212930;
	@media (max-width: 500px) {
		flex-direction: column;
		width: 100%;
		padding: 0;
	}
`

export const Content = styled.div`
	width: 71%;
	height: auto;	
	padding: 2%;
	@media (max-width: 500px) {
		width: 96%;
		padding: 2%;
	}
`

export const Adds = styled.div`
	width: 25%;	
	height: 100vh;
	background-color: white;
	position: sticky;
	top: 0;
	bottom: 0;	
`

export const TitleSection = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: start;
	margin: 20px 0;
	@media (max-width: 500px) {
		width: 100%;
		margin: 20px 0;
	}
`

export const InputTitle = styled.input`
	width: 100%;
	height: 25px;
	padding: 10px;
	font-size: 20px;
	color: white;
	background-color: transparent;
`

export const HTitle = styled.h1`
	width: 100%;
	height: 100%;
	font-size: 35px;
	@media (max-width: 500px) {
		font-size: 25px;
	}
`

export const QuestionSection = styled.p`
	width: 75%;
	height: 100px;
	text-align: left;	
	margin: 20px 0;
`

export const ResumeSection = styled.p`
	width: 100%;
	height: auto;
	margin: 20px 0;
`

export const TopicsSection = styled.div`
	width: 100%;
	height: 140px;		
	margin: 20px 0;
`

export const Subtitle = styled.h3`
	height: 30px;
	width: 100%;
	font-size: 25px;
	@media (max-width: 500px) {
		font-size: 20px;
	}
`

export const TextArea = styled.textarea`
	width: 98%;
	height: 150px;
	padding: 5px 1%;
	color: white;
	background-color: transparent;
`

export const ParagraphResponse = styled.p`
	width: 100%;
	height: 100%;
	font-size: 20px;
	@media (max-width: 500px) {
		font-size: 18px;
	}
`

export const TopicsUl = styled.ul`	
	width: 95%;
	height: 110px;
	margin-left: 5%;		
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const InputList = styled.input`
	color: white;
	background-color: transparent;
`

export const TopicList = styled.li`
	
`

export const SendPostContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: end;
	color: white;
`

export const SendPost = styled.button`
	background-color: #1A2026;
	border-radius: 4px;
	margin: 20px 10px 20px 80%;
	padding: 5px 15px;
	width: 100px;
	font-size: 17px;
	color: white;
	border: none;
	cursor: pointer;
`

export const LinksContainer = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`

export const InputLinks = styled.input`
	width: 30%;
	height: 26px;
	padding: 2px;	
	color: white;
	background-color: transparent;
`

export const TheLinks = styled.p`
	width: 20%;
	height: 26px;
	padding: 2px;
	text-decoration: none;
	color: white;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: space-around;

	@media (max-width: 500px){
		width: 30%;
	}
`

export const AddSubtopic = styled.div`
	border-top: 1px solid black;	
	width: 100%;
	height: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 50px 0;
`

export const PlusSubtopic = styled.button`
	background-color: #1A2026;
	border-radius: 4px;	
	padding: 10px 20px;
	width: auto;
	margin: 0 20px;
	font-size: 17px;
	color: white;
	border: none;
	cursor: pointer;	
	border: 1px solid white;
`
