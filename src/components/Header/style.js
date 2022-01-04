import styled from 'styled-components'

import { Link as Linked } from 'react-router-dom'

export const HeaderContainer = styled.header`
	display: flex; 
	width: 90%;	 
	height: 8vh;
	align-items: center; 
	justify-content: space-between;
	background-color: #07080a;	
	color: white;		
	padding: 1vh 5%;	
	@media (max-width: 500px) {
		padding: 5px 1vw;	
		width: 98vw;		
		height: 5vh;
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
	margin: 0 5px;
	cursor: pointer;
	@media (max-width: 500px) {
		display: none;
	}
`

export const Icons = styled.div`	
	color: white;	
	font-size: 20px;
	display: flex;
	margin: 0 5px;
	@media (max-width: 500px) {		
	}
`

export const Link = styled(Linked)`
	color: white;
	text-decoration: none;	
	display: flex;
	align-items: center;
	width: auto;
	margin: 0 5px;
`

export const Linka = styled.a`
	color: white;
	text-decoration: none;	
	display: flex;
	width: auto;
	margin: 0 5px;
`

export const Logo = styled.img`	
	width: 45px;
	height: 45px;	
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
	font-size: 17px;
	@media (max-width: 500px) {
		
	}
`

export const MyDataDescription = styled.p`
	font-size: 17px;
	@media (max-width: 500px) {
		display: none;		
	}
`

export const ContactList = styled.ul`
	display: flex;
	align-items: center;
	width: auto;
	height: 100%;
	justify-content: space-around;
	@media (max-width: 500px) {
		width: auto%;
	}
`

export const List = styled.li`
	height: auto;
	width: auto;	
`

export const Ancor = styled.a`
	font-size: 30px;
	color: white;	
	cursor: pointer;
	@media (max-width: 500px) {
		font-size: 25px;
		height: 90%;						
	}
`