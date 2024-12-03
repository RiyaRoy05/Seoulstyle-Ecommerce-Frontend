import React from 'react';
import './SellerHeader.css';

function SellerHeader() {
  return (
    <header className="seller-header">
      <div className="seller-header-logo">
        <img className='seller-logo' src={require('./logo.png')} alt="" />
        <div>
        <h3 className='sellerheader-h3'>SeoulStyle</h3>
        <h4 className='sellerheader-h4'>서울스타일</h4>
        </div>
        <input type="text" placeholder='  search' className="seller-header-search" />
        </div>
    </header>
  );
}

export default SellerHeader;
