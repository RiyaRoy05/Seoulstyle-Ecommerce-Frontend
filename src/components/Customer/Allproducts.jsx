import React, { useState } from 'react';
import './Allproducts.css';
import { useNavigate } from 'react-router-dom';
import CustomerHeader from './CustomerHeader';
import CustomerFooter from './CustomerFooter';

const products = [
    { id: 7, name: 'Two Piece Set: Aesthetics Black Top With Trouser', price: 'Rs. 999.00', image: "https://littleboxindia.com/cdn/shop/products/1ea0293ccc594fcf47dffc11c7e5a79b.jpg?v=1669895275" },
    { id: 8, name: 'Combo : Set Of Two Light Brown & Black Premium Trousers', price: 'Rs. 1,499.00', image: 'https://littleboxindia.com/cdn/shop/products/717adcf9f39d0281c12bb10f55dd7382.jpg?v=1692199580' },
    { id: 9, name: 'Corset Style Puff Sleeve Floral Top', price: 'Rs. 649.00 ', image: 'https://littleboxindia.com/cdn/shop/products/911d82e972f4854177f55666f0030913.jpg?v=1688211754' },
    { id: 10, name: 'Wednesday Inspired Black Hood Two Piece Dress', price: 'Rs. 999.00', image: 'https://littleboxindia.com/cdn/shop/products/cad51529eef7f9ad8bdce387f1e6e8f2.jpg?v=1674207962' },
    { id: 11, name: 'V Neck Front Knot Floral Print Flare Long Sleeve Top', price: 'Rs. 799.00', image: 'https://littleboxindia.com/cdn/shop/files/367c477d4d62e1cb56412edeb6fe887b.jpg?v=1718453316' },
    { id: 12, name: 'Ruffle Cami Maxi Dress In Black', price: 'Rs. 1,199.00', image: 'https://littleboxindia.com/cdn/shop/products/f5c5c1772534815ad4da9ec2ea060446.jpg?v=1701526392' },
    { id: 13, name: 'Cropped Vest Ruffle Top In Dusty Blue', price: 'Rs. 499.00 ', image: "https://littleboxindia.com/cdn/shop/products/ccf5db56f64e4ed81fd22bafae41bbe7.jpg?v=1685345737" },
    { id: 14, name: 'Mesh Ruffle Green Maxi Dress', price: 'Rs. 1,249.00', image: 'https://littleboxindia.com/cdn/shop/files/8ac71dd02ba622bdcf2cc5c952c9c955.jpg?v=1712299384' },
    { id: 15, name: 'Black Top and Leopard Print Midi Skirt', price: 'Rs. 999.00 ', image: 'https://littleboxindia.com/cdn/shop/products/8c5b271538dbcbfba4f0dcae0334edcd.jpg?v=1698519196' },
    { id: 16, name: 'Floral Knotted Split Midi Dress', price: 'Rs. 1,049.00', image: 'https://littleboxindia.com/cdn/shop/files/0621ec80da1eb385be83e13c630812db.jpg?v=1717263234' },
    { id: 17, name: 'Velvet Sweetheart Neckline Split Ruched Knotted Maxi Dress In Red', price: 'Rs. 999.00', image: 'https://littleboxindia.com/cdn/shop/files/884_2.jpg?v=1732982178' },
    { id: 18, name: 'Solid Ruched Waist Halter Neck Long Dress In Off-White', price: 'Rs. 999.00 ', image: 'https://littleboxindia.com/cdn/shop/files/535aff9d8d96cf0b58130c17599792ca.jpg?v=1721485745' },
    { id: 19, name: 'Contrasting Color Split Asymmetric Camisole Shirt', price: 'Rs. 799.00 ', image: 'https://littleboxindia.com/cdn/shop/files/2155f160b82c040cc4e2a5f30a69bae5.jpg?v=1730812312' },
    { id: 20, name: 'Woven Halter Check Knotted Midi Dress', price: 'Rs. 999.00', image: 'https://littleboxindia.com/cdn/shop/files/fd95d2379d1fa64480823df2160b68ab.jpg?v=1719493269' },
    { id: 21, name: 'Contrast Collar Button Front Bodycon Dress In Pink', price: 'Rs. 999.00 ', image: 'https://littleboxindia.com/cdn/shop/files/27ea988fc3d86be06a83d4741654980b.jpg?v=1721475715' },
  ];

function Allproducts() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/productdetails/${product.id}`, { state: { product } });
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="all-products-page">
        <CustomerHeader/>
        <h1 className='allproduct-head'>Explore Our Exclusive Collection</h1>


      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="allproduct-card"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.name} className="allproduct-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <CustomerFooter/>
    </div>
  );
}

export default Allproducts;
