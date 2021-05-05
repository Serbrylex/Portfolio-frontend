
import styled from 'styled-components'

import { Link } from 'react-router-dom'


export const Container = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: start;
	justify-content: end;
`

export const Button = styled(Link)`
	color: white;
	display: flex;
	width: auto;
	align-items: center;
	justify-content: space-between;
	background-color: ${props => props.color === "true" ?  "#212930": "#3B4956"};
	padding: 5px 10px;
	text-decoration: none;
	border-radius: 5px;
`