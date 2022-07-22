import { AppProps } from 'next/app'
import '../global.css'

import Layout from '@components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>    
  )
}

export default MyApp
