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

export class FormTextArea extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        const { className, title, input, type, placeholder } = this.props;
        return (
            <div className={`${className} form-textarea`}>
                <label className='form-textarea__title'>{title}</label>
                <textarea className='form-textarea__input' type={type} {...input} placeholder={placeholder}>
                    
                </textarea>
            </div>
        )
    }
}

export class FormButton extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        const { className, title, input, type, small, danger, onClick } = this.props;
        return (
            <div className={`${className} ${small ? 'form-button-small' : 'form-button'}`}>
                <button className={`
                    ${small ? 'form-button-small' : 'form-button'}__button  
                    ${danger ? 'form-button-small__danger' : ''}
                    `}
                    onClick={onClick}
                    type={type} {...input}>
                    {title}
                </button>
            </div>
        )
    }
}

export class FormImage extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        const { className, title, input, type, imageUrl } = this.props;
        return (
            <div className={`${className} form-image`}>
                <label className='form-image__title'>{title}</label>
                <img className='form-image__input' type={type} {...input} src={imageUrl}></img>
            </div>
        )
    }
}