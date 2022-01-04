import React from 'react'
import { GlobalStyles } from './assets/styles/GlobalStyles'
import Routes from './routes'
import TokenProvider from './context/tokens/Provider'

const url = 'https://portafolioserbrylex.herokuapp.com'
//const url = 'http://127.0.0.1:8000'
export const App = () => {

  return (
    <TokenProvider>
      <GlobalStyles />
      <Routes url={url}/>
    </TokenProvider>
  )
}

export default App
