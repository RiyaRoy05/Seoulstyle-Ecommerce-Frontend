import React, { useState, useEffect } from 'react';
import './UserManagement.css';
import SellerHeader from '../Seller/SellerHeader';
import AdminSidebar from './AdminSidebar';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const fetchedUsers = [
      { id: 1, username: 'John Doe', email: 'john.doe@example.com', status: 'Active', role: 'Admin' },
      { id: 2, username: 'Jane Smith', email: 'jane.smith@example.com', status: 'Inactive', role: 'User' },
      { id: 3, username: 'Emily Johnson', email: 'emily.johnson@example.com', status: 'Active', role: 'User' },
      { id: 4, username: 'Michael Brown', email: 'michael.brown@example.com', status: 'Inactive', role: 'Admin' },
      { id: 5, username: 'Sarah Williams', email: 'sarah.williams@example.com', status: 'Active', role: 'User' },
      { id: 6, username: 'David Lee', email: 'david.lee@example.com', status: 'Inactive', role: 'User' }
    ];
    setUsers(fetchedUsers);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter(
    user => 
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleActivate = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: 'Active' } : user
    ));
  };

  const handleDeactivate = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: 'Inactive' } : user
    ));
  };

  return (
    <div className="user-management">
        <SellerHeader/>
        <AdminSidebar/>
      <h1 className='user-management-h1'>User Management</h1>

      <input 
        type="text" 
        className="search-bar" 
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={handleSearch}
      />

      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan="5">No users found</td>
            </tr>
          ) : (
            filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)} className="delete-btn">Delete</button>
                  {user.status === 'Active' ? (
                    <button onClick={() => handleDeactivate(user.id)} className="deactivate-btn">Deactivate</button>
                  ) : (
                    <button onClick={() => handleActivate(user.id)} className="activate-btn">Activate</button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
