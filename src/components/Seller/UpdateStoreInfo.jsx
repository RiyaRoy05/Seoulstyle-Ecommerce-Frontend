import React, { useState } from 'react';
import './UpdateStoreInfo.css';
import SellerHeader from './SellerHeader';
import SellerSidebar from './SellerSidebar';

function UpdateStoreInfo() {
  const [storeName, setStoreName] = useState('');
  const [storeAddress, setStoreAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [businessHours, setBusinessHours] = useState('');
  const [logo, setLogo] = useState(null);

  const handleSave = () => {
    const updatedInfo = {
      storeName,
      storeAddress,
      contactNumber,
      email,
      businessHours,
      logo,
    };
    console.log('Updated Store Info:', updatedInfo);
    alert('Store info updated successfully!');
  };

  const handleCancel = () => {
    alert('Changes discarded!');
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(file);
  };

  return (
    <div className="update-store-info">
        <SellerHeader/>
        <SellerSidebar/>
      <h2 className='update-store-h2'>Update Store Information</h2>
      <form className="store-info-form">
        <label>
          Store Name:
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            placeholder="Enter store name"
          />
        </label>
        <label>
          Store Address:
          <textarea
            value={storeAddress}
            onChange={(e) => setStoreAddress(e.target.value)}
            placeholder="Enter store address"
          />
        </label>
        <label>
          Contact Number:
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Enter contact number"
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
          />
        </label>
        <label>
          Business Hours:
          <input
            type="text"
            value={businessHours}
            onChange={(e) => setBusinessHours(e.target.value)}
            placeholder="e.g., 9 AM - 5 PM"
          />
        </label>
        <label>
          Store Logo:
          <input type="file" onChange={handleLogoChange} />
        </label>
        {logo && <p>Selected file: {logo.name}</p>}

        <div className="form-buttons">
          <button type="button" className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateStoreInfo;
