import React, { Component } from 'react';

import { ROOT_URL} from '../../config';
import Icon from '../icon';
import Button from '../button';

import AnimateHeight from 'react-animate-height';

class RequestsItem extends Component {
    constructor() {
        super()
        this.state = {
            height: 0
        }
    }
    toggleDropdown = () => {
        var element = document.getElementById('requests-item')
        if(this.state.height === 0) {
            element.classList.add('bg-F8');
            this.setState({height: 'auto'})
        } else {
            element.classList.remove('bg-F8');
            this.setState({height: 0})
        }
    }
    render() {
        const { _id, title, body, date, imageUrl, status} = this.props;
        const options =  {year: '2-digit', month: 'numeric', day: 'numeric'}
        const parsedDate = new Date(date);
        return (
            <div id='requests-item' className='requests-item'>
                <Icon className="requests-item__icon" icon='fas fa-exclamation-triangle' />
                <div className="requests-item__title">
                    <div className='requests-item__title__text'>
                        {title}
                    </div>
                    <Icon className='requests-item__title__arrow' icon='fas fa-sort-down' callback={()=>this.toggleDropdown()} />
                </div>
                <div className="requests-item__tenant-unit">
                     - Unit 
                </div>
                <div className="requests-item__date">
                    {parsedDate.toLocaleString('en-US', options)}
                </div>
                <Button className='requests-item__move' icon='fas fa-wrench' callback={() => console.log("Trying to move request item")} />
                <div className="requests-item__description">
                    <AnimateHeight
                        duration={300}
                        height={this.state.height}
                    >
                        <div className="item-description">
                            <img className='item-description__img' src={`${ROOT_URL}/${imageUrl}`} />
                            <p className="item-description__text">
                                {body}
                                </p>
                        </div>
                    </AnimateHeight>
                </div>

            </div>
        )
    }
}
export default RequestsItem;