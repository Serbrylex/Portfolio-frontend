import styled from 'styled-components'

import { Link as Linked } from 'react-router-dom'

export const ProyectContainer = styled.div`
	display: flex;
	width: 40vw;
	height: 40vh;
	margin: auto;
	color: white;
	font-size: 20px;	
	@media (max-width: 500px) {
		background-color: #212930;			
		width: 100%;
		height: 40vh;
		margin: 10px 0;	
		border-radius: 5px;
	}
` 

export const ImageDataContainer = styled.div`
	display: block;
	position: relative;
	width: 20vw;
	height: 40vh;
	@media (max-width: 500px) {
		background-color: #212930;			
		width: 50%;
		height: 40vh;
	}
`

export const DataImage = styled.div`
	position: absolute;
	z-index: 2;
	width: 100%;
	height: 40vh;	
	top: 0;
	bottom: 0;
	rigth: 0;
	left: 0;
	color: white;
	background: rgba(0, 0, 0, 0.6);
	display: ${props => props.show === 'true' ? 'flex' : 'none'};
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	text-align: center;
	@media (max-width: 500px) {
		background: rgba(0, 0, 0, 0.6);			
		width: 98%;
		height: 98%;		
		display: flex;
		font-size: 18px;
		padding: 1%;
	}

`

export const Image = styled.img`
	width: 100%;
	height: 40vh;
	position: absolute;
	z-index: 1;
	top: 0;
	bottom: 0;
	rigth: 0;
	left: 0;	
	@media (max-width: 500px) {		
		border-radius: 5px 0 0 5px;
	}
`

export const ProyectInformation = styled.div`
	width: 20vw;
	height: 40vh;
	padding: 0 0 0 30px;	
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: space-evenly;

	font-size: ${props => props.focus === 'true' ? '18px' : '16px'};

	@media (max-width: 500px) {
		width: 46%;
		height: 100%;
		padding: 0 0 0 2%;	
		font-size: 16px;
	}
`

export const Title = styled.h4`
	font-size: 1.5em;	
	@media (max-width: 500px) {
		font-size: 1.2em;	
	}
`

export const ToolsTitle = styled.h5`
	font-size: 1.7em;
	color: #bec5cb;
	@media (max-width: 500px) {
		font-size: 1em;	
	}
`

export const Tools = styled.div`
	padding-left: 1.2em;
	color: #bec5cb;
	@media (max-width: 500px) {
		font-size: 1em;	
	}
`

export const Element = styled.li`
	font-size: 1em;
	@media (max-width: 500px) {
		font-size: 0.8em;	
	}
`

export const Links = styled.div`
	width: 15vw;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1em;
	@media (max-width: 500px) {
		font-size: 0.8em;
		width: 100%;	
		justify-content: space-evenly;
	}
`

export const Ancor = styled.a`
	color: white;
	text-decoration: none;
`

export const Link = styled(Linked)`
	color: white;
	text-decoration: none;
`