import styled from 'styled-components'
import Linked from 'next/link'

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
		height: 50vh;
		border-radius: 5px;
		margin: 10px 0;	
		background-color: #2f3a45;
		padding: 0 1%;	
	}
`  

export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;	
	width: 100%;
	height: 25vh;
	align-content: center;
	justify-content: space-evenly;
	@media (max-width: 500px) {		
		width: 96%;
		padding: 0 2%;	
	}
	
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
		font-size: 18px;		
		align-items: start;
	}
` 
export const Link = styled(Linked)`
	color: white;
	text-decoration: none;
	width: 100%;
	height: 100%;
	margin: auto;
	color: white;
	@media (max-width: 500px) {		
		margin: 5px 0;				
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
		font-size: 14px;		
		height: 50%;
	}
`