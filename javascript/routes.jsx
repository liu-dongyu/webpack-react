import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import 'normalize.css'

import reducers from './reducers.js'

import App from './App.jsx'
import Home from './home/Home.jsx'
import About from './about/About.jsx'

const store = createStore(reducers);

const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={Home} />
				<Route path='about' component={About} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);