import React, { useState } from 'react';
import CustomerHeader from './CustomerHeader';
import CustomerFooter from './CustomerFooter'
import { useNavigate } from 'react-router-dom';
import './Orders.css';

function Orders() {
    const navigate = useNavigate();
  const orders = [
    {
      id: 'ORD001',
      date: '2024-12-01',
      items: [
        { name: 'Two Piece Set: Aesthetics Black Top With Trouser', image: 'https://littleboxindia.com/cdn/shop/products/1ea0293ccc594fcf47dffc11c7e5a79b.jpg?v=1669895275' },
        { name: 'Corset Style Puff Sleeve Floral Top', image: 'https://littleboxindia.com/cdn/shop/products/911d82e972f4854177f55666f0030913.jpg?v=1688211754' },
      ],
      total: 'Rp. 1998.000',
      status: 'Delivered',
      deliveryDate: '2024-12-05',
    },
    {
      id: 'ORD002',
      date: '2024-11-28',
      items: [{ name: 'V Neck Front Knot Floral Print Flare Long Sleeve Top', image: 'https://littleboxindia.com/cdn/shop/files/367c477d4d62e1cb56412edeb6fe887b.jpg?v=1718453316' }],
      total: 'Rp. 799.000',
      status: 'Processing',
      deliveryDate: '2024-12-03',
    },
    {
      id: 'ORD003',
      date: '2024-11-25',
      items: [{ name: 'Cropped Vest Ruffle Top In Dusty Blue', image: 'https://littleboxindia.com/cdn/shop/products/ccf5db56f64e4ed81fd22bafae41bbe7.jpg?v=1685345737' }],
      total: 'Rp. 499.000',
      status: 'Cancelled',
      deliveryDate: null,
    },
    {
        id: 'ORD004',
        date: '2024-12-01',
        items: [{ name: 'Black Top and Leopard Print Midi Skirt', image: 'https://littleboxindia.com/cdn/shop/products/8c5b271538dbcbfba4f0dcae0334edcd.jpg?v=1698519196' }],
        total: 'Rp. 999.000',
        status: 'Processing',
        deliveryDate: '2024-12-03',
      },
  ];

  const [filter, setFilter] = useState('');

  const filteredOrders = filter
    ? orders.filter((order) => order.status.toLowerCase() === filter.toLowerCase())
    : orders;

  const handleViewDetails = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div>
    <div className="orders-page">
      <CustomerHeader />
      <div className="customerorders-container">
        <h1 className="cutomerorders-heading">My Orders</h1>

        <div className="filter-container">
          <label htmlFor="status-filter">Filter by Status:</label>
          <select
            id="status-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Delivered">Delivered</option>
            <option value="Processing">Processing</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
    
        <div className="orders-list">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Delivery Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td className="items-cell">
                    {order.items.map((item, index) => (
                      <div key={index} className="order-item">
                        <img src={item.image} alt={item.name} className="item-thumbnail" />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </td>
                  <td>{order.total}</td>
                  <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
                  <td>{order.deliveryDate || 'N/A'}</td>
                  <td>
                    <button
                      className="view-details-btn"
                      onClick={() => handleViewDetails(order.id)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <CustomerFooter/>
    </div>
  );
}

export default Orders;