import React, { Component } from 'react';

import './ProductInfo.css';


class ProductInfo extends React.Component {

    render() {
        return (
            <div className="product__info">
                <p>UK Only (GBP Currency only)</p>
                <p>£399</p>
                <p>NOW 50% OFF!</p>
                <p>Universal Kit Only</p>
                <p>Battery: Single battery capacity version</p>
            </div>

        )
    }
}

export default ProductInfo;