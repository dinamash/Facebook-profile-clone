import React from 'react';
import './Post.scss';


const Post = ({ profilePicUrl, username, timestamp, content, children }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-profile-pic" src={profilePicUrl} alt="Profile" />
        <div className="post-username-timestamp">
          <h3 className="post-username">{username}</h3>
          <p className="post-timestamp">{timestamp}</p>
        </div>
      </div>
      <div className="post-content-wrapper">
        <p className="post-content">{content}</p>
        {children}
      </div>
    </div>
  );
};

export default Post;
