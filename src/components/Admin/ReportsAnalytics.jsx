import React from 'react';
import './ReportsAnalytics.css';
import SellerHeader from '../Seller/SellerHeader';
import AdminSidebar from './AdminSidebar';

function ReportsAnalytics() {
  return (
    <div className="reports-container">
        <SellerHeader/>
        <AdminSidebar/>
      <h1 className="reports-heading">Reports and Analytics</h1>

      <div className="report-cards-container">
        <div className="stat-card">
          <h2 className="card-title">Total Sales</h2>
          <p className="card-value">$12,450</p>
        </div>

        <div className="stat-card">
          <h2 className="card-title">Total Products Sold</h2>
          <p className="card-value">1,238</p>
        </div>

        <div className="stat-card">
          <h2 className="card-title">Total Orders</h2>
          <p className="card-value">874</p>
        </div>
        <div className="user-card">
          <h2 className="card-title">New Users</h2>
          <p className="card-value">324</p>
        </div>

        <div className="user-card">
          <h2 className="card-title">Active Users</h2>
          <p className="card-value">1,562</p>
        </div>

        <div className="order-card">
          <h2 className="card-title">Pending Orders</h2>
          <p className="card-value">56</p>
        </div>

        <div className="order-card">
          <h2 className="card-title">Shipped Orders</h2>
          <p className="card-value">923</p>
        </div>

        <div className="order-card">
          <h2 className="card-title">Delivered Orders</h2>
          <p className="card-value">845</p>
        </div>
      </div>
    </div>
  );
}

export default ReportsAnalytics;
