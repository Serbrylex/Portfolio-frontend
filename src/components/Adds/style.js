import styled from 'styled-components'

export const AddsContainer = styled.div`
	width: 25%;	
	height: 100vh;
	background-color: #212930;
	border-left: 1px solid black;	
	position: sticky; 
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px 0;
	@media (max-width: 500px){
		position: relative;
		flex-direction: row;
		width: 100%;
		height: 50vh;
	}
`

export const Add = styled.div`
	background-color: #1A2026;
	margin: 10px 0;
	width: 90%;
	height: 40vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;	
	@media (max-width: 500px){		
		width: 45vw;
		height: 45vh;
		border-radius: 5px;
		margin: 10px auto;
	}
`

export const AddImage = styled.img`	
	height: 20vh;
	width: 90%;
	margin: 10px 0;
	@media (max-width: 500px){		
		width: 90%;
		height: 50%;
		margin: 0;
		border-radius: 5px;		
	}
`

export const AddTitle = styled.h4`
	font-size: 20px;
	width: 90%;
	margin: 10px 0;
	@media (max-width: 500px){		
		font-size: 18px;
		margin: 5px 0;
	}
`

export const AddDescription = styled.p`
	font-size: 16px;		
	width: 90%;
	margin: 10px 0;
	@media (max-width: 500px){		
		font-size: 16px;
	}	
`