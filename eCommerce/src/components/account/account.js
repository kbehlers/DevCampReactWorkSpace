import React, { Component } from 'react';
class Account extends Component {
    renderContent() {
        return <h1> content </h1>
    }
    render() {
        return (
            <div className=''>
                {this.renderContent()}
            </div>
        )
    }
}
export default Account;