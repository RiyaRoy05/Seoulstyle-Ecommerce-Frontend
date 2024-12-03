import React, { useState } from 'react';
import './OrderManagement.css';
import SellerHeader from '../Seller/SellerHeader';
import AdminSidebar from './AdminSidebar';

function OrderManagement() {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', product: 'Dress A', quantity: 2, price: 40, status: 'Pending' },
    { id: 2, customer: 'Jane Smith', product: 'Shirt B', quantity: 1, price: 20, status: 'Shipped' },
    { id: 3, customer: 'Tom Brown', product: 'Pants C', quantity: 3, price: 60, status: 'Delivered' },
    { id: 4, customer: 'Emily White', product: 'Jacket D', quantity: 1, price: 50, status: 'Pending' },
    { id: 5, customer: 'Lucas Green', product: 'Shoes E', quantity: 2, price: 70, status: 'Shipped' },
    { id: 6, customer: 'Olivia Black', product: 'Hat F', quantity: 1, price: 15, status: 'Pending' },
  ]);

  const handleUpdateStatus = (id, status) => {
    const updatedOrders = orders.map(order => 
      order.id === id ? { ...order, status } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="order-management">
        <SellerHeader/>
        <AdminSidebar/>
      <h1 className='order-management-h1'>Order Management</h1>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>${order.price}</td>
                <td>{order.status}</td>
                <td>
                  <button onClick={() => handleUpdateStatus(order.id, 'Shipped')}>Mark as Shipped</button>
                  <button onClick={() => handleUpdateStatus(order.id, 'Delivered')}>Mark as Delivered</button>
                  <button onClick={() => handleUpdateStatus(order.id, 'Cancelled')}>Cancel Order</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderManagement;
