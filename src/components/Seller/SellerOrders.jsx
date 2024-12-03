import React, { useState } from 'react';
import './SellerOrders.css';
import SellerHeader from './SellerHeader';
import SellerSidebar from './SellerSidebar';

function SellerOrders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      product: 'Red Dress',
      quantity: 1,
      status: 'Pending',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      product: 'Blue Jeans',
      quantity: 2,
      status: 'Shipped',
    },
    {
      id: 3,
      customerName: 'Michael Brown',
      product: 'Black Jacket',
      quantity: 1,
      status: 'Delivered',
    },
    {
        id: 4,
        customerName: 'John Doe',
        product: 'Red Dress',
        quantity: 1,
        status: 'Pending',
      },
      {
        id: 5,
        customerName: 'Jane Smith',
        product: 'Blue Jeans',
        quantity: 2,
        status: 'Shipped',
      },
      {
        id: 6,
        customerName: 'Michael Brown',
        product: 'Black Jacket',
        quantity: 1,
        status: 'Delivered',
      },
  ]);

  const handleUpdateStatus = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  return (
    <div className="seller-orders">
        <SellerHeader/>
        <SellerSidebar/>
      <h1 className='sellerorder-h1'>Manage Orders</h1>
      <div className="orders-container">
        {orders.length === 0 ? (
          <p>No orders available.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-card">
              <h3>Order ID: {order.id}</h3>
              <p>Customer: {order.customerName}</p>
              <p>Product: {order.product}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Status: {order.status}</p>
              <div className="order-actions">
                <select
                  value={order.status}
                  onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteOrder(order.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SellerOrders;
