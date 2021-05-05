const apiCall = async ({ urlDirection = '', method = "get", body, headers }) => {	

	const url = 'https://portafolioserbrylex.herokuapp.com/' + urlDirection

	try{

		const response = await fetch(url, {
			method,
			headers,
			body,
		})

		return response.json()
	}catch(error){	
		return Promise.reject(error)
	}

}

export default apiCall