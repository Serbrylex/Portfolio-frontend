import { useRouter  } from 'next/router'
import Head from 'next/head'

import {
	Contaier, LoginContainer, Input, Button, Title
} from './style'

import { useInputValue } from '@hooks/useInputValue';
import { useAppSelector, useAppDispatch } from '@hooks/useReduxH'

import { setLogin } from '@actions/index';

// Api
import apiCall from '@api' 


const Login = () => {

	const user = useInputValue('')
	const password = useInputValue('')
	const url = useAppSelector(store => store.preferences.url)
	const dispatch = useAppDispatch()

	const history = useRouter()

	const handleLogin = async () => {
		const response = await apiCall({
			url: `${url}/login/`,  
			method: 'post',
			headers:  {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: user.value,
				password: password.value
			})
		}).catch(null)		 		

 		if (response.status === 200) {
 			const data: TUser = await response.json();
			data.isAuth = true;
 			dispatch(setLogin(data))
 		}

		history.push("/")
	}

	return(
		<Contaier>		
			<Head>
                <title>Admin Login</title>				
			</Head>	
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