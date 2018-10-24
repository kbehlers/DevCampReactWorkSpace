import React, { Component } from 'react';
import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';

class NewsletterGrid extends Component {

    handleAddNewsletter = () => {
        this.props.history.push('/newsletter/new');
    }

    render() {
        const latest = {
            _id: '115',
            title: 'Happy Holidays',
            body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum cupiditate, aperiam iure molestias exercitationem accusantium cumque sunt expedita quibusdam totam. Enim doloremque pariatur vero dignissimos, repellat cum atque eos!`,
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'
        }
        return (
            <div className='newsletter-grid'>
                <Button className='newsletter-grid__button' icon='fas fa-plus' callback={()=>this.handleAddNewsletter()}/>
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                <NewsletterLatest history={this.props.history} {...latest}/>
            </div>
        )
    }
}
export default NewsletterGrid;