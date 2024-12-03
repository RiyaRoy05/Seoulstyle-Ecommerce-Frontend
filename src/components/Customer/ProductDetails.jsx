import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import CustomerHeader from './CustomerHeader';
import CustomerFooter from './CustomerFooter'

function ProductDetails() {
  const { state } = useLocation();
  const { product } = state || {};

  const [selectedSize, setSelectedSize] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = (e) => {
    e.preventDefault(); 
  
    if (!selectedSize) {
      alert('Please select a size before adding to the cart!');
      return;
    }
  
    const cartItem = { product, size: selectedSize, quantity: 1 };
  
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
  
    existingCart.push(cartItem);
  
    localStorage.setItem('cart', JSON.stringify(existingCart));
  
    alert(`${product.name} of size ${selectedSize} added to the cart!`);
  
    navigate(`/cart`); 
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="product-details-page">
      <CustomerHeader />
      <h1 className="product-details-heading">Product Details</h1>
      <div className="product-container">
        <div className="product-images">
          {product.image ? (
            <img src={product.image} alt={product.name} className="product-main-image" />
          ) : (
            <div className="no-image">No Image Available</div>
          )}
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="productdetails-price">{formatPrice(product.price)}</p>
          <div className="product-rating">
            <span>⭐ 4.5</span> <span>(200 reviews)</span>
          </div>

          <p className="product-description">
            A beautifully crafted product perfect for any occasion. This {product.name} provides comfort and style.
          </p>

          <div className="size-selector">
            <label htmlFor="size">Select Size:</label>
            <select
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="" disabled>Select Size</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </select>
          </div>

          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Buy Now
          </button>
        </div>
      </div>

      <div className="size-chart">
        <h2>Size Chart</h2>
        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Chest (in inches)</th>
              <th>Waist (in inches)</th>
              <th>Hip (in inches)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S</td>
              <td>34 - 36</td>
              <td>28 - 30</td>
              <td>34 - 36</td>
            </tr>
            <tr>
              <td>M</td>
              <td>36 - 38</td>
              <td>30 - 32</td>
              <td>36 - 38</td>
            </tr>
            <tr>
              <td>L</td>
              <td>38 - 40</td>
              <td>32 - 34</td>
              <td>38 - 40</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>40 - 42</td>
              <td>34 - 36</td>
              <td>40 - 42</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Customer Reviews Section */}
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        <div className="review">
          <div className="review-header">
            <span className="review-author">John Doe</span>
            <span className="review-rating">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="review-text">
            "I absolutely love this product! The material is so soft, and the fit is perfect. I get so many compliments every time I wear it!"
          </p>
        </div>
        <div className="review">
          <div className="review-header">
            <span className="review-author">Jane Smith</span>
            <span className="review-rating">⭐⭐⭐⭐</span>
          </div>
          <p className="review-text">
            "Great quality! The color is exactly as shown, and it fits really well. I deducted one star because it took a bit longer to arrive."
          </p>
        </div>
        <div className="review">
          <div className="review-header">
            <span className="review-author">Emily Davis</span>
            <span className="review-rating">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="review-text">
            "Perfect for any occasion. I wear it for both casual and semi-formal events. Highly recommend it!"
          </p>
        </div>
      </div>
      <CustomerFooter/>
    </div>
  );
}

export default ProductDetails;
