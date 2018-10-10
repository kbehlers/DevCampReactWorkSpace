import React from 'react';


const Input = (placeholder, label) => {
    return (
        <div className="input">
            <input placeholder={placeholder} />
            <label>{label}</label>
        </div>
    )
}

export default Input;