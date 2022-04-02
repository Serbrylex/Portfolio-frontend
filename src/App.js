import React from 'react'
import { GlobalStyles } from './assets/styles/GlobalStyles'
import Routes from './routes'
import TokenProvider from './context/tokens/Provider'

export const App = () => {

  return (
    <TokenProvider>
      <GlobalStyles />
      <Routes/>
    </TokenProvider>
  )
}

export default App
