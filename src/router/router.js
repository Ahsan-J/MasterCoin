import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from '../pages/app/app.js';
import About from '../pages/about/about.js';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
