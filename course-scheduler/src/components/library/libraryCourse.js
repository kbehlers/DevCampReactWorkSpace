import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Icon from "../icon";
import Arrow from "../arrow";
import Action from "../action";

import AnimateHeight from 'react-animate-height';

class LibraryCourse extends Component {

    constructor(props){
        super(props)
        this.state = {
            status: true,
            height: 0
        }
    }
    // renderDescription = function () {
    //     if (!this.state.status) {
    //         return (
    //             <div className="library-course__description">
    //                 <label htmlFor="">Course Description</label>
    //                 <p>
    //                     {this.props.description}
    //                 </p>
    //             </div>
    //         )
    //     }
    // }.bind(this);

    render() {
        this.id = `library-course-${this.props.id}`;
        let divClassName = 'library-course'
        if(!this.state.status){
            divClassName += ' library-course-selected'
        }
        let height = this.state.height == 0 ? 80 : 0;
        
        return (
            <div id={this.id} className={divClassName}>
                <div className="library-course__title-check">
                    <label htmlFor="" className="library-course__title">{this.props.title}</label>
                    {Icon("fas fa-check", 'library-course__icon')}

                </div>
                <div className="library-course__line"></div>
                <Arrow callback={(status) =>this.setState({status, height})} id={this.props.id} className="library-course__arrow" />
                <Action id={this.props.id} onClick={() => this.props.toggleEnrolled(this.props.id)} className="library-course__action" />
                <AnimateHeight duration={300} height={this.state.height}>
                    <div className="library-course__description">
                        <label htmlFor="">Course Description</label>
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                </AnimateHeight>

            </div>
        )
    }
}

export default connect(null, actions)(LibraryCourse);