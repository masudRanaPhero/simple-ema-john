import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img,name, price,seller,ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='detail'>
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <h6>Manufacturer : {seller}</h6>
                <h6>Ratings : {ratings}</h6>
            </div>

            <button onClick={()=> handleAddToCart(props.product)} className='cart-btn'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;