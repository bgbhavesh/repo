import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

export default class LoginPage extends React.Component{
    componentDidMount(){
        //floating labels
        $('.floating-labe1 .form-control').on('focus blur', function (e) {
            $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
        }).trigger('blur');
        $('.floating-labe1 .form-control').focus(function () {
            $(this).data('placeholder', $(this).attr('placeholder'))
                .attr('placeholder', '');
        }).blur(function () {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    }
    render(){
        return(
            <div className="login-container">
             <div className="login-sec">
                 <div className="login-top">
                 Log In
                 </div>
                <div className="login-body">
                    <div className="floating-labe1">
                        <div className="form-group">
                            <span><i className="fa fa-user"> </i> </span>
                            <label className="control-label">Username </label>
                            <input type="text" className="form-control" placeholder="Username"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Password </label>
                            <input type="text" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="fpwd">
                            <a href="#">Forgot Password? </a>
                        </div>
                    </div>
                    <div className="login">
                        <a href="/">Login</a>
                        {/*<button type="submit">Login</button>*/}
                    </div>
                    <div className="sign-up">
                        <span>Don't have an account?</span>
                        <a href="Signup">Sign up</a>
                    </div>
                </div>
             </div>
            </div>
        )
    }

}