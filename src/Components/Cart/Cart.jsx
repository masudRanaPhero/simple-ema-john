import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        // product.quantity = product.quantity || 1;
        if(product.quantity == 0){
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*10/100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h3 className='heading'>Order Summery</h3>
            <p>Selected Items: {quantity}</p>
            <p>totalPrice Price: ${totalPrice}</p>
            <p>Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand totalPrice: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;