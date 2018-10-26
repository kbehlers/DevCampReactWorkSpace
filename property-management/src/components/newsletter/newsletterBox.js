import React, {Component} from 'react';

class NewsletterBox extends Component{
    render () {
        const {date} = this.props;
        if(!date) {
            return <div>loading...</div>
        }
        let options = {
            month: 'short',
            year: 'numeric'
        };
        return(
            <div className="newsletter-box">
                <div className='newsletter-box__day'>{date.getDate()}</div>
                <div className='newsletter-box__month-year'>{date.toLocaleDateString('en-US', options)}</div>
                <div className="newsletter-box__point"></div>
            </div>
        )
    }
}

export default NewsletterBox;
