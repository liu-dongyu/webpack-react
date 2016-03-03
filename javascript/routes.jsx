import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import reducers from './reducers'

import App from './App'
import Home from './home/Home'
import About from './about/About'

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