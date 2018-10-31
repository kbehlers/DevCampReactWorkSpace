import React, { Component } from 'react';
class Logo extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        const size = {
            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 105
        }
        return (
            <div className='logo-main'>
                <img style={size} src="/assets/ds_circle_logo.png" alt=""/>
            </div>
        )
    }
}
export default Logo;