import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Wechat from './wechat/Wechat';
import Err404 from './err/Err404';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Wechat} />
      <Route path="/*" component={Err404} />
    </Route>
  </Router>,
  document.getElementById('app')
);
