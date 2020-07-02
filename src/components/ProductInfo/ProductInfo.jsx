import React, { Component } from 'react';

import './ProductInfo.css';


class ProductInfo extends React.Component {

    render() {
        return (
            <div className="product__info">
                
                <p id="discount">NOW 50% OFF!</p>
                <p id="price">Only £399</p>
                <p>UK Only (GBP Currency only)</p>
                <p>Universal Kit Only</p>
                <p>Battery: Single battery capacity version</p>
            </div>

        )
    }
}

export default ProductInfo;