import React, { Component } from 'react';
import {connect} from 'react-redux';

import history from '../../history';

export function ArchiveItem({title, date, _id, callback}) {
    const options =  {year: '2-digit', month: 'numeric', day: 'numeric'}
    const parsedDate = new Date(date);
    return (
        <div className="archive-item archive-items__item">
            <a onClick={() => {callback(_id)}} className="archive-item__title">{title}</a>
            <div className="archive-item__date">
                {parsedDate.toLocaleString('en-US', options)}
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
                { this.props.newsletters.map(newsletter => {
                    return <ArchiveItem callback={(_id) => history.push(`/newsletter/detail/${_id}`)} key={newsletter._id} {...newsletter}/>
                })}
            </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    const { newsletters } = state.newsletters;
    return {
        newsletters
    }
}
export default connect(mapStateToProps)(NewsLetterArchive);


