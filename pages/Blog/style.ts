import styled from 'styled-components'
import Linked from 'next/link'

import ads from '../../assets/images/ads.jpg'

export const Container = styled.div` 
	width: 100%;
	height: auto;
	padding: 0;	
	color: white; 
	margin: 0 auto;
	display: grid;
	grid-template-columns: 3% 60% 28% 3%;
	grid-gap: 2%;

	@media (max-width: 800px) {
		width: 100%;
		padding: 0; 
		margin: 0;
		grid-template-columns: 1fr;
		grid-gap: 0;
		grid-template-rows: auto auto;
	}
`

export const Left = styled.div`
	@media (max-width: 800px) {
		display: none;
	}
`

//background-image: url(${ads});
export const Right = styled.div`	
	@media (max-width: 800px) {		
		width: 95%;
		height: 50vh;
		margin: 20px auto;
	}
`

export const Main = styled.div`
	display: flex;	
	background-color: #212930;
	@media (max-width: 800px) {
		flex-direction: column;
		width: 100%;
		padding: 0;
	}
`

export const Content = styled.div`
	width: 90%;
	height: auto;	
	padding: 0 5%;
	@media (max-width: 800px) {
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
	@media (max-width: 800px) {
		width: 100%;
		margin: 20px 0;
	}
`

export const HTitle = styled.h1`
	width: 100%;
	height: 100%;
	font-size: 50px;
	@media (max-width: 800px) {
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
	@media (max-width: 800px) {
		font-size: 20px;
	}
`

export const ParagraphResponse = styled.p`
	width: 100%;
	height: 100%;
	font-size: 20px;
	@media (max-width: 800px) {
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

	@media (max-width: 800px){
		width: 30%;
	}
`