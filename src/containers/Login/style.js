import styled from 'styled-components'

export const Contaier = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #14181d;
` 

export const LoginContainer = styled.div`
	width: 350px;
	height: 50vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	padding: 20px 10px;
	border-radius: 4px;
	background-color: #3b4956;
	color: white;
`

export const Input = styled.input`
	width: 86%;
	height: 20px;	
	font-size: 16px;
	padding: 1% 2%;
	margin: 10px 0;
	border-radius: 2px;
	border: 1px solid black;
	color: black;
`

export const Button = styled.button`
	width: 90%;
	height: 30px;
	font-size: 16px;
	padding: 1% 2%;
	background-color: #273139;	
	border: 1px solid black;
	border-radius: 2px;
	margin: 10px auto;
	color: white;
	cursor: pointer;
`

export const Title = styled.h3`
	margin: 0 0 30px 0;
	font-size: 30px;
`