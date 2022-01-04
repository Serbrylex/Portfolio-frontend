import styled from 'styled-components'

import broke from '../../assets/images/broke.jpg'

export const Container = styled.div`
	background-image: url(${broke});
	background-color: #cccccc;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Title = styled.h1`
	color: white;
	background-color: #0099ff;
`