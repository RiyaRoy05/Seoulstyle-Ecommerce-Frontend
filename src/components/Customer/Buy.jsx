import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Buy.css';
import CustomerHeader from './CustomerHeader';

function Buy() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { product, selectedSize } = state || {};
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, idx) => idx !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index, delta) => {
    const updatedCart = [...cartItems];
    const item = updatedCart[index];

    item.quantity += delta;

    if (item.quantity < 1) {
      item.quantity = 1;
    }

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="buy-page">
      <CustomerHeader />
      <h1 className="buy-heading">Your Cart</h1>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p className='cart-p'>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-info">
                {item.product.image ? (
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="cart-item-image"
                  />
                ) : (
                  <div className="no-image">No Image Available</div>
                )}
                <div className="cart-item-details">
                  <h3>{item.product.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Price: ${item.product.price}</p>
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(index, -1)}
                      disabled={item.quantity === 1} 
                    >
                      -
                    </button>
                    <span className="quantity-display">Quantity:{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(index, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(index)}
                className="remove-item-btn"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="checkout-section">
          <button onClick={handleCheckout} className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Buy;
