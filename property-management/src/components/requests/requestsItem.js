import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import { ROOT_URL} from '../../config';
import Icon from '../icon';
import Button from '../button';

import AnimateHeight from 'react-animate-height';
import RequireAdmin from '../auth/requireAdmin';

class RequestsItem extends Component {
    constructor() {
        super()
        this.state = {
            height: 0
        }
    }
    toggleDropdown = () => {
        var element = document.getElementById(`${this.props._id}-requests-item`)
        if(this.state.height === 0) {
            element.classList.add('bg-F8');
            this.setState({height: 'auto'})
        } else {
            element.classList.remove('bg-F8');
            this.setState({height: 0})
        }
    }

    handleStatus = () => {
        const { _id, status } = this.props;
        this.props.changeStatus({_id, status}, () => {
            this.props.fetchRequests();
        });
    }
    render() {
        const { title, body, date, imageUrl, status, _id} = this.props;
        const options =  {year: '2-digit', month: 'numeric', day: 'numeric'}
        const parsedDate = new Date(date);
        var moveButtonIcon ='fas fa-wrench';
        var mainIcon = 'fas fa-exclamation-triangle';
        if(status == 'in-progress' ){
            moveButtonIcon = 'fas fa-check-square'
            mainIcon = 'fas fa-wrench';
        } else if(status == 'complete'){
            moveButtonIcon= 'fas fa-exclamation-triangle';
            mainIcon = 'fas fa-check-square';
        }
        
        return (
            <div id={`${_id}-requests-item`} className='requests-item'>
                <Icon className="requests-item__icon" icon={mainIcon} />
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
                <RequireAdmin>
                    <Button className='requests-item__move' icon={moveButtonIcon} callback={() => this.handleStatus()} />
                </RequireAdmin>
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

RequestsItem = connect(null, actions)(RequestsItem);
export default RequestsItem;