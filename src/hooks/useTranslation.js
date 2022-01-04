import { useState, useEffect } from 'react'

// Translations
import espanol from "../assets/translations/es.json"
import english from "../assets/translations/en.json"

export const useTranslation = ({ container = '', component = '' }) => {
	const [loading, setLoading] = useState(true)
	const [language] = useState(()=>{
		// By default is
		let languageShort = navigator.language || navigator.userLanguage	
		if (languageShort.includes('es')) {
			return 'es'
		}
		return 'en'
	})
	const [words, setWords] = useState({})

	useEffect(()=>{		
		let data = language === 'en' ? english : espanol
		let response = undefined
		
		
		if (container.length > 0) {
			response = data.containers[container]
		} else if (component.length > 0) {
			response = data.components[component]
		}
		
		setWords(response)
		setLoading(false)
	},[])

	return {words, loading}
}