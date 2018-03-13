import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import Authenticated from '../Authenticated/Authenticated';
import App from '../ui/App'
const browserHistory = createBrowserHistory();
import createBrowserHistory from 'history/createBrowserHistory';
function AlreadyLoggedIn(nextState, replace, callback) {
  // const token = localStorage.getItem('token');
  // if (token) {
  //   replace('/');
  // }
  return callback();
}

const Routers = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
    {/* <IndexRoute  component={App} /> */}
    </Route>
  </Router>
);



export default Routers;
