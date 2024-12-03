import React from 'react';
import './SellerDashboard.css';
import SellerSidebar from './SellerSidebar';
import SellerHeader from './SellerHeader';

function SellerDashboard() {
    return (
        <div className="seller-dashboard">
            <SellerHeader />
            <SellerSidebar />
            <main className="dashboard-content">
                <h1 className="dashboard-title">Welcome to the Seller Dashboard</h1>

                <div className="dashboard-widgets">
                    <div className="widget">
                        <h2 className='dashdoard-h2'>Total Products</h2>
                        <p className='dashboard-p'>50</p>
                    </div>
                    <div className="widget">
                        <h2 className='dashdoard-h2'>Total Orders</h2>
                        <p className='dashboard-p'>120</p>
                    </div>
                    <div className="widget">
                        <h2 className='dashdoard-h2'>Revenue</h2>
                        <p className='dashboard-p'>$10,000</p>
                    </div>
                    <div className="widget">
                        <h2 className='dashdoard-h2'>Pending Shipments</h2>
                        <p className='dashboard-p'>15</p>
                    </div>
                </div>

                <section className="recent-orders">
                    <h2>Recent Orders</h2>
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Product</th>
                                <th>Customer</th>
                                <th>Status</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#12345</td>
                                <td>Product A</td>
                                <td>John Doe</td>
                                <td>Shipped</td>
                                <td>$100</td>
                            </tr>
                            <tr>
                                <td>#12346</td>
                                <td>Product B</td>
                                <td>Jane Smith</td>
                                <td>Pending</td>
                                <td>$50</td>
                            </tr>
                            <tr>
                                <td>#12347</td>
                                <td>Product C</td>
                                <td>Mike Johnson</td>
                                <td>Delivered</td>
                                <td>$200</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}

export default SellerDashboard;
