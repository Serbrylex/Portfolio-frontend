import { useState, useEffect } from 'react'

// Translations
import espanol from "@public/translations/es.json"
import english from "@public/translations/en.json"

export const useTranslation = ({ container = undefined, component = undefined }: { container: string | undefined, component: string | undefined }) => {
	const [loading, setLoading] = useState(true)
	const [language] = useState(()=>{
		// By default is
		let languageShort: string | undefined = typeof navigator !== 'undefined' ? navigator.language : undefined;	
		if (typeof languageShort === "string" && languageShort.includes('es')) {
			return 'es'
		}
		return 'en'
	})
	const [words, setWords] = useState({})

	useEffect(()=>{		
		let data = language === 'en' ? english : espanol;
		let response: object = {};
		
		
		if (typeof container !== 'undefined' && container.length > 0) {
			response = data.containers[container]
		} else if (typeof component !== 'undefined' && component.length > 0) {
			response = data.components[component]
		}
		
		setWords(response)
		setLoading(false)
	},[])

	return {words, loading}
}