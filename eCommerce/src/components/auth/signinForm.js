import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {FormInput, FormButton} from '../formFields';
class SigninForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email'
                    type='email'
                    title='Email'
                    placeholder='Email'
                    name='email'
                    component={FormInput} />
                <Field className='sign-in-form__password'
                    type='password'
                    title='Password'
                    placeholder='Password'
                    name='password'
                    component={FormInput} />
                <Field className='sign-in-form__login'
                    onClick={()=> console.log('trying submit')}
                    type='submit'
                    title='Login'
                    name='login'
                    component={FormButton} />
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'SigninForm'
})(SigninForm);

export default SigninForm;