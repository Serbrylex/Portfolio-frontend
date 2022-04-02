import styled from 'styled-components'
import { Link as Linked } from 'react-router-dom'

export const TopicsSection = styled.div`
	width: 100%;
	height: 50px;
	margin: 10px 0;
`

export const TopicsUl = styled.ul`	
	width: 95%;
	height: auto;	
	display: flex;	
	justify-content: center;	
	align-items: center;
	@media (max-width: 500px) {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}
`

export const TopicList = styled(Linked)`
	box-shadow: -5px -5px #1A2026;
	border: 1px solid black;
	padding: 2px 5px;
	margin: 5px;
	border-radius: 5px;
	text-decoration: none;
`