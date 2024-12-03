import React, { useState, useEffect } from 'react';
import './ProductManagement.css';
import SellerHeader from '../Seller/SellerHeader';
import AdminSidebar from './AdminSidebar';

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const sampleProducts = [
      { id: 1, image: "https://littleboxindia.com/cdn/shop/products/46d60cb8ded687eefc871ce66058186c.jpg?v=1701522337", name: "NYE Blazer Mini Dress in Black", price: 1499, description: "A beautiful red dress" },
      { id: 2, image: "https://littleboxindia.com/cdn/shop/files/435_2.jpg?v=1716216444", name: "Set Of Two Cropped Top With Korean Style Baggy Trouser In Dark Brown", price: 1299, description: "A stylish blue dress" },
      { id: 3, image: "https://littleboxindia.com/cdn/shop/products/6206c2c8c7bc06941df7ca134423c2bb.jpg?v=1704375586", name: "Solid Knit Symmetrical Neck Cut Out Long Sleeve Black Top", price: 599, description: "Elegant black dress" },
      { id: 4, image: "https://littleboxindia.com/cdn/shop/products/8d3940e50ec4a24037283ce32e00e091.jpg?v=1684912470", name: "Cloud Illusion Top With Korean Style Baggy Trouser In Dark Chocolate", price: 1349, description: "Casual yellow dress" },
      { id: 5, image: "https://littleboxindia.com/cdn/shop/files/7b72104ab4ed2019cbb564bc74416788.jpg?v=1716232300", name: "Square Neck Ruched See-Through Bell Sleeves Top", price: 599, description: "Chic white dress" },
      { id: 6, image: "https://littleboxindia.com/cdn/shop/files/3677a7bb8aa3cc63188b2f3cf69dbcf5.jpg?v=1717519598", name: "Tie Front Square Neck Crop Top In Brown", price: 599, description: "Floral print dress" },
      { id: 7, image: "https://littleboxindia.com/cdn/shop/products/00c06e0176a0c65c6111e9ae4758ffeb.jpg?v=1679405478", name: "Y2K Corset Style Full Sleeve Ribbed Trending Top In Apricot", price: 499, description: "Formal dress" },
      { id: 8, image: "https://littleboxindia.com/cdn/shop/products/b8cd17fb43ec6a76af0587fa64c4ce44.jpg?v=1681981070", name: "Trending Cargo In Brown With Pockets", price: 799, description: "Sporty green dress" },
      { id: 9, image: "https://littleboxindia.com/cdn/shop/products/a9e2318ed3d25616991ca34aff734dfc.jpg?v=1692467005", name: "Set Of Two Tailored Trouser In Cappuccino And Black", price: 1999, description: "Light blue dress" },
      { id: 10, image: "https://littleboxindia.com/cdn/shop/products/6b8fd680f595411e9d6532df26aba485.jpg?v=1708343695", name: "Sweetheart Neck Solid Split Maxi Dress In Brown", price: 999, description: "Comfortable orange dress" },
      { id: 11, image: "https://littleboxindia.com/cdn/shop/files/1dd239ffe1d47a5db7c7633ab7d7422c.jpg?v=1725558425", name: "Off-Shoulder Ruched Top With Straight Leg Trousers In Green", price: 999, description: "Sophisticated pink dress" },
      { id: 12, image: "https://littleboxindia.com/cdn/shop/files/b81dea6e9c132f18aa9fedb391b299a0.jpg?v=1718730894", name: "Sleeveless Crop Tank Top & Ruched Maxi Skirt In Off White", price: 1249, description: "Glamorous gold dress" }
    ];
    setProducts(sampleProducts);
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-management">
        <SellerHeader/>
        <AdminSidebar/>
      <h2 className='product-management-h2'>Product Management</h2>

      <div className="productsearch-bar">
        <input
          type="text"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="adminproduct-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div className="adminproduct-item" key={product.id}>
              <img src={product.image} alt={product.name} className="adminproduct-image" />
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              <p>{product.description}</p>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductManagement;
