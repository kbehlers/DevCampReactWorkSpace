import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import EditNewsletterForm from './newsletterEditForm';

class EditNewsletter extends Component {
    onSubmit = (fields) => {
        const { title, body, image } = fields;

        var formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('image', image);

        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        this.props.editNewsletter(this.props.match.params.id, formData, () => {
            this.props.history.push('/dashboard');
        })
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