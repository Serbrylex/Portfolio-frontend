import styled from 'styled-components'

export const HeaderContainer = styled.header`
	display: grid; 
	grid-template-columns: 1fr 1fr 1fr;
	position: sticky;
	top: 0;
	z-index: 101;
	width: 90%;	 
	height: 10vh;	
	background-color: #07080a;	
	color: white;		
	padding: 0 5%;	
	@media (max-width: 800px) {
		padding: 0;	
		width: 100%;		
		height: 7vh;
		grid-template-columns: 20% 60% 20%;	
	}
`

export const HeaderLinksContainer = styled.div`
	display: flex; 
	align-items: center;
	justify-content: start;
	width: auto;
	height: 10vh;
	margin: 0 2%;
	@media (max-width: 800px) {
		width: 100%;
		margin: 0%;
		grid-column: 2 / 3;
		height: 100%;
	}
`

export const PLinks = styled.p`
	margin: 0 5px;
	width: 50px;	
	cursor: pointer;
	text-align: center;	
	@media (max-width: 800px) {
		display: none;
	}
`

export const Link = styled.a`
	color: white;
	text-decoration: none;	
	display: flex;
	align-items: center;
	justify-content: center;
	width: auto;
	margin: 0 auto;
	cursor: pointer;
	@media (max-width: 800px) {
		font-size: 16px;
		margin: 0 auto;
		display: ${props => props.who == 'first' ? 'none' : 'flex' };
	}
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
	@media (max-width: 800px) {
		width: 30px;
		height: 30px;	
		margin: 0 5px;
	}
`

export const MyData = styled.div`
	text-align: center;	
	
`

export const MyDataTitle = styled.h3`
	font-size: 17px;
	@media (max-width: 800px) {
		font-size: 16px;
	}
`

export const MyDataDescription = styled.p`
	font-size: 20px;
	margin: 0 !important;
	@media (max-width: 800px) {		
		font-size: 20px;	
	}
`

export const ContactList = styled.ul`
	display: flex;
	align-items: center;
	width: auto;
	height: 10vh;
	justify-content: space-around;
	@media (max-width: 800px) {
		width: auto;
		height: 100%;
		display: ${props => props.who == 'first' ? 'none' : 'flex' };
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
	@media (max-width: 800px) {
		font-size: 25px;
		height: 90%;						
	}
`

export const Line = styled.div`
	height: 25px;
	width: 0;
	border: 1px solid grey;	
	@media (max-width: 800px) {
		display: none;
	}
`

export const IconContainer = styled.i`	
	color: white;
	display: none;	
	@media (max-width: 800px) {
		display: flex;
		font-size: 20px;
	}	
`