import React, { Component } from 'react';

export class FormInput extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        const { className, title, input, type, placeholder } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className='form-input__title'>{title}</label>
                <input className='form-input__input' type={type} {...input} placeholder={placeholder}></input>
            </div>
        )
    }
}

export class FormButton extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        const { className, title, input, type } = this.props;
        return (
            <div className={`${className} form-button`}>
                <button className='form-button__button' type={type} {...input}>
                    {title}
                </button>
            </div>
        )
    }
}
