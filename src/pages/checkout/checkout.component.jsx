import React from 'react';
import {connect} from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems,total,history}) => (
    <div className='checkout-page'>
    <div className="checkout-header">
        <div className="header-block">
            <span>Product</span>
        </div>
        <div className="header-block">
            <span>Description</span>
        </div>
        <div className="header-block">
            <span>Quantity</span>
        </div>
        <div className="header-block">
            <span>Price</span>
        </div>
        <div className="header-block">
            <span>Remove</span>
        </div>
    </div>
    {cartItems.map(cartItem => 
      <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        )}
    <div className="total">
        <span>TOTAL : ${total}</span>
    </div>
    <div className="test-warning">
        *Plase use the following test credit card for pamyents*
        <br/>
        4242 4242 4242 4242 - Exp: 10/23 - CVV: 123 - BRAND: Visa
    </div>
    <StripeCheckoutButton price={total}/>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems,
    total : cartItems.reduce(
        (output,cartItem) => output + cartItem.price*cartItem.quantity,0
    )
});

export default connect(mapStateToProps)(CheckoutPage);