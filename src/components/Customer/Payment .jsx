import React, { useState } from 'react';
import './Buy.css'
import CustomerHeader from './CustomerHeader';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Payment via ${paymentMethod} is successfully completed.`);
  };

  return (
    <div className="payment-page">
        <CustomerHeader/>
      <h1 className='payment-h1'>Payment Page</h1>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="payment-method">Select Payment Method</label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            required
          >
            <option value="">--Choose Payment Method--</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        {paymentMethod === 'Credit Card' && (
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="Enter your card number" required />
          </div>
        )}

        {paymentMethod === 'Credit Card' && (
          <div className="form-group">
            <label htmlFor="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" placeholder="MM/YY" required />
          </div>
        )}

        {paymentMethod === 'Credit Card' && (
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="Enter CVV" required />
          </div>
        )}

        {paymentMethod === 'PayPal' && (
          <div className="form-group">
            <label htmlFor="paypal-email">PayPal Email</label>
            <input type="email" id="paypal-email" placeholder="Enter your PayPal email" required />
          </div>
        )}

        {paymentMethod === 'Bank Transfer' && (
          <div className="form-group">
            <label htmlFor="account-number">Account Number</label>
            <input type="text" id="account-number" placeholder="Enter your account number" required />
          </div>
        )}

        <button type="submit" className="pay-btn">Submit Payment</button>
      </form>
    </div>
  );
}

export default Payment;
