import React, { Component } from 'react';

export function ArchiveItem({title, date}) {
    return (
        <div className="archive-item">
            <div className="archive-item__title">{title}</div>
            <div className="archive-item__date">{date}</div>
        
        </div>
    )
}

class NewsLetterArchive extends Component {
    render() {
        return (
            <div className="newsletter-archive">
            <div className="newsletter-archive__title">Archive</div>
            <div className="newsletter-archive__items">
                <ArchiveItem title='hey' date='a date'/>
            </div>
        </div>
        )
    }
}
export default NewsLetterArchive;


