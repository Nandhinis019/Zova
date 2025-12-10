import React, { useState, useEffect } from 'react';

const UserProfile = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    age: '',
    gender: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setUserDetails(JSON.parse(savedProfile));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify(userDetails));
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setUserDetails(prev => ({ ...prev, [field]: value }));
  };

  if (!isLoggedIn) return null;

  return (
    <div className="user-profile">
      <button 
        className="profile-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="profile-icon">👤</span>
        <span className="profile-text">Profile</span>
      </button>
      
      {isOpen && (
        <div className="profile-dropdown">
          <div className="profile-header">
            <h3>User Details</h3>
            <button 
              className="edit-btn"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? '✅' : '✏️'}
            </button>
          </div>
          
          <div className="profile-details">
            <div className="detail-item">
              <label>Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={userDetails.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your name"
                />
              ) : (
                <span>{userDetails.name || 'Not set'}</span>
              )}
            </div>
            
            <div className="detail-item">
              <label>Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  value={userDetails.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email"
                />
              ) : (
                <span>{userDetails.email || 'Not set'}</span>
              )}
            </div>
            
            <div className="detail-item">
              <label>Age:</label>
              {isEditing ? (
                <input
                  type="number"
                  value={userDetails.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  placeholder="Enter your age"
                />
              ) : (
                <span>{userDetails.age || 'Not set'}</span>
              )}
            </div>
            
            <div className="detail-item">
              <label>Gender:</label>
              {isEditing ? (
                <select
                  value={userDetails.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              ) : (
                <span>{userDetails.gender || 'Not set'}</span>
              )}
            </div>
          </div>
          
          {isEditing && (
            <button className="save-btn" onClick={handleSave}>
              Save Changes
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;