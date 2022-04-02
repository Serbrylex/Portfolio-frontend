import styled from 'styled-components'
import { Link as Linked } from 'react-router-dom'

export const Container = styled.div`
	width: 1000px;
	height: auto;
	padding: 0 5%;	
	color: white; 
	margin: 0 auto;

	@media (max-width: 500px) {
		width: 100%;
		padding: 0; 
	}
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
	width: 100%;
	height: auto;	
	padding: 0 5%;
	@media (max-width: 500px) {
		width: 94vw;
		padding: 3vw;
	}
`

export const TitleSection = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: start;
	margin: 50px 0 20px 0;
	padding: 10px 0;
	border-bottom: 1px solid white;
	@media (max-width: 500px) {
		width: 100%;
		margin: 20px 0;
	}
`

export const HTitle = styled.h1`
	width: 100%;
	height: 100%;
	font-size: 50px;
	@media (max-width: 500px) {
		font-size: 25px;
	}
`

export const QuestionSection = styled.p`
	width: 75%;
	height: auto;
	text-align: left;	
	margin: 50px 0;	
`

export const ResumeSection = styled.p`
	width: 100%;
	height: auto;
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

export const ParagraphResponse = styled.p`
	width: 100%;
	height: 100%;
	font-size: 20px;
	@media (max-width: 500px) {
		font-size: 18px;
	}
`

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
	margin: 20px 0 30px 0;
`

export const HSubtitle = styled.h1`
	width: 100%;
	height: 100%;		
	font-size: 30px;
`

export const LinksContainer = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	margin: 10px 0;
	align-items: center;
	justify-content: space-evenly;	
`

export const TheLinks = styled.a`
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