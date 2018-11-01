import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
class SigninForm extends Component {
    render() {
        const {className} = this.props;
        return (
            <div className={`${className} sign-in-form`}>
                
            </div>
        )
    }
}

SigninForm = reduxForm ({
    form: 'SigninForm'
})(SigninForm);

export default SigninForm;