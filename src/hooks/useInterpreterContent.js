import React, { useState, useEffect } from 'react'

const useInterpreterContent = ({ content }) => {

	const [loading, setLoading] = useState(true)
	const [elements, setElements] = useState([])

	const interpretaText = (content) => {
		const data = content.split('\n')

		/*
			Cases:
				+ 'S.'
				+ 'P.'
				+ 'Code.'
					...
				+ 'Code.'
				+ ''
		*/
	}

	useEffect(()=>{
		if (content.length > 0) {
			interpretaText(content)
		}
	}, [content])

	return { elements, loading }
}