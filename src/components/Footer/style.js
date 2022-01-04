import styled from 'styled-components'

export const FooterContainer = styled.div`
	display: flex;	
	align-items: center;
	justify-content: space-between;
	height: 8vh; 
	width: 90%;
	background-color: #07080a;
	padding: 1vh 5%;	

	@media (max-width: 500px) {
		width: 100vw;
		height: 5vh; 
		padding: 0;
	}
`

export const ContactTitleLarge = styled.h4`
	display: flex;
	font-size: 20px;
	color: white;
	width: 50%
	height: 100%;	
	align-items: center;
	justify-content: center;		
	@media (max-width: 500px) {
		font-size: 16px;		
		width: 40%;
		justify-content: center;		
		display: none;
	}
`

export const ContactTitleShort = styled.h4`
	display: none;
	font-size: 20px;
	color: white;
	width: 50%
	height: 100%;	
	align-items: center;
	justify-content: center;		
	@media (max-width: 500px) {
		font-size: 16px;		
		width: 40%;
		justify-content: center;		
		display: flex;
	}
` 

export const ContactList = styled.ul`
	display: flex;
	align-items: center;
	width: 30%;
	height: 100%;
	justify-content: space-around;
	@media (max-width: 500px) {
		width: 60%;
		justify-content: space-evenly;
		align-items: end;
		height: auto;
	}
`

export const List = styled.li`
	height: auto;
	width: auto;	
`

export const Ancor = styled.a`
	font-size: 30px;
	color: white;	
	@media (max-width: 500px) {
		font-size: 20px;
		height: 90%;						
	}
`