import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total, prd) => total + prd.price, 0)

    return (
        <div>
            <h3>Order Summary</h3>
            <h4 className="center-text">Items Ordered: {cart.length}</h4>
            <div className="items">
                <p>Items: </p>
                <p>${total}</p>
            </div>
        </div >
    );
};

export default Cart;