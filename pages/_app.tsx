import { AppProps } from 'next/app'
import '../global.css'

import Layout from '@components/Layout'

import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '@reducers/rootReducer'

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

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>    
    </Provider>
  )
}

export default MyApp
