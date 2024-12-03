import React from "react";
import './CustomerRegister.css'
import Header from "../Header";

function CustomerRegister() {
  return (
    <div>
      <Header />
      <div className="all">
        <div>
          <img className="img-cu"
            src="https://plus.unsplash.com/premium_photo-1661582261589-5ea03ada2c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Customer Registration Illustration"
          />
        </div>
        <div className="register-container">
          <div className="register-card">
            <h2>Customer Registration</h2>
            <p>Create an account to start shopping with us!</p>
            <form className="register-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Create a strong password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Re-enter your password"
                />
              </div>
              <button type="submit" className="btn">Register</button>
            </form>
            <div className="register-footer">
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

export default CustomerRegister;
