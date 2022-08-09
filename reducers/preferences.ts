import { SET_LANGUAGE, SET_THEME } from '../actions/type'

const miStorage: string | null = typeof window !== "undefined" ? window.localStorage.getItem('preference') : null;

type State = {
	language: string,
	theme: string,	
	url: string
}

const initialState: State = miStorage !== null ? JSON.parse(miStorage as string) : {	
	language: 'en',
	theme: 'dark',
	//url: 'http://127.0.0.1:8000'
	url: 'https://portafolioserbrylex.herokuapp.com'
}

const preferenceReducer = (state = initialState, action: TAction) => {
	switch(action.type) {
		case SET_LANGUAGE:
			window.localStorage.setItem('preference', JSON.stringify({ ...state, language: action.payload }))
			return { ...state, language: action.payload }
		case SET_THEME:
			window.localStorage.setItem('preference', JSON.stringify({ ...state, theme: action.payload }))
			return { ...state, theme: action.payload }
		default:
			return { ...state }
	}
}

export default preferenceReducer