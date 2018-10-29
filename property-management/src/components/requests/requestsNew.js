import React, { Component } from 'react';
import NewNewsletterForm from '..//newsletter/newsletterNewForm';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class NewRequest extends Component {
    onSubmit = (fields) => {
        // if(button == 'submit') {
        //     //TODO perform post to backend
        //     console.log('trying to submit to backend');
        // }
        this.props.createNewRequest(this.props._id, fields, () => {
            this.props.history.push('/dashboard');
        })
        
    }
    onCancel = (fields) => {
        this.props.history.push('/dashboard');
    }
    render() {
        return (
            <div className='new-request'>
                <NewNewsletterForm
                    onCancel={() => this.onCancel()} 
                    onSubmit={(event) => this.onSubmit(event)} 
                    formTitle='New Request' 
                    fieldOneTitle='Service Request Title' 
                    fieldOnePlaceholder='Service Request Title Here' 
                    fieldTwoPlaceholder='Description Here'
                    fieldTwoTitle='Description'
                    />
            </div>
        )
    }
}

function mapStateToProps(state){
    const {_id } = state.auth.user;
    return { _id };
}
NewRequest = connect(mapStateToProps, actions)(NewRequest);
export default NewRequest;