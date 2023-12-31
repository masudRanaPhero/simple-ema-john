import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect( ()=>{
        const stordeCart = getShoppingCart();
        const saveCart = [];
        // step-1 : get id
        for(const id in stordeCart){
        // step -2 : get the product by using id 
            const addedProduct = products.find(product => product.id == id);
            if(addedProduct){
                // step - 3: add quantity 
                const quantity = stordeCart[id];
                addedProduct.quantity = quantity;
                // step -4: add the added product to the saved cart
                saveCart.push(addedProduct);
            }  
        }
        // step - 5: set the cart 
        setCart(saveCart);
    }, [products])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }



    return (
        <div className='shop-container'>

            <div className='products-container'>
                {
                    products.map(product => <Product
                         product={product}
                         key = {product.id}
                         handleAddToCart={handleAddToCart}
                         ></Product> )
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;