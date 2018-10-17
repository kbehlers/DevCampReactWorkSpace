import React, { Component } from 'react';
import Icon from './icon';
class Action extends Component {
    render() {
        return (
            <button onClick={() => this.props.onClick()} className={`${this.props.className} action`}>
                {Icon("fas fa-plus-circle")}
                {/* <i class="fas fa-times-circle"></i> */}
            </button>
        )
    }
}
export default Action;