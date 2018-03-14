import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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
  <BrowserRouter>
  <div>
    <Route exact path="/" render={props =><App {...props}/>}/>
    <Route exact path="/App" render={props =><App {...props}/>}>
    {/* <IndexRoute  component={App} /> */}
    </Route>
    </div>
  </BrowserRouter>
);



export default Routers;
