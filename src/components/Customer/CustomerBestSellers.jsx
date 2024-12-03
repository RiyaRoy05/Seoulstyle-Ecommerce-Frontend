  import React from 'react';
import { useNavigate } from 'react-router-dom';
import dress1 from './dress1.svg';
import dress2 from './dress2.svg';
import dress3 from './dress3.svg';
import dress4 from './dress4.svg';
import dress5 from './dress5.svg';
import dress6 from './dress6.svg';
import './CustomerBestSellers.css';

function CustomerBestSellers() {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Euphoria Crop Blouse', price: 'Rp. 125.000', image: dress1 },
    { id: 2, name: 'Venus Halter Dress', price: 'Rp. 180.000', image: dress2 },
    { id: 3, name: 'Snap Pure Blouse', price: 'Rp. 129.000', image: dress3 },
    { id: 4, name: 'West Bootscut Denim', price: 'Rp. 229.000', image: dress4 },
    { id: 5, name: 'Ribbon Check Long', price: 'Rp. 175.000', image: dress5 },
    { id: 6, name: 'Shouldcut Knit', price: 'Rp. 149.000', image: dress6 },
  ];

  const handleProductClick = (product) => {
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };

  return (
    <div className="bestseelerspage">
      <h1 className="bestseelers-heading">Our Best Seller</h1>
      <div className="best-seller-deails">
        {products.map((product) => (
          <div
            key={product.id}
            className="details1"
            onClick={() => handleProductClick(product)}
          >
            <img className="dress1" src={product.image} alt={product.name} />

            <h4 className="bestseels-h">{product.name}</h4>
            <h4 className="bestselles-p">{product.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerBestSellers;
