import React, { Component } from 'react';

import './CheckoutDetails.css';

class CheckoutDetails extends React.Component {



    render() {
        return (
            <div className="checkout__details">
                <h5>Checkout Details</h5>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email Address"/>
                    <input type="number" placeholder="Card Number"/>
                    <input type="month" placeholder="MM/YYYY"/>
                    <input type="number" placeholder="CVV"/>
                    <input type="text" placeholder="Name On Card"/>
                <button>Purchase Now</button>
            </div>
        )
    }
}

export default CheckoutDetails;