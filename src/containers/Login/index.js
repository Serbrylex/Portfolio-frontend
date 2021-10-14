import { useHistory  } from 'react-router-dom'
import { useContext } from 'react'
import { Helmet } from 'react-helmet'

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

	const { activeAuth } = useContext(TokenContext)

	const handleLogin = async () => {
		await activeAuth({
			urlDirection: 'login/',  
			body: JSON.stringify({
				username: user.value,
				password: password.value
			})
		}).catch(null)		
 
		history.push("/")
	}

	return(
		<Contaier>		
			<Helmet>
                <title>Serbrylex | Admin Login</title>
				<meta name='description' content={`Login of Admin`} />
			</Helmet>	
			<LoginContainer>				
				<Title>Login</Title>			
				<Input type="text" placeholder="Username" {...user} />
				<Input type="password" placeholder="Password" {...password} />
				<Button onClick={handleLogin}>Sign in</Button>			
			</LoginContainer>
		</Contaier>
	)
}

export default Login