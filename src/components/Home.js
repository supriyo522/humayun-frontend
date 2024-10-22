import React from 'react';
import img2 from './Screenshot/image2.png'; // Adjust path according to your file structure
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
      <img src={img2} alt="Hero" className="full-page-image" />
        {/* You can uncomment this if you want a heading or button later */}
        {/* <h1>Welcome to Our Website</h1> */}
        {/* <button className="cta-button">Learn More</button> */}
      </div>
    </div>
  );
};

export default Home;
