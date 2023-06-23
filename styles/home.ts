import styled from 'styled-components';

//import image from '../../public/images/wallpaper.jpg'

export const Container = styled.div` 
	width: 90%;
	height: auto;
	padding: 0 5%;
	background-color: #14181D;
	color: white;
	@media (max-width: 800px) {
		width: 100%;
		padding: 0; 
		margin: 0;
	}
`
export const BodyContainer = styled.div` 
	width: 100%;
	height: auto;
` 

export const SectionContainerPath = styled.div`
	display: flex;	
	//background-color: #3B4956;
	background-image: url("/images/wallpaper.jpg");
	width: 100%;
	height: 100vh;
	color: white;
	align-items: center;
	justify-content: center;
	position: relative;
	z-index: 100;
	@media (max-width: 800px) {
		display: flex;	
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 500px;
	}
`

export const SectionContainerPathTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;	
	justify-content: center;
	width: 45%;
	height: 100%;
	font-size: 100px;
	z-index: 100;	
	@media (max-width: 800px) {
		width: 90%;
	}
`

export const WeAre = styled.div`
	background-color: #273139;
	width: 65%;
	height: auto;
	color: white;
	padding: 5% 5%;
	box-shadow: -30px -30px #1A2026;
	text-align: center;	
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;	
	border-radius: 2px;
	@media (max-width: 800px) {
		display: flex;	
		width: 70%;
		height: auto;
		flex-direction: column;		
		box-shadow: -15px -15px #1A2026;
		justify-content: space-evenly;		
	}

`

export const WeAreTitle= styled.h1`
	font-size: 27px;	
	text-align: left;
	margin: 10px 0;
	@media (max-width: 800px) {		
		display: none;		
	}
`

export const WeAreWho= styled.p`
	font-size: 20px;
	text-align: left;	
	margin: 30px 0;
	@media (max-width: 800px) {
		font-size: 18px;				
		margin: 15px 0;
	}	
`

export const DownloadButton= styled.a`	
	background-color: transparent;
	color: white;	
	border: 1px solid white;
	padding: 10px 10px;
	border-radius: 4px;
	font-size: 18px;
	text-decoration: none;
	cursor: pointer;
	margin: 10px 0;
`

export const WeAreImage = styled.div`
	display: none;
	@media (max-width: 800px) {
		display: flex;
		width: 200px;
		height: 200px;
		margin: 0 auto;
	}		
`

export const Name= styled.h1`
	color: white;
	text-decoration: none;
	font-size: 30px;
`

export const SectionContainerPathImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 45%;
	height: 100%;	
	z-index: 100;
	@media (max-width: 800px) {
		display: none;	
	}
`

export const Figure = styled.div`
	width: 80%;
	height: 80vh;		
	position: relative;	
	@media (max-width: 800px) {
		width: 100%;
		height: 100%;	
	}
`
export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`
interface Props {
	tcolor: boolean
}

export const SectionContainer = styled.div<Props>`
	display: flex;
	align-items: center;	
	width: 90%;
	height: auto;
	color: white;
	flex-direction: column;	  
	padding: 1% 5%;	
    background-color: ${props => props.tcolor ? "#3B4956" : "#212930"};
    @media (max-width: 800px) {
		padding: 1% 4%;	
		width: 92%;
		height: auto;
	}
    
`

export const SectionContainerTitle = styled.div`
	display: flex;
	align-items: center;	
	width: 100%;
	height: 10vh;		
	justify-content: center;
	margin: 40px 0 20px 0;
`

export const SectionSubtitle = styled.h2`
	margin: 15px;
	font-size: 35px;
	color: white;
	@media (max-width: 800px) {
		font-size: 25px;
	}	
`

export const SectionContainerContent = styled.div`
	display: block;
	width: 100%;
	height: auto;
	@media (max-width: 800px) {
		height: auto;
	}
`

export const SectionContainerContentDescription = styled.div`
	display: block;
	width: 70%;
	height: auto;
	margin: 0 auto;
	@media (max-width: 800px) {		
		width: 90%;	
	}
`
export const SectionContainerContentDescriptionTitle = styled.h4`	
	font-size: 25px;
	color: white;
`
export const SectionContainerContentDescriptionInformation = styled.div`
	display: block;
`
export const ParagraphDescription = styled.p`
	margin: 20px 0;
	font-size: 17px;	
  	line-height: 1.3;  	
`

export const Span = styled.span`
	font-weight: 1000;
`

export const Blogs = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	@media (max-width: 800px) {		
		grid-template-columns: 1fr;
	}
`

export const Background = styled.div`

`