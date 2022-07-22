import { combineReducers } from 'redux'

// Reducers
import userReducer from './user'
import preferenceReducer from './preferences'


const rootReducer = combineReducers({	
	preferences: preferenceReducer,	
	user: userReducer
})

export default rootReducer