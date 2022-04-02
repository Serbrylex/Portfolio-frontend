import {
	SET_FEED, SET_LANGUAGE, SET_THEME, 
	SET_LOGIN, CLOSE_SESSION
} from './type'

export const setFeed = payload => ({
	type: SET_FEED,
	payload
})

export const setLanguage = payload => ({
	type: SET_LANGUAGE,
	payload
})

export const setTheme = payload => ({
	type: SET_THEME,
	payload
})

// User
export const setLogin = payload => ({
	type: SET_LOGIN,
	payload	
})
export const setCloseSession = () => ({
	type: CLOSE_SESSION	
})