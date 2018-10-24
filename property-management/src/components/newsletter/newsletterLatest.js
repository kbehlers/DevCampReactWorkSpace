import React, { Component } from 'react';
import Button from '../button';


class NewsletterLatest extends Component {

    handleEdit = () => {
        this.props.history.push('/newsletter/edit')
    }
    render() {
        const { title, imageUrl, body } = this.props;
        return (
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest__title'>{title}</h1>
                <img src={imageUrl} alt="" className="newsletter-latest__image"/>
                <Button className='newsletter-latest__button' callback={() => this.handleEdit()} icon='fas fa-pencil-alt'/>
                <div className="newsletter-latest__body">
                    <p>
                        {body}
                    </p>

                </div>
            </div>
        )
    }
}

export default NewsletterLatest;