import React from 'react';
import dress1 from '../assests/dress1.jpg'
import '../components/Product.css';

const topRatedProducts = [
    {
        id: 1,
        name: "Elegant Hanbok",
        image: "https://images.unsplash.com/photo-1550177205-89d100b75c34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "Rs. 4,949.00",
        rating: 4.8,
    },
    {
        id: 2,
        name: "Korean Streetwear Jacket",
        image: "https://images.unsplash.com/photo-1544246108-14b45872b02d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "Rs. 2500.00",
        rating: 4.7,
    },
    {
        id: 3,
        name: "Modern Hanbok Dress",
        image: "https://images.unsplash.com/photo-1516527659191-7e02047a7f0e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "Rs. 5,529.00",
        rating: 4.9,
    },
    {
        id: 4,
        name: "Streetwear",
        image: "https://images.unsplash.com/photo-1686062972257-b5114ed00822?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "Rs. 3,929.00",
        rating: 4.9,
    },
    {
        id: 5,
        name: "Revy Strapless Midi Dress",
        image: dress1,
        price: "Rs. 3,000.00",
        rating: 4.2,
    },
    {
        id: 6,
        name: "Tropez Crochet Holiday Coord - Resortwear",
        image: "https://www.alamodelabel.in/cdn/shop/files/C2CA454B-04A1-4698-9BD7-F124C9F93588_700x.jpg?v=1729271249",
        price: "Rs. 3,149.00",
        rating: 5,
    },
];

function Products() {
    return (
        <div className="products-page">
            <h1>Top-Rated Products</h1>
            <p className='para'>Explore the best in Korean fashion, carefully chosen for their elegance and trendsetting style.</p>

            <div className="homeproducts-grid">
                {topRatedProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p className="price">{product.price}</p>
                        <p className="rating">Rating: ⭐ {product.rating}</p>
                    </div>
                ))}
            </div>

            <div className="testimonials">
                <h2>What Our Customers Are Saying</h2>
                <div className="testimonial-container">
                    <div className="testimonial">
                        <p className="testimonial-text">"I absolutely love the Elegant Hanbok! It's elegant, stylish, and so comfortable!"</p>
                        <p className="testimonial-author">- Sarah K.</p>
                    </div>
                    <div className="testimonial">
                        <p className="testimonial-text">"The Korean Streetwear Jacket is my new go-to piece. Super trendy and great quality!"</p>
                        <p className="testimonial-author">- Mark L.</p>
                    </div>
                </div>
            </div>

            <div className="cta-section">
                <h2>Stay Updated on the Latest Fashion</h2>
                <p>Join our newsletter and be the first to know about new arrivals, exclusive offers, and more!</p>
                <button className="cta-button">Subscribe</button>
            </div>

        </div>
    );
}

export default Products;