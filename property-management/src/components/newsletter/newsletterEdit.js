import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import EditNewsletterForm from './newsletterEditForm';

class EditNewsletter extends Component {
    onSubmit = (fields) => {
        this.props.history.push('/dashboard');
    }
    onCancel = (fields) => {
        this.props.history.push('/dashboard');
    }
    componentDidMount() {
        this.props.fetchNewsletterWithId(this.props.match.params.id);
    }
    render() {
        return (
            <div className='new-newsletter'>
                <EditNewsletterForm 
                onCancel={() => this.onCancel()} 
                onSubmit={(event) => this.onSubmit(event)} 
                formTitle='Edit Newsletter' 
                fieldOneTitle="Newsletter Title"
                fieldTwoTitle="Newsletter Body"
                />
            </div>
        )
    } 
}

export default connect(null, actions)(EditNewsletter);