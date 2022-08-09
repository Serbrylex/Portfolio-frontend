import { createStore, compose, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'

// Reducers
import userReducer from './user'
import preferenceReducer from './preferences'


const rootReducer = combineReducers({	
	preferences: preferenceReducer,	
	user: userReducer
})



declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const wich = typeof window !== "undefined" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : undefined;
const composeEnhancers = wich || compose;

const store = createStore(
  rootReducer,
  composeEnhancers() 
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store