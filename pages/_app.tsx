import { AppProps } from 'next/app'
import '../global.css'

import Layout from '@components/Layout'

import { Provider } from 'react-redux'
import store from '@reducers/rootReducer'

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
