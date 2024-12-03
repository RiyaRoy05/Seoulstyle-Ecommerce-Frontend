import React from 'react';
import './Admin.css';
import AdminSidebar from './AdminSidebar';
import SellerHeader from '../Seller/SellerHeader';

function Admin() {
  return (
    <div className="admin-dashboard">
        <SellerHeader/>
      <AdminSidebar />
      <div className="admin-dashboard-content">
        <h1 className='admin-h1'>Admin Dashboard</h1>
        <div className="overview">
          <div className="stats-box">
            <h2>Total Users</h2>
            <p>1500</p>
          </div>
          <div className="stats-box">
            <h2>Total Products</h2>
            <p>200</p>
          </div>
          <div className="stats-box">
            <h2>Total Orders</h2>
            <p>500</p>
          </div>
          <div className="stats-box">
            <h2>Total Revenue</h2>
            <p>$120,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
