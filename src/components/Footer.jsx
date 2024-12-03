import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
            <img src={require('../assests/logo.png')} alt="" />
          <h1>SeoulStyle</h1>
          <h2>서울스타일</h2>
          <p>Your Style, Our Passion</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/returns">Returns</a></li>
              <li><a href="/shipping">Shipping Info</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 SeoulStyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
