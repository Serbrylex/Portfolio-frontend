import { useState } from 'react'

import TokenContext from './index'
import apiCall from '../../api'

const TokenProvider = ({ children }) => {

	const [token, setToken] = useState([])	
	
	const getToken = async ({ urlDirection, method = "POST", headers, body }) => {
		try{			
			const tokenResult = await apiCall({ urlDirection, method, headers, body })		
			console.log(tokenResult)	
			setToken(tokenResult)
		}catch(error){
			setToken([])
			console.log(error)
		}
	}

	return(
		<TokenContext.Provider value={{ 
			token, 
			getToken
		}} >
			{ children }
		</TokenContext.Provider>
	)
}

export default TokenProvider