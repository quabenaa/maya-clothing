import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { clearCart } from '../../redux/cart/cart.action';

import './stripe-button.style.scss';

const StripeCheckoutButton = ({ price, history, dispatch }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HHFqRAAr9SLmAsmwTSRYUPOBUqK6yTbVS4zloien6eKTQkVdKXgATN1SzLyVbrxX7udWDb46WG0fzhetUG6viQA00LlRRDGZl';

  const onToken = (token) => {
    dispatch(clearCart());
    console.log(token);
    alert('Payment Successful');
    history.push('/shop');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Maya Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default withRouter(connect()(StripeCheckoutButton));
