import React from 'react';
import img1 from '../components/Screenshot/image1.png';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left side - Image */}
        <div className="about-image">
          <img 
            src={img1} 
            alt="Company Heritage" 
          />
        </div>

        {/* Right side - Text */}
        <div className="about-text">
          <h1>About Us</h1>
          <p >The Company was formed in 1928. The rich heritage of the company
            includes the ownership of iconic New Empire Cinema Building and Light
            House Cinema Building in the heart of Kolkata city. Apart from the
            exhibition of feature films the company has other commercial property
            which has been a source of rental income. The company has further ventured
            into the Restaurant & Cafe Business since 1990 and operates under the popular
            brand name “THE SCOOP”, fully air-conditioned, over an approximate area of
            3500 sqft. The company is also operating a fully air-conditioned BAR CUM
            RESTAURANT under the name and style of “New Empire Cinema Bar &
            Restaurant – Main Bar along with Additional Bar I & II" over an area of
            7000 sqft in the city of Kolkata. The company is also managing &
            operating two additional restaurants under the names of “The
            Tiffin Box” and “The Food Bowl”. We are also successfully running
            a Heritage Cafe in the Zoological Garden at Alipore, Kolkata, which is
            fully air-conditioned over an area of approximately 2000 sqft, since
            January 18, 2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
