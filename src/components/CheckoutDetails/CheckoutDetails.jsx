import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

import './CheckoutDetails.css';

class CheckoutDetails extends React.Component {



    render() {
        return (
            <div className="checkout__details">
                <h2 id="checkout__title">Order yours today!</h2>
                <TextField id="standard-basic" type="text" label="Name" />
                <TextField id="standard-basic" type="email" label="Email Address" />
                <TextField id="standard-basic" type="text" label="Name On Card" />
                <TextField id="standard-basic" type="number" label="Card Number" />
                <TextField id="standard-basic" type="number" label="Card Number" />
                <TextField id="standard-basic" type="number" label="CVV" />
                <button>Purchase Now</button>
            </div>
        )
    }
}

export default CheckoutDetails;