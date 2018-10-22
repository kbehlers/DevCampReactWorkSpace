import React, { Component } from 'react';
class FormInput extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        const { className, title} = this.props;
        return (
            <div className='form-input'>
                <label>{title}</label>
                <input className={`${className} form-input`}></input>
            </div>
        )
    }
}

export default FormInput;