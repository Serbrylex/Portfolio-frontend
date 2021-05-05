import { useHistory  } from 'react-router-dom'
import { useContext } from 'react'

import {
	Contaier, LoginContainer, Input, Button, Title
} from './style'

import { useInputValue } from '../../hooks/useInputValue'

import TokenContext from '../../context/tokens'
import apiCall from '../../api'

const Login = () => {

	const user = useInputValue('')
	const password = useInputValue('')
	const history = useHistory()

	const { getToken, token } = useContext(TokenContext)

	const handleLogin = () => {
		getToken({
			urlDirection: 'login/', 
			method: 'POST', 
			headers: {
				'Content-Type': 'application/json',				
			},
			body: JSON.stringify({
				username: user.value,
				password: password.value
			})
		}).catch(null)		
 
		history.push("/")
	}

	return(
		<Contaier>			
			<LoginContainer>				
				<Title>Login @Serbrylex</Title>			
				<Input type="text" placeholder="Username" {...user} />
				<Input type="password" placeholder="Password" {...password} />
				<Button onClick={handleLogin}>Sign in</Button>			
			</LoginContainer>
		</Contaier>
	)
}

export default Login