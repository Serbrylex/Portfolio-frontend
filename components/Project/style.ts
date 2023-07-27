import styled from 'styled-components'

export const ProyectContainer = styled.div`
	display: flex;
	width: 90%;
	height: auto;	
	color: white;
	font-size: 20px;		
	margin: 20px auto; 
	background-color: #1a2026;
	padding: 3%;
	border-radius: 5px;
	box-shadow: -6px 5px #3B4956;
	border: 1px solid #3B4956;
	@media (max-width: 900px) {
		width: 80%;
		display: block;
		background-color: #212930;		
		border-radius: 5px;
		padding: 10px;
	}
` 

export const ImageDataContainer = styled.div`
	display: block;
	width: 200px;
	height: 250px;
	@media (max-width: 900px) {
		background-color: #212930;							
		width: 100%;
		text-align: center;
	}
`

export const Image = styled.img`
	width: 200px;
	height: 200px;
	object-fit: cover;
	@media (max-width: 900px) {		
		border-radius: 5px;
		margin: 0 auto;
	}
`
export const DateProyect = styled.span`
	font-size: 15px;
`

export const ProyectInformation = styled.div`
	width: 80%;
	height: auto;
	padding: 0 0 0 30px;	
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: space-evenly;	
	font-size: 17px;
	@media (max-width: 900px) {
		width: 100%;
		height: 100%;
		padding: 0;	
		font-size: 16px;
	}
`

export const Title = styled.a`
	font-size: 1.5em;	
	color: white;
	text-decoration: none;
	@media (max-width: 900px) {
		font-size: 1.2em;	
	}
`

export const ToolsTitle = styled.h5`
	font-size: 1.2em;
	color: #bec5cb;	
	margin: 5px 0;
	@media (max-width: 900px) {
		font-size: 1em;	
		margin: 10px 0;
	}
`

export const Tools = styled.div`	
	color: #bec5cb;
	display: flex;
	align-items: center;
	justify-content: start;
	width: 100%;		
	margin: 10px auto;
	@media (max-width: 900px) {
		display: grid;
		grid-template-columns: repeat(3,1fr);
		font-size: 1em;
		padding: 0;
		width: 100%;
		height: auto;
		grid-gap: 5px;
	}
`

export const Element = styled.li`
	font-size: 1em;	
	width: auto;
	height: 20px;
	box-shadow: -5px -5px #1A2026;
	border: 1px solid black;
	padding: 2px 5px;
	margin-right: 10px;
	border-radius: 5px;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;	
`

export const TitleSection = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.5em;
	text-align: right;	
	margin-bottom: 10px;
	@media (max-width: 900px) {
		font-size: 1em;		
	}
`

export const Ancor = styled.a`
	color: white;
	text-decoration: none;
	font-size: 30px;
`

export const ImageLink = styled.a`
	display: inherit;
	width: auto;
	height: auto;	
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Info = styled.p`
	margin: 5px 0 10px 0;
	font-weight: 200;
	line-height: 1.5rem;
`