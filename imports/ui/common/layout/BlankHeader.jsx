import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { List, ListItem } from 'material-ui/List';
import MaterialDesignIcons from 'material-design-icons';
import FontIcon from 'material-ui/FontIcon';
var FontAwesome = require('react-fontawesome');

export default class BlankHeader extends React.Component {
    componentDidMount() {        
        $(".search-holder .fa-search").click(function () {
            $('input').toggleClass("open");
        });       
    }
    render() {
        return (
            <div className="main-header">
                <div className="cmn-flex left">
                    <MuiThemeProvider>
                        <List className="logo-block-rct">
                            <ListItem linkbutton="true" containerElement={<Link to="/" />} >
                                <span className="main-logo">
                                    <img src="/frImages/fieldrepo-logo.png" />
                                </span>
                                {/* <span className="client-logo">
                                    <img src="/images/client-logo.png" />
                                </span> */}
                            </ListItem>
                        </List>
                    </MuiThemeProvider>                   
                </div>
                <div className="cmn-flex middle">
                    <div className="time-hldr">
                        <p>04 Nov 2017</p>
                        <p>5:15 PM</p>
                    </div>
                   
                </div>
                <div className="cmn-flex right">
                   
                </div>               
           
            </div>
        )
    }
}