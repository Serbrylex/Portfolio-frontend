import styled from 'styled-components'
import { Link as Linked } from 'react-router-dom'

export const BlogDiv = styled.div`
	width: 25vw;
	height: 70vh;			
	color: white;	
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;
	@media (max-width: 500px) {		
		width: 93%;
		height: 45vh;
		border-radius: 5px;
		margin: 10px 0;	
		background-color: #2f3a45;
		padding: 1%;	
	}
`  

export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;	
	width: 100%;
	height: 25vh;
	align-content: center;
	justify-content: space-evenly;
	
`

export const ImageContainer = styled.figure`
	width: 25vw;
	height: 30vh;
	@media (max-width: 500px) {		
		width: 100%;
		height: 20vh;
	}
`

export const Image = styled.img`
	width: 100%;
	height: 100%;	
	@media (max-width: 500px) {				
		border-radius: 5px 5px 0 0;
	}
`

export const Title = styled.h4`
	width: 90%;
	height: 30%;
	font-size: 30px;
	display: flex;
	align-items: center;	 
	@media (max-width: 500px) {		
		width: 100%;
		height: 25%;
		font-size: 20px;		
		align-items: start;
	}
` 

export const DateTime = styled.time`
	height: 10%;
	font-size: 14px;
	color: #606c76;
`

export const Resume = styled.p`
	width: 100%;
	height: 40%;		
	font-size: 20px;
	color: #bec5cb;
	@media (max-width: 500px) {		
		font-size: 16px;		
		height: 50%;
	}
`

export const Link = styled(Linked)`
	color: white;
	text-decoration: none;
	width: 25vw;
	margin: auto;
	color: white;
	@media (max-width: 500px) {		
		margin: 5px 0;
		width: 100%;
		height: 100%;
		font-size: 20px;		
	}
`