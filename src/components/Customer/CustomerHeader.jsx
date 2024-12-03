import React, { useState, useEffect } from "react";
import "./CustomerHeader.css";

function CustomerHeader() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); 
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  return (
    <header className="cu-header">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={`cunav-links ${menuOpen ? "show" : ""}`}>
        <a href="/customer" className="cunav-link">Home</a>
        <a href="/customerallproducts" className="cunav-link">All Products</a>
        <a href="/orders" className="cunav-link">Orders</a>
        <a href="/help" className="cunav-link">Help</a>

        <div className="cuheadings">
          <h3 className="cueng">SeoulStyle</h3>
          <h4 className="cukorea">서울스타일</h4>
        </div>

        <div className="cuothers">
          <input type="text" className="search-input" placeholder="Search..." />
          <a href="/cart">
            <img className="cart" src={require("./Vector (1).svg").default} alt="cart" />
            <span className="cart-count">{cartCount}</span>
          </a>
          <img className="profile-cu" src={require("./Vector (2).svg").default} alt="profile" />
          <a href="/login">
            <img className="logout" src={require("./icon-park_logout.svg").default} alt="logout" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default CustomerHeader;
