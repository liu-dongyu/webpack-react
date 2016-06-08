import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './home/Home';
import About from './about/About';
import Err404 from './err/Err404';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/*" component={Err404} />
    </Route>
  </Router>,
  document.getElementById('app')
);
