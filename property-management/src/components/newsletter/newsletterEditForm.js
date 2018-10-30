import React, { Component } from 'react';
import {connect} from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { FormTitle } from '../formTitle';
import {FormInput, FormButton, FormTextArea, FormImage} from '../formFields';
 
class EditNewsletterForm extends Component { 

    render() {
        
        const { handleSubmit, formTitle} = this.props;
        const {fieldOnePlaceholder, fieldOneTitle } = this.props;
        const {fieldTwoPlaceholder, fieldTwoTitle } = this.props;
        
        
        return (
            <form onSubmit={handleSubmit} className='new-newsletter-form'>
                <FormTitle className='new-newsletter-form__title' text={formTitle}></FormTitle>
                <Field className='new-newsletter-form__newsletter-title' placeholder={fieldOnePlaceholder} component={FormInput} name='title' type='text' title={fieldOneTitle} />
                <Field className='new-newsletter-form__body' placeholder={fieldTwoPlaceholder} component={FormTextArea} name='body' type='text' title={fieldTwoTitle}  />
                <Field className='new-newsletter-form__submit' small={true} danger={true} component={FormButton} name='submit' type='submit' title="Submit"/>
                <Field className='new-newsletter-form__cancel' small={true} danger={false} component={FormButton} name='cancel' type="button" title="Cancel" onClick={this.props.onCancel} />
                <Field className='new-newsletter-form__image' component={FormImage} name='image' type='file' title="Image"/>

            </form>
        )
    }
}

EditNewsletterForm = reduxForm({
    form: 'editnewsletter',
    enableReinitialize: true
})(EditNewsletterForm);

function mapStateToProps(state) {
    const {newsletterToEdit} = state.newsletters;
    return {
        initialValues: newsletterToEdit
    }
}

EditNewsletterForm = connect(mapStateToProps)(EditNewsletterForm);

export default EditNewsletterForm;