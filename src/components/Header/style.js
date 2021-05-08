import styled from 'styled-components'

import { Link as Linked } from 'react-router-dom'

export const HeaderContainer = styled.header`
	display: flex;
	width: 90%;	
	height: 6vh;
	align-items: center; 
	justify-content: space-between;
	background-color: #07080a;	
	color: white;		
	padding: 1% 5%;	
	@media (max-width: 500px) {
		padding: 1% 2%;	
		width: 96%;
	}
`

export const HeaderLinksContainer = styled.div`
	display: flex; 
	align-items: center;
	justify-content: start;
	width: auto;
	height: auto;	
	margin: 2%;
	@media (max-width: 500px) {
		width: 50%;
		margin: 0%;		
	}
`

export const PLinks = styled.p`
	margin: 0 20px;
	cursor: pointer;
	@media (max-width: 500px) {
		display: none;
	}
`

export const Icons = styled.div`	
	color: white;
	display: none;
	@media (max-width: 500px) {		
		font-size: 20px;
		display: flex;
		margin: 0 5px;
	}
`

export const Link = styled(Linked)`
	color: white;
	text-decoration: none;	
`

export const Linka = styled.a`
	color: white;
	text-decoration: none;	
`

export const Preferences = styled.div`
	display: flex; 
	align-items: center;
	justify-content: end;
	width: 48%;
	height: 98%;	
	margin: 1%;	
	@media (max-width: 500px) {		
		width: 50%;
		margin: 0;		
		color: white;		
		justify-content: space-evenly;
	}	
`

export const Logo = styled.img`	
	width: 50px;
	height: 50px;	
	margin-right: 10px;
	@media (max-width: 500px) {
		width: 30px;
		height: 30px;	
		margin: 0 5px;
	}
`

export const MyData = styled.div`
	
`

export const MyDataTitle = styled.h3`
	@media (max-width: 500px) {
		
	}
`

export const MyDataDescription = styled.p`
	@media (max-width: 500px) {
		display: none;
		
	}
`
