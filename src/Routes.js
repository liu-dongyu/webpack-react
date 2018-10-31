import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './pages/Index/Index';
import NotMatch from './pages/NotMatch/NotMatch';

function Root() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/index" exact component={Index} />
        <Route component={NotMatch} />
      </Switch>
    </Router>
  );
}

export default Root;
