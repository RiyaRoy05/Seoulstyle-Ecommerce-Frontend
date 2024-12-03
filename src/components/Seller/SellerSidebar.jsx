import React, { useState } from 'react';
import './SellerSidebar.css';

function SellerSidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        {isSidebarVisible ? 'Hide' : 'Show'} Sidebar
      </button>
      
      <aside className={`seller-sidebar ${isSidebarVisible ? '' : 'show'}`}>
        <nav className="sidebar-nav">
          <ul className='sellersidebar-ul'>
            <a href="/seller"><li className="sidebar-item">Dashboard</li></a>
            <a href="/add-new-product"><li className="sidebar-item">Add New Product</li></a>
            <a href="/manage-products"><li className="sidebar-item">Manage Products</li></a>
            <a href="/seller-orders"><li className="sidebar-item">Orders</li></a>
            <a href="/update-info"><li className="sidebar-item">Update Store Info</li></a>
            <a href="/login"><li className="sidebar-item-logout">Logout</li></a>
          </ul>   
        </nav>
      </aside>
    </>
  );
}

export default SellerSidebar;
