import React from 'react';
import { useParams } from 'react-router-dom'
import './Orders.css'
import CustomerHeader from './CustomerHeader';


function OrderDetails() {
  const { id } = useParams();

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

  const order = orders.find((o) => o.id === id);

  if (!order) {
    return <p>Order not found!</p>;
  }

  return (
    <div className="orderdetails-details">
        <CustomerHeader/>
      <h1 className='orderdetails-head'>Order Details</h1>
      <div className="orderdetails-p">
      <p><strong>Order ID:</strong> {order.id}</p>
      <p><strong>Date:</strong> {order.date}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Delivery Date:</strong> {order.deliveryDate || 'N/A'}</p>
      <p><strong>Total:</strong> {order.total}</p>
      </div>

        <div className="orderdetailsother">
      <h2>Items:</h2>
      <div className="orderdetail-items">
        {order.items.map((item, index) => (
          <div key={index} className="orderdetail-item">
            <img src={item.image} alt={item.name} className="item-thumbnail" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default OrderDetails;
