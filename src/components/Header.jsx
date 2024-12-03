import React, { useState } from "react";
import "../components/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div className="header">
      <a href="/"><img src={require('../assests/logo.png')} alt="logo" /></a>
      <div className="main-heading">
        <h3>SeoulStyle</h3>
        <h4>서울스타일</h4>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`options ${menuOpen ? 'open' : ''} white`}>
        <li><a href="/login">Login</a></li>
        <li><a href="/register-customer">Customer</a></li>
        <li><a href="/register-seller">Seller</a></li>
      </ul>
    </div>
  );
}

export default Header;
