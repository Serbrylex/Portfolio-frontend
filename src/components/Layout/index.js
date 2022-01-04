import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { Container } from './style'

const Layout = ({ children, title, subtitle }) => {

	return (
		<Fragment>
			<Helmet>
				{title && <title>@Serbrylex | {title}</title>}
				{subtitle && <meta name='description' content={subtitle}/>}
			</Helmet>						
			<Container>
				<Header	/>
				{children}				
				<Footer />			
			</Container>
		</Fragment>
	)
}

export default Layout