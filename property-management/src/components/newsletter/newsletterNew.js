import React, { Component } from 'react';
import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {
    onSubmit = (fields) => {
        console.log('trying to handle submit');
        // if(button == 'submit') {
        //     //TODO perform post to backend
        //     console.log('trying to submit to backend');
        // }
        // this.props.history.push('/dashboard');
    }
    onCancel = (fields) => {
        console.log('trying to handle cancel');
        // if(button == 'submit') {
        //     //TODO perform post to backend
        //     console.log('trying to submit to backend');
        // }
        // this.props.history.push('/dashboard');
    }
    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)} />
            </div>
        )
    }
}
export default NewNewsletter;