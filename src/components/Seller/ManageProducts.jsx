import React, { useState } from 'react';
import './ManageProducts.css';
import SellerHeader from './SellerHeader';
import SellerSidebar from './SellerSidebar';

function ManageProducts() {
  const [products, setProducts] = useState([
    { id: 1, image: 'https://littleboxindia.com/cdn/shop/files/883_2_1.jpg?v=1732883299', name: 'Velvet Sweetheart Neckline Split Ruched Knotted Maxi Dress In Wine', price: 999.00, description: 'A beautiful red evening dress.' },
    { id: 2, image: 'https://littleboxindia.com/cdn/shop/files/0dccc461de378b0af63f01db2751d3b0.jpg?v=1732792114', name: 'Solid Notched Collar Crop Blazer And Pant In White', price: 1599 , description: 'Stylish blue casual wear.' },
    { id: 3, image: 'https://littleboxindia.com/cdn/shop/files/efbc439fc704946e02ad957242cee76e.jpg?v=1732352375', name: 'Mock Neck Lace Up Front Lantern Sleeve Green Dress', price: 999, description: 'Elegant party dress.' },
    { id: 4, image: 'https://littleboxindia.com/cdn/shop/files/ffdd80c36e0610e51670823c7544ddb0.jpg?v=1732208402', name: 'Boat Neck Solid Ruffle Ruched White Maxi Dress', price: 1399, description: 'A beautiful red evening dress.' },
    { id: 5, image: 'https://littleboxindia.com/cdn/shop/files/d411f4891e3184453ae8974e506ab2f0.jpg?v=1732187357', name: 'Combo : V Neck Top Wrap Front With Lantern Sleeve in Chocolate Brown & Black', price: 849 , description: 'Stylish blue casual wear.' },
    { id: 6, image: 'https://littleboxindia.com/cdn/shop/files/73b13d5ed22055be3a2e19271e6863e6.jpg?v=1722527420', name: 'Aesthetic Sweetheart Neck Blouse & High Waisted Wide Leg Pants Set In Blue', price: 1199.00, description: 'Elegant party dress.' },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  const handleUpdate = (id) => {
    console.log(`Navigate to update page for product ID: ${id}`);
  };

  return (
    <div className="manage-products">
        <SellerHeader/>
        <SellerSidebar/>
      <h1 className='manade-product-h1'>Manage Products</h1>
      <div className="sellerproducts-grid">
        {products.map((product) => (
          <div key={product.id} className="sellerproduct-card">
            <img src={product.image} alt={product.name} className="sellerproduct-image" />
            <div className="sellerproduct-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <div className="sellerproduct-actions">
                <button onClick={() => handleUpdate(product.id)} className="update-btn">Update</button>
                <button onClick={() => handleDelete(product.id)} className="delete-btn">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageProducts;
