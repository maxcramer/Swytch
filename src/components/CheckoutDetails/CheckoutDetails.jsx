import React, { Component } from 'react';

class CheckoutDetails extends React.Component {



    render() {
        return (
            <div>
                <h5>Checkout Details</h5>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email Address"/>
                <div id="card__details">
                    <input type="number" placeholder="Card Number"/>
                    <input type="text" placeholder="Expiration Date"/>
                    <input type="text" placeholder="CVV"/>
                    <input type="text" placeholder="Name On Card"/>
                </div>
            </div>
        )
    }
}

export default CheckoutDetails;