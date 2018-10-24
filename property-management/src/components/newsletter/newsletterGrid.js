import React, { Component } from 'react';
import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';

class NewsletterGrid extends Component {

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
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                <NewsletterLatest {...latest}/>
            </div>
        )
    }
}
export default NewsletterGrid;