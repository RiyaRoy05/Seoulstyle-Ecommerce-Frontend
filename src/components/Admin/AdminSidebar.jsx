// import React from 'react';
// import './AdminSidebar.css';

// function AdminSidebar() {
//   return (
//     <aside className="admin-sidebar">
//       <nav className="admin-nav">
//         <ul className='adminsidebar-ul'>
//           <a href="/admin"><li className="admin-item">Dashboard</li></a>
//           <a href="/user-management"><li className="admin-item">User Management</li></a>
//           <a href="/product-management"><li className="admin-item">Product Management</li></a>
//           <a href="/order-management"><li className="admin-item">Order Management</li></a>
//           <a href="/report-analystics"><li className="admin-item">Reports & Analytics</li></a>
//           <a href="/login"><li className="sidebar-item-logout">Logout</li></a>
//         </ul>
//       </nav>
//     </aside>
//   );
// }

// export default AdminSidebar;
import React, { useState } from 'react';
import './AdminSidebar.css';

function AdminSidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        {isSidebarVisible ? 'Hide' : 'Show'} Sidebar
      </button>

      <aside className={`admin-sidebar ${isSidebarVisible ? '' : 'show'}`}>
        <nav className="admin-nav">
          <ul className="adminsidebar-ul">
            <a href="/admin"><li className="admin-item">Dashboard</li></a>
            <a href="/user-management"><li className="admin-item">User Management</li></a>
            <a href="/product-management"><li className="admin-item">Product Management</li></a>
            <a href="/order-management"><li className="admin-item">Order Management</li></a>
            {/* <a href="/report-analystics"><li className="admin-item">Reports & Analytics</li></a> */}
            <a href="/login"><li className="sidebar-item-logout">Logout</li></a>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default AdminSidebar;
