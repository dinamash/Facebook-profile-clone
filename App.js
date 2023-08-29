import React from 'react';
import Header from './Header';
import ProfileInfo from './ProfileInfo';
import Bio from './Bio';
import PostsSection from './PostsSection';
import './App.scss';
import './Header.scss';
import './ProfileInfo.scss';
import './Bio.scss';
import './PostsSection.scss';


import { dinaData } from './Data';

const App = () => {
  const { name, profilePicUrl, coverPhotoUrl } = dinaData;

  return (
    <div className="app">
      <Header />
      <div className="profile-container">
        <ProfileInfo name={name} profilePicUrl={profilePicUrl} coverPhotoUrl={coverPhotoUrl} />
        <div className="sections-container">
          <div className="bio-container">
            <Bio />
          </div>
          <div className="posts-container">
            <PostsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
