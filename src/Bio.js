import React from 'react';
import './Bio.scss';

const Bio = () => {
  return (
    <div className="bio">
      <h3 className="bio-title">Intro</h3> {/* Add the title */}
      <div className="bio-content">
        <button className="add-bio-button">Add Bio</button>
        <div className="graduation">
          <span className="graduation-icon">🎓</span>
          Studies Computer Engineering at An-Najah National University
        </div>
        <button className="edit-details-button bio-button">Edit Details</button>
        <button className="add-hobbies-button bio-button">Add Hobbies</button>
        <button className="add-featured-button bio-button">Add Featured</button>
      </div>
    </div>
  );
  
};

export default Bio;
