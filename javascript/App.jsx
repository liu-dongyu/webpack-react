import React from 'react'
import Header from './Header'
import Footer from './Footer'

import 'normalize.css/normalize'
import 'font-awesome/css/font-awesome'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div>
					<i className='fa fa-github'></i>
					{this.props.children}
				</div>
				<Footer />
			</div>
		)
	}
}