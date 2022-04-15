import styled from 'styled-components'
import { Link as Linked } from 'react-router-dom'

export const Blog = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	background-color: #212930;
	box-shadow: -5px 5px #14181D;
	border-radius: 4px;
	margin: 20px auto;
	color: #3E4348;	
	position: relative;
	@media (max-width: 500px) {
		width: 92%;
		height: 350px;
		margin: 10px 2%;
		display: flex;
		padding: 10px 2%;
	}	
`

export const Image = styled.img`
	width: 90%;
	height: 180px;
	margin: 30px 5%;
	object-fit: cover;
	@media (max-width: 500px) {
		width: 100%;
		height: 160px;
		margin: 10px 0;
	}	
`

export const Link = styled(Linked)`	
	color: white;	
	text-decoration: none;
`

export const Title = styled.h3`
	font-size: 20px;	
	margin: auto;
	width: 90%;
	height: 40px;
	@media (max-width: 500px) {
		font-size: 20px;			
		width: 96%;
		height: 15%;
	}	
`

export const DatePost = styled.time`
	height: 5%;	 
	font-size: 14px;
	color: #606c76;
	margin: 5px 0 5px 10px;
	@media (max-width: 500px) {
		margin: 10px 0 10px 10px;
	}
`

export const Resume = styled.div`	
	height: 136px;		
	font-size: 17px;
	color: #f2f2f2;
	width: 90%;
	margin: 5px auto;
	@media (max-width: 500px) {
		font-size: 16px;	
		margin: auto;
		width: 96%;
		height: auto%;
	}	
`