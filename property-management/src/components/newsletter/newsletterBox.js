import React, {Component} from 'react';

class NewsletterBox extends Component{
    render () {
        const {date} = this.props;
        if(!date) {
            return <div>loading...</div>
        }
        const parsedDate = new Date(date);
        let options = {
            month: 'short',
            year: 'numeric'
        };
        return(
            <div className="newsletter-box">
                <div className='newsletter-box__day'>{parsedDate.getDate()}</div>
                <div className='newsletter-box__month-year'>{parsedDate.toLocaleDateString('en-US', options)}</div>
                <div className="newsletter-box__point"></div>
            </div>
        )
    }
}

export default NewsletterBox;
