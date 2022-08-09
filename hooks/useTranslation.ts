import { useState, useEffect } from 'react'

// Translations
import espanol from "@public/translations/es.json"
import english from "@public/translations/en.json"


export const useTranslation = ({ container = '', component = '' }: { container: string, component: string }) => {
	const [loading, setLoading] = useState(true)
	const [language] = useState(()=>{
		// By default is
		let languageShort: string | undefined = typeof navigator !== 'undefined' ? navigator.language : undefined;	
		if (typeof languageShort === "string" && languageShort.includes('es')) {
			return 'es'
		}
		return 'en' 
	})

	interface Ele {
		[key: string]: string | string[]
	}

	const [words, setWords] = useState<Ele>({
		"questions": '',
		"resume": '',
		"topics": '',
		"link": '',
		"subtitle": '',
		"delete_message": '',
		"si": '',
		"no": '',
		"search": '',		
		"whoiam": '',
		"download_cv": '',
		"projects": '',
		"about_me": '',
		"who": '',
		"iam": [],
		"trayectory": '',
		"trayecotry_description": [],
		"tools": '',
		"interestings": '',
		"blogs": '',
		"add_blog": '',
		"upload_image": '',
		"description": '',
		"dificulties": ''
	})

	useEffect(()=>{			
		interface CE {
			[key: string]: Ele
		}

		interface CC {
			[key: string]: CE
		}

		let response: Ele = {};
		let data: CC = language === 'en' ? english : espanol;
		
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