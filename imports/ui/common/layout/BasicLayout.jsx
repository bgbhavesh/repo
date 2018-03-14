import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import React from 'react';
import { Route } from 'react-router-dom';

/////////////////////////containers
import BlankHeader from '../layout/BlankHeader'
/////////////////////////containers
export const BasicLayout = ({component: Component, ...rest}) => {
   
    return (
        <Route {...rest} render={matchProps => (
            <div className="main-container theme-dark">
                <BlankHeader/>
                <div className="main-content">
                <Component {...matchProps} />
                </div>
                {/* <Footer /> */}
            </div>
        )} />
    )
};