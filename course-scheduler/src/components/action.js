import React, { Component } from 'react';
import Icon from './icon';
class Action extends Component {

    handleAction = function () {
        this.props.onClick();
        // document.getElementById('action').classList.add
    }.bind(this);

    render() {
        return (
            <a id='action' onClick={() => this.handleAction()} className={`${this.props.className} action`}>
                {/* {Icon("fas fa-plus-circle")} */}
                {/* <i class="fas fa-times-circle"></i> */}
            </a>
            // <button onClick={() => this.props.onClick()} className={`${this.props.className} action`}>
            //     {Icon("fas fa-plus-circle")}
            //     {/* <i class="fas fa-times-circle"></i> */}
            // </button>
        )
    }
}
export default Action;