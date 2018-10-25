import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormTitle } from '../formTitle';
import {FormInput, FormButton, FormTextArea, FormImage} from '../formFields';
import TextLink from '../textLink';
 
class NewNewsletterForm extends Component { 
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit} className='new-newsletter-form'>
                <FormTitle className='new-newsletter-form__title' text='New Newsletter'></FormTitle>
                <Field className='new-newsletter-form__newsletter-title' placeholder='Service Request Title Here' component={FormInput} name='title' type='text' title="Newsletter Title" />
                <Field className='new-newsletter-form__body' placeholder='Service Request Description (Here)' component={FormTextArea} name='body' type='text' title="Body" />
                <Field className='new-newsletter-form__submit' small={true} danger={true} component={FormButton} name='submit' type='submit' title="Submit"/>
                <Field className='new-newsletter-form__cancel' small={true} danger={false} component={FormButton} name='cancel' type="button" title="Cancel" onClick={this.props.onCancel} />
                <Field className='new-newsletter-form__image' component={FormImage} name='image' type='file ' title="Image" />

            </form>
        )
    }
}

NewNewsletterForm = reduxForm({

    form: 'signin'
})(NewNewsletterForm);

export default NewNewsletterForm;