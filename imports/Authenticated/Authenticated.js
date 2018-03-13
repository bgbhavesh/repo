import React from 'react';  
import { bindActionCreators } from 'redux';  
import { connect } from 'react-redux';

export default function Authenticated (Component){
	class HOC extends React.Component{
		constructor(){
			super();
		}
		render(){
			return (<Component {...this.props} />);
		}
	}
}