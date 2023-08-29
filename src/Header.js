import React from 'react';
import { FaSearch, FaHome, FaVideo, FaStore, FaUsers, FaFacebookMessenger, FaPlus, FaBell, FaBars } from 'react-icons/fa';
import facebookLogo from './download.png';
import profilePic from './blank-profile-picture-973460_1280.webp';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar-container">
        <img src={facebookLogo} alt="Facebook Logo" className="facebook-logo" />
        <input type="text" className="search-bar" placeholder="Search Facebook" />
        <FaSearch className="search-icon" />
      </div>
      <div className="middle-icons">
        <FaHome className="middle-icon" />
        <FaVideo className="middle-icon" />
        <FaStore className="middle-icon" />
        <FaUsers className="middle-icon" />
      </div>
      <ul className="nav-links">
        <li><FaFacebookMessenger className="icon" /></li>
        <li><FaPlus className="icon" /></li>
        <li><FaBell className="icon" /></li>
        <li><FaBars className="icon" /></li>
        <li className="profile-pic-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
