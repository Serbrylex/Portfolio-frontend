import styled from 'styled-components'

export const LastSection = styled.div`
	display: grid;		
	width: 100%;
	height: auto;
	color: white;
	padding-top: 10vh;
	background-color: ${props => props.color === "true" ? "#3B4956" : "#212930"};
	grid-template-columns: repeat(2, 1fr);	
	@media (max-width: 1000px) {
		grid-template-columns: 1fr;	
		height: auto;
	}
`

export const LastSectionContainer = styled.div`
	width: 90%;
	height: auto;		
	margin: 30px auto;		
	padding: 10px 0;
	border-radius: 4px;
	background-color: #273139;
	box-shadow: -15px -15px #1A2026;
	color: white;	
	@media (max-width: 2000px) {		
		box-shadow: -5px -5px #1A2026;
		height: auto;		
	}
`

export const LastSectionContainerTitle = styled.div`
	width: 100%;
	height: 50px;	
	margin: 20px auto;
	text-align: center;
	color: white;
	@media (max-width: 800px) {
		width: 100%;		
		font-size: 20px;
		margin: 10px auto 20px auto;
	}
`

export const LastSectionContainerContent = styled.ul`
	width: 95%;
	height: auto;
	display: grid;
	margin: 0 auto;	
	grid-template-columns: repeat(2, 1fr);
	@media (max-width: 800px){

	}
`

export const LastSectionList = styled.li`
	display: flex;
	align-items: center;
	justify-content: start;

	width: 85%;
	height: auto;

	text-align: left;
	font-size: 17px;	
	background-color: #3B4956;
	border-radius: 2px;
	margin: 5px auto;
	padding: 10px;
	@media (max-width: 800px) {
		font-size: 16px;			
	}
`

export const IconContainer = styled.i`
	margin-right: 10px;
	color: white;
`

export const SectionSubtitle = styled.h2`
	margin: 15px;
	font-size: 35px;
	color: white;
	@media (max-width: 800px) {
		font-size: 25px;
	}	
`