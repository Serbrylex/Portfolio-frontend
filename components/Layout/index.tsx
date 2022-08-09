import React, { Fragment } from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'

import { Container } from './style'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {

	return (
		<Fragment>			
			<Container>
				<Header	/>
				{children}				
				<Footer />			
			</Container>
		</Fragment>
	)
}

export default Layout