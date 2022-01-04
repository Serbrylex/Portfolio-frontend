import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router
} from 'react-router-dom'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from './index'
import TokenContext from '../../context/tokens'


test("Check than when isAuth == true, add blog exist", () => {	

	const data = {
		isAuth: {
			isAuth: true
		}
	}	

	const component = render(
		<TokenContext.Provider value={data} >
			<Router>
				<Header />
			</Router>
		</TokenContext.Provider>
	)
	console.log(component)

	component.getByText('Add blog')
})