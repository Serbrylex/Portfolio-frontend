import styled, { css } from 'styled-components'

const maxHeigth = '40vh'
const minHeigth = 'auto'

export const BlogsGridContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 1px solid white;			
`

export const GroupOfThree = styled.div`
	width: 100%;
	height: 50vh;
	display: grid;
	grid-template-columns: repeat(3, 1fr);	
	grid-gap: 20px;
	padding: 20px 0;
	border-bottom: 1px solid white;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;		
		height: ${minHeigth};
		border-bottom: none;
	}
`

export const GroupOfTwo = styled.div`
	width: 100%;
	height: 50vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);	
	grid-gap: 20px;
	padding: 5vh 0;	
	border-bottom: 1px solid white;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
		height: ${minHeigth};
		border-bottom: none;
	}
`

export const BlogContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: 60% 40%;
	position: relative;
	margin: auto 0;

	${props => props.first_blog === true && css`
		width: 100%;
		height: 100%;
		margin: 0;
		grid-template-rows: 1fr;
		grid-template-columns: repeat(3, 1fr);
		padding: 20px 0;
		border-bottom: 1px solid white;

		@media (max-width: 800px) {		
			grid-template-rows: 60% 40%;
			grid-template-columns: 1fr;
		}	
	`}		
`

export const ImageContainer = styled.figure`	
	margin-bottom: 20px;
	${props => props.first_blog === true && css`
		grid-column: 1 / 3;
		margin-right: 20px;
		margin-bottom: 0;

		@media (max-width: 800px) {		
			grid-column: 1;
			margin-bottom: 20px;
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
	width: 100%;
	height: auto;
`

export const Title = styled.h2`
	cursor: pointer;
	margin-bottom: 10px;
`

export const Delete = styled.div`	
	cursor: pointer;
	color: #FE5F55;
	width: 30px;
	height: 30px;
	font-size: 30px;	
	position: absolute;
	top: -15px;
	right: -15px;
	z-index: 2;
	@media (max-width: 800px) {
		top: -10px;
		right: -10px;
	}	
`