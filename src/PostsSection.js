import React from 'react';
import './PostsSection.scss';
import Post from './Post';
import image from './logo512.png';
import image1 from './blank-profile-picture-973460_1280.webp';

const PostsSection = () => {
  return (
    <div className="posts-section">
      <Post
        profilePicUrl={image1}
        username="Dina Mashayekh"
        timestamp="2 hours ago"
        content="Just learned some amazing things about React! 🚀 #React"
      />
      <Post
        profilePicUrl={image1}
        username="John Doe" 
        timestamp="1 hour ago" 
        content="Just learned some amazing things about React! 🚀 #React"
      >
        <div>
          <p>This is an amazing image I took during my trip!</p>
          <img src={image} alt="Captured Moment" />
        </div>
      </Post>
      <Post
        profilePicUrl={image1}
        username="Jane Smith" 
        timestamp="30 minutes ago" 
        content="Found a great resource for learning React. Check it out!" // Change this to the desired content
      >
        <div>
          <p>Check out this awesome React learning resource!</p>
          <a href="https://example.com/react-learning" target="_blank" rel="noopener noreferrer">
            React Learning Page
          </a>
        </div>
      </Post>
    </div>
  );
};

export default PostsSection;
