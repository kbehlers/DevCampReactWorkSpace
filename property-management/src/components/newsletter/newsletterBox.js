import React from 'react';

export default function NewsletterBox({date}){
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

