import styled from 'styled-components'
import { Link as Linked } from 'react-router-dom'

export const Container = styled.div`
	width: 90%;
	height: auto;
	padding: 0 5%;
	background-color: #14181D;
	color: white;
	@media (max-width: 500px) {
		width: 100%;
		padding: 0;
	}
`
export const BodyContainer = styled.div` 
	width: 100%;
	height: auto;
`

export const SectionContainerPath = styled.div`
	display: flex;	
	background-color: #3B4956;
	width: 100%;
	height: 90vh;
	color: white;
	align-items: center;
	justify-content: center;
	@media (max-width: 500px) {
		display: flex;	
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 60vh;
	}
`

export const SectionContainerPathTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;	
	justify-content: center;
	width: 50%;
	height: 90%;
	font-size: 100px;
	@media (max-width: 500px) {
		width: 100%;
	}
`

export const WeAre= styled.div`
	background-color: #273139;
	width: 45%;
	height: 30%;
	color: white;
	padding: 5% 5%;
	box-shadow: -30px -30px #1A2026;	
	@media (max-width: 500px) {
		display: flex;	
		width: 70%;
		height: 70%;
		flex-direction: column;		
		box-shadow: -15px -15px #1A2026;
		justify-content: space-evenly;		
	}

`

export const WeAreTitle= styled.h1`
	font-size: 30px;
	margin: 20px 0;
	@media (max-width: 500px) {
		font-size: 25px;
		margin: 5px 0;
	}
`

export const WeAreWho= styled.p`
	font-size: 20px;
	@media (max-width: 500px) {
		font-size: 18px;		
		margin: 5px 0;
	}	
`

export const WeAreImage = styled.div`
	display: none;
	@media (max-width: 500px) {
		display: flex;
		width: 90%;
		height: 100px;
	}		
`

export const Link= styled(Linked)`
	color: white;
	text-decoration: none;
`

export const SectionContainerPathImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 90vh;	
	@media (max-width: 500px) {
		display: none;	
	}
`

export const Image = styled.img`
	width: 95%;
	height: auto;
	@media (max-width: 500px) {
		width: 90vw;
		height: 100%;	
	}
`

export const SectionContainer = styled.div`
	display: flex;
	align-items: center;	
	width: 90%;
	height: 160vh;
	color: white;
	flex-direction: column;	  
	padding: 1% 5%;
    background-color: ${props => props.color === "true" ? "#3B4956" : "#212930"};
    @media (max-width: 500px) {
		padding: 1% 4%;	
		width: 92%;
		height: auto;
	}
    
`

export const SectionContainerTitle = styled.div`
	display: flex;
	align-items: center;	
	width: 100%;
	height: 10vh;	
	justify-content: ${props => props.align === 'left' ? "start" : "end"};	
`

export const SectionSubtitle = styled.h3`
	margin: 15px;
	font-size: 35px;
	@media (max-width: 500px) {
		font-size: 25px;
	}	
`

export const SectionContainerContent = styled.div`
	display: grid;
	width: 100%;
	height: 140vh;
	align-items: center;
	justify-content: center;
	grid-template-columns: repeat(3, 1fr);
	@media (max-width: 500px) {
		grid-template-columns: repeat(2, 1fr);
		height: auto;
	}
`

export const SectionContainerContentProyects = styled.div`
	display: grid;
	width: 100%;
	height: 140vh;
	align-items: center;
	justify-content: center;
	grid-template-columns: repeat(2, 1fr);
	@media (max-width: 500px) {
		grid-template-columns: repeat(1, 1fr);
		height: auto;
	}
`

export const LastSection = styled.div`
	display: flex;		
	width: 100%;
	height: 95vh;
	color: white;
	background-color: ${props => props.color === "true" ? "#3B4956" : "#212930"};
	@media (max-width: 500px) {
		flex-direction: column;
		height: 100vh;
	}
`

export const LastSectionContainer = styled.div`
	width: 35%;
	height: 90%;		
	margin: auto;		
	border-radius: 4px;
	background-color: #273139;
	box-shadow: -15px -15px #1A2026;
	color: white;
	@media (max-width: 500px) {
		width: 92%;
		box-shadow: -5px -5px #1A2026;
		height: 45%;		
	}
`

export const LastSectionContainerTitle = styled.div`
	width: 100%;
	height: 10%;	
	margin: 20px auto 50px auto;
	text-align: center;
	@media (max-width: 500px) {
		width: 100%;		
		font-size: 20px;
		margin: 10px auto 20px auto;
	}
`

export const LastSectionContainerContent = styled.ul`
	width: 80%;
	height: 80%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin: auto;		
	@media (max-width: 500px){
		grid-gap: 10px 30px;
		
	}
`

export const LastSectionList = styled.li`
	width: auto;
	text-align: left;
	font-size: 20px;	
	@media (max-width: 500px) {		
		font-size: 16px;	
		width: 100%;	
	}
`