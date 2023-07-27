import { AppProps } from 'next/app'
import Head from 'next/head'
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
      <Head>
          <meta
						name="keywords"
						content="Portafolio, Sergio Bryan Madrid Nuñez, Serbrylex, Blog Tech"
					/>
					<meta name="author" content="Sergio Bryan Madrid Nuñez" />
					<meta property="og:url" content="https://serbrylex.com/" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Serbrylex Portafolio " />
					<meta property="og:image" content="images/MyPortafolio.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>    
    </Provider>
  )
}

export default MyApp
