import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App.jsx'
import Home from './home/Home.jsx'
import About from './about/About.jsx'

ReactDom.render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='about' component={About} />
		</Route>
	</Router>
), document.getElementById('app'))