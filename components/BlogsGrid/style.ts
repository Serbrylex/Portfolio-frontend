import styled, { css } from 'styled-components'

const maxHeigth = '40vh'
const minHeigth = 'auto'

export const BlogsGridContainer = styled.div`
	width: 100%;
	height: auto;
	margin: 1px solid white;			
`

export const GroupOfThree = styled.div`
	width: 100%;
	height: 50vh;
	display: grid;
	grid-template-columns: repeat(3, 1fr);	
	grid-gap: 20px;
	padding: 20px 0;	

	@media (max-width: 800px) {
		grid-template-columns: 1fr;		
		height: ${minHeigth};
		border-bottom: 0;
		padding: 0;
	}
`

export const GroupOfTwo = styled.div`
	width: 100%;
	height: 50vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);	
	grid-gap: 20px;
	padding: 5vh 0;		

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
		height: ${minHeigth};
		border-bottom: none;
		padding: 0;
	}
`

interface Props {
	first_blog: boolean;
}
    

export const BlogContainer = styled.div<Props>`
	width: 100%;
	height: 50vh;
	display: grid;
	grid-template-rows: 50% 48%;
	grid-gap: 2%;
	position: relative;
	margin: 10px 0;
	box-shadow: -5px -5px #1A2026;
	border: 1px solid black;
	border-radius: 5px;

	${props => props.first_blog === true && css`
		width: 100%;
		height: 100%;
		margin: 0;
		grid-template-rows: 1fr;
		grid-template-columns: 55% 40%;
		grid-gap: 5%;		

		@media (max-width: 800px) {								
			width: 100%;
			height: 50vh;
			grid-template-columns: 100% !important;
			grid-template-rows: 50% 48% !important;
			grid-gap: 2%;
			position: relative;			
			box-shadow: -5px -5px #1A2026;
			border: 1px solid black;
			border-radius: 5px;
		}	
	`}		
`

export const ImageContainer = styled.figure<Props>`		
	height: 100%;
	${props => props.first_blog === true && css`						

		@media (max-width: 800px) {		
			grid-column: 1;			
			margin-right: 0;
		}	
	`}	
`

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

export const Information = styled.div`
	width: 96%;
	height: auto;
	padding: 2%;
	font-size: 1rem;
	line-height: 1.3rem;

	& > h3 {
		font-size: 1rem;
	}

	& > p {
		font-size: 1rem;
	}

	& > li {
		font-size: 1rem;
	}
`

export const Title = styled.h2`
	cursor: pointer;
	margin-bottom: 15px;
`

export const Delete = styled.div`	
	cursor: pointer;
	color: #FE5F55;
	width: 30px;
	height: 30px;
	font-size: 3rem;	
	position: absolute;
	top: -15px;
	right: -15px;
	z-index: 2;
	@media (max-width: 800px) {
		top: -10px;
		right: -10px;
	}	
`