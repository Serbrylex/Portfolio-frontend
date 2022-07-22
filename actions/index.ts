import {
	SET_FEED, SET_LANGUAGE, SET_THEME, 
	SET_LOGIN, CLOSE_SESSION
} from './type'

export const setFeed = (payload: any) => ({
	type: SET_FEED,
	payload
})

export const setLanguage = (payload: any) => ({
	type: SET_LANGUAGE,
	payload
})

export const setTheme = (payload: any) => ({
	type: SET_THEME,
	payload
})

// User
export const setLogin = (payload: TUser) => ({
	type: SET_LOGIN,
	payload	
})
export const setCloseSession = () => ({
	type: CLOSE_SESSION	
})