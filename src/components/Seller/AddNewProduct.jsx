import React, { useState } from 'react';
import './AddNewProduct.css';
import SellerHeader from './SellerHeader';
import SellerSidebar from './SellerSidebar';

function AddNewProduct() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      productName,
      price,
      description,
      image,
    };

    console.log('New Product:', newProduct);

    setProductName('');
    setPrice('');
    setDescription('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="add-product-container">
        <SellerHeader/>
        <SellerSidebar/>
      <h2 className='addproduct-h2'>Add New Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="sellerform-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="sellerform-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="sellerform-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="sellerform-group">
          <label htmlFor="image">Product Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <button type="submit" className="add-product-btn">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddNewProduct;
