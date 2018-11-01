import React, { Component } from 'react';
import SignInForm from './signinForm';

class Signin extends Component {
    render() {
        return (
            <div className='sign-in'>
                <SignInForm className='sign-in__form'/>
            </div>
        )
    }
}

export default Signin;