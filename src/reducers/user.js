import { SET_LOGIN, CLOSE_SESSION } from '../actions/type'

const miStorage = window.localStorage.getItem('user');

const initialState = JSON.parse(miStorage) || {	
	isAuth: false,
	user: {},
	access_token: null
}

const userReducer = (state = initialState, action) => {	

	switch(action.type) {				

		case SET_LOGIN:			
			window.localStorage.setItem('user', JSON.stringify(action.payload))
			return { ...action.payload }

		case CLOSE_SESSION:
			window.localStorage.clear()
			return { ...initialState }

		default:
			return { ...state }
	}
}

export default userReducer