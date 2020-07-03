import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './CheckoutDetails.css';

class CheckoutDetails extends React.Component {
    state = {
        orderConfirmed: false
    }

    showConfirmedOrder = () => {
        this.setState((prevState) => {
            return {orderConfirmed: !prevState.orderConfirmed}
        })
    }

    render() {
        if(this.state.orderConfirmed) {
            return (
                <div id="confirm__order">
                    <h2 id="confirm__title">Order Confirmed</h2>
                    <p id="confirm__text">We are pedalling your order to you as fast as possible!</p>
                    <img id="checkout__confirmed-image" src="https://www.swytchbike.com/wp-content/themes/stockholm-child/images/handlebar.gif" alt=""/>
                </div>
            )
        } else {
            return (
                <div className="checkout__details">
                    <h2 id="checkout__title">Order yours today!</h2>
                    <TextField id="standard-basic" type="text" label="Name" />
                    <TextField id="standard-basic" type="email" label="Email Address" />
                    <TextField id="standard-basic" type="text" label="Name On Card" />
                    <TextField id="standard-basic" type="number" label="Card Number" />
                    <TextField id="standard-basic" type="number" label="Card Expiration (MM.YY)" />
                    <TextField id="standard-basic" type="number" label="CVV" />
                    <div >
                        <Button id="button" variant="contained" color="primary" onClick={this.showConfirmedOrder}>
                            Buy Now!
                        </Button>
                    </div>
                   
                </div>
            )
        }

        
    }
}

export default CheckoutDetails;