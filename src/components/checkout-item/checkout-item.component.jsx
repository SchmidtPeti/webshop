import React from "react";

import './checkout-item.styles.scss';

import { addItem, clearItemFromCart,removeItem } from '../../redux/cart/cart.action';

import {connect} from 'react-redux';

const CheckoutItem = ({ cartItem, clearItem,removeItem,addItem}) => {
    const {name,imageUrl,price,quantity} = cartItem;
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">
            {name}
        </span>
        <span className="quantity">
            <span onClick={()=>removeItem(cartItem)} className='arrow'>&#10094; </span>
            <span className="value">{quantity}</span> 
            <span onClick={() => addItem(cartItem)} className='arrow'> &#10095; </span>
        </span>
        <span className="price">
            {price}
        </span>
        <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
        </span>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem : item => dispatch(removeItem(item)),
    addItem : item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);