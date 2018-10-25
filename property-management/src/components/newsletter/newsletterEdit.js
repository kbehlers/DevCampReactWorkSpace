import React, { Component } from 'react';
import NewNewsletterForm from './newsletterNewForm';

class EditNewsletter extends Component {
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
    componentDidMount() {
        //
        console.log(this.props.match.params.id);
    }
    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)} title='Edit Newsletter'/>
            </div>
        )
    }
}
export default EditNewsletter;