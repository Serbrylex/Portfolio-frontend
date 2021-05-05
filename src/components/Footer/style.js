import styled from 'styled-components'

export const FooterContainer = styled.div`
	display: flex;	
	align-items: center;
	justify-content: space-between;
	width: 90%;
	height: 6vh; 
	background-color: #07080a;
	padding: 1% 5%;
	@media (max-width: 500px) {
		width: 96%;		
		padding: 1% 2%;
	}
`

export const ContactTitle = styled.h4`
	font-size: 20px;
	color: white;
	width: 50%
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;		
	@media (max-width: 500px) {
		font-size: 18px;		
		width: 40%;
		justify-content: start;		
	}
` 

export const ContactList = styled.ul`
	display: flex;
	align-items: center;
	width: 25%;
	height: 100%;
	justify-content: space-around;
	@media (max-width: 500px) {
		width: 60%;
		justify-content: space-between;
	}
`

export const Ancor = styled.a`
	font-size: 30px;
	color: white;	
`