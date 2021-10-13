import { useState } from 'react'

import TokenContext from './index'
import apiCall from '../../api'

const TokenProvider = ({ children }) => {
	
	const [isAuth, setIsAuth] = useState(() => {		
		const cookie = window.sessionStorage.getItem('token')		
		if (cookie === undefined || cookie === null){
			return false
		} else {
			return JSON.parse(cookie)
		}
	})
	

	const value = {
		isAuth,
		setIsAuth,
		activeAuth: async ({ body, urlDirection}) => {
			try{			
				
				let response = await apiCall({ 
					urlDirection, 
					method: "POST", 
					headers:  {
						'Content-Type': 'application/json',
					}, 
					body
				})

				let newAuth = {}

				const data = await response.json()
				newAuth = {
					...data,
					isAuth: response.ok
				}				
				setIsAuth(newAuth)					
				window.sessionStorage.setItem('token', JSON.stringify(newAuth))

				return newAuth

			}catch(error){
				console.log(error)		
			}
		},
		removeAuth: async () => {
			try{			
				await apiCall({ 
					urlDirection: 'user/logout/', 
					method: 'DELETE', 
					headers: {
						'Authorization': `Token ${isAuth.access_token}`,
						'Content-Type': 'application/json'
					} 					
				})				
				window.sessionStorage.removeItem('token')
				setIsAuth(false)				
			}catch(error){
				console.log(error)		
			}
		}
	}

	return(
		<TokenContext.Provider value={value} >
			{ children }
		</TokenContext.Provider>
	)
}

export default TokenProvider