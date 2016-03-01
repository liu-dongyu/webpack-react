import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

import 'normalize.css'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					{this.props.children}
				</div>
				<Footer />
			</div>
		)
	}
}