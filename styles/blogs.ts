import styled from 'styled-components'

import Linked from 'next/link'

export const Container = styled.div`
	width: 90%;
	height: auto; 
	padding: 0 5%;
	background-color: #14181D;
	color: white; 
	@media (max-width: 800px) {
		width: 100%;
		padding: 0;		
	}
`

export const BlogsContainer = styled.div`
	width: 90%;
	padding: 20px 5%;	
	border-radius: 2px;
	border: 1px solid black;
	height: auto;	
	background-color: #34414C;

	@media (max-width: 800px) {		
		width: 90vw;		
		padding: 0 2vw;	
		margin: 0 auto;			
	}
`

export const BlogsContainerHeader = styled.div`
	grid-column: 1/4;	
	margin-bottom: 30px;
	text-align: center;	
	@media (max-width: 800px) {
		grid-column: 1/3;
		height: 100px;
	}
`
export const SearchBar = styled.input`
	height: 30px;
	width: 80%;
	margin: 20px auto;
	box-shadow: -5px -5px #1A2026;
	border: 1px solid black;
	padding: 2px 20px;	
	border-radius: 5px;
	text-decoration: none;
	min-width: 200px;
	padding: 5px 10px;
	background-color: #34414C;
	resize: none;
    outline: none;
`

export const BlogsContainerMap = styled.div`
	width: 100%;			
	min-height: 100vh;	
	background-color: #34414C;	

	@media (max-width: 800px) {
		width: 96%;		
		padding: 2%;				
	}
`

export const Blog = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	height: 420px;
	background-color: #3B4956;
	box-shadow: -5px 5px #14181D;
	border-radius: 4px;
	margin: 20px auto;
	color: #3E4348;	
	position: relative;
	@media (max-width: 800px) {
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
	@media (max-width: 800px) {
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
	@media (max-width: 800px) {
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
	@media (max-width: 800px) {
		margin: 10px 0 10px 10px;
	}
`

export const Resume = styled.p`	
	height: 136px;		
	font-size: 17px;
	color: #f2f2f2;
	width: 90%;
	margin: 5px auto;
	@media (max-width: 800px) {
		font-size: 16px;	
		margin: auto;
		width: 96%;
		height: auto%;
	}	
`

interface Props {
	show: boolean
}

export const WindowAlert = styled.div<Props>`

	${(props) => props.show ? 'display: flex' : 'display: none'};
	width: 100vw;
	height: 100vh;
	background-color: rgba(0,0,0,0.8);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 5;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 5px;
`

export const WindowAlertItems = styled.div`
	width: 300px;
	height: 30vh;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
`

export const AlerText = styled.h3`
	color: black;
	font-size: 25px;
	margin: 20px auto;
	text-align: center;
`

export const Buttons = styled.div`
	display: flex;
	width: 50%;
	margin: 20px auto;
	align-items: center;
	justify-content: space-evenly;
	font-size: 20px;
`

export const Acept = styled.button`	
	width: 60px;
	height: 30px;
	background-color: #d33614;	
	border: none;
	border-radius: 5px;
	color: white;
	cursor: pointer;
`

export const Declite = styled.button`
	width: 60px;
	height: 30px;	
	background-color: #3b4956;
	border: none;
	border-radius: 5px;
	color: white;
	cursor: pointer;
`


export const ImageLoading = styled.p`
	width: 50vw;
	height: 50vw;
	margin: auto;
`