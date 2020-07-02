import React, { Component } from 'react';

import './ProductInfo.css';


class ProductInfo extends React.Component {

    render() {
        return (
            <div className="product__info">
                
                <p id="discount">NOW 50% OFF!</p>
                <p id="price">Only £399</p>
                <p id="currency">UK Only (GBP Currency only)</p>
                <ul id="product__info-list">
                    <li className="product__info-list-item">Universal Kit Only</li>
                    <li className="product__info-list-item">Battery: Single battery capacity version</li>
                </ul>
            </div>

        )
    }
}

export default ProductInfo;