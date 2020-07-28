import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/review">Order Review</a></li>
                <li><a href="manage">Manage Inventory</a></li>
            </ul>
        </div>
    );
};

export default Header;