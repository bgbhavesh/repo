import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
const browserHistory = createBrowserHistory();
import createBrowserHistory from 'history/createBrowserHistory';

/////////////// basic end
import Authenticated from '../Authenticated/Authenticated';
///////// loging criteria
function AlreadyLoggedIn(nextState, replace, callback) {
  // const token = localStorage.getItem('token');
  // if (token) {
  //   replace('/');
  // }
  return callback();
}
///////////login criteria
/////////////////////////containers
import App from '../ui/App'
/////////////////////////containers
///////////////////////////////layout
import BlankHeader from '../ui/common/layout/BlankHeader';
import {BasicLayout} from '../ui/common/layout/BasicLayout';
///////////////////////////////layout


////////////////////// Routers
const Routers = (props) => (
  <BrowserRouter>
  <div className="">
    <BasicLayout path='/test' component={App}/>
    <Route exact path="/" render={props =><App {...props}/>}/>
    <Route exact path="/App" render={props =><App {...props}/>}>
    {/* <IndexRoute  component={App} /> */}
    </Route>
    </div>
  </BrowserRouter>
);



export default Routers;
