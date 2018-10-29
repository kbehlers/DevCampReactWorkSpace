import React, { Component } from 'react';
import NewNewsletterForm from '..//newsletter/newsletterNewForm';

class NewRequest extends Component {
    onSubmit = (fields) => {
        // if(button == 'submit') {
        //     //TODO perform post to backend
        //     console.log('trying to submit to backend');
        // }
        this.props.history.push('/dashboard');
    }
    onCancel = (fields) => {
        this.props.history.push('/dashboard');
    }
    render() {
        return (
            <div className='new-request'>
                <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)} formTitle='New Request' />
            </div>
        )
    }
}
export default NewRequest;