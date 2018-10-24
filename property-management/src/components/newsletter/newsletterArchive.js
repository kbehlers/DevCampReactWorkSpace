import React, { Component } from 'react';

export function ArchiveItem({title, date}) {
    let options =  {year: '2-digit', month: 'numeric', day: 'numeric'}
    return (
        <div className="archive-item archive-items__item">
            <div className="archive-item__title">{title}</div>
            <div className="archive-item__date">
                {date.toLocaleString('en-US', options)}
            </div>

        </div>
    )
}

class NewsLetterArchive extends Component {
    render() {
        return (
            <div className="newsletter-archive">
            <div className="newsletter-archive__title">Archive</div>
            <div className="newsletter-archive__items archive-items">
                <ArchiveItem title='hey' date={new Date()}/>
                <ArchiveItem title='hey' date={new Date()}/>
                <ArchiveItem title='hey' date={new Date()}/>
                <ArchiveItem title='hey' date={new Date()}/>
            </div>
        </div>
        )
    }
}
export default NewsLetterArchive;


