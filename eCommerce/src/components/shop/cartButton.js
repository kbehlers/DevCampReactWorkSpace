import React from 'react';

function CartButton({ className, icon, onClick }) {
    return (
        <div onClick={onClick} className={`${className} cart-button`}>
            <i className={icon}></i>
            {/* &#x2716; */}
        </div>
    )
}

export default CartButton