import React from 'react';  
import { render } from 'react-dom';  
import { Provider } from 'react-redux'  
import { createStore, applyMiddleware } from 'redux';  
import thunk from 'redux-thunk';
import Routers from '../imports/Routers/routes';

import './main.html';  
import appReducer from '../imports/ui/reducers'; // need to create  
import App from '../imports/ui/App'; // need to create

const store = createStore(appReducer, applyMiddleware(thunk));

Meteor.startup(() => {  
  render(
    <Provider store={store}>
     <Routers/>
    </Provider>,
    document.getElementById('app')
  );
});

