import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    console.log(cart)
    
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice*10/100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <p>hello world</p>
            <h3 className='heading'>Order Summery</h3>
            <p>Selected Items: {cart.length}</p>
            <p>totalPrice Price: ${totalPrice}</p>
            <p>Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand totalPrice: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;