import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import Routes from './routes'
import TokenProvider from './context/tokens/Provider'

const url = 'https://portafolioserbrylex.herokuapp.com'

export const App = () => {

  return (
    <TokenProvider>
      <GlobalStyles />
      <Routes url={url}/>
    </TokenProvider>
  )
}

export default App
