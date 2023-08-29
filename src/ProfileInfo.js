import React from 'react';
import './ProfileInfo.scss';
import coverImage from './LightGraySolid.jpg';
import profileImage from './blank-profile-picture-973460_1280.webp';

const ProfileInfo = ({ name, friendsCount }) => {
  return (
    <div className="profile-info">
      <div className="cover-photo-container">
        <img src={coverImage} alt="Cover" className="cover-photo" />
      </div>

      <div className="info-container">
        <div className="profile-pic-container">
          <img src={profileImage} alt="Profile" className="profile-pic" />
        </div>
        <div className="user-details">
          <h2>{name}</h2>
          <p className="friends-count">245 friends</p>
        </div>
        <div className="action-buttons">
          <button className="add-to-story-btn">Add to Story</button>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>
      <div className="bio-container">
      </div>
    </div>
  );
};

export default ProfileInfo;
