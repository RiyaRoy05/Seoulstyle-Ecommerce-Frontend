import React from "react";
import "./SellerRegister.css";
import Header from "../Header";

function SellerRegister() {
  return (
    <div>
      <Header />
      <div className="seller-page-container">
        <div className="seller-image-section">
          <img
            src="https://plus.unsplash.com/premium_photo-1672883552013-506440b2f11c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Seller Registration Illustration"
          />
        </div>
        <div className="seller-form-container">
          <div className="seller-form-card">
            <h2>Seller Registration</h2>
            <p>Join us as a seller and grow your business with ease!</p>
            <form className="seller-registration-form">
              <div className="seller-form-group">
                <label htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  placeholder="Enter your business name"
                />
              </div>
              <div className="seller-form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="seller-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="seller-form-group">
                <label htmlFor="address">Business Address</label>
                <textarea
                  id="address"
                  rows="3"
                  placeholder="Enter your business address"
                ></textarea>
              </div>
              <div className="seller-form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Create a strong password"
                />
              </div>
              <div className="seller-form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Re-enter your password"
                />
              </div>
              <button type="submit" className="seller-submit-btn">
                Register
              </button>
            </form>
            <div className="seller-form-footer">
              <p>
                Already have an account? <a href="/login">Login here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerRegister;
