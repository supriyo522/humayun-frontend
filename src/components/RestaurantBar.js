import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import './RestaurantBar.css'; // Custom styles for your component
import img1 from './Screenshot/bar1.png'; // Import your carousel images
import img2 from './Screenshot/bar2.png';
import img3 from './Screenshot/bar3.png';
import img4 from './Screenshot/bar4.png';
import img5 from './Screenshot/bar5.png';
import img6 from './Screenshot/bar6.png';
import img7 from './Screenshot/bar7.png';


const RestaurantBar = () => {
  return (
    <div className="restaurant-bar-container">
      <h1>Restaurant cum Bar</h1>
      
      <Carousel 
        showArrows={true} 
        autoPlay 
        infiniteLoop 
        interval={3000} 
        showThumbs={false} 
        dynamicHeight={true}
      >
        <div>
          <img src={img1} alt="Restaurant" />
          <p className="legend">Elegant Dining Area</p>
        </div>
        <div>
          <img src={img2} alt="Bar" />
          <p className="legend">Cozy Bar Space</p>
        </div>
        <div>
          <img src={img3} alt="Cuisine" />
          <p className="legend">Delicious Cuisine</p>
        </div>
        <div>
          <img src={img4} alt="Cuisine" />
          <p className="legend">Delicious Cuisine</p>
        </div>
        <div>
          <img src={img5} alt="Cuisine" />
          <p className="legend">Delicious Cuisine</p>
        </div>
        <div>
          <img src={img6} alt="Cuisine" />
          <p className="legend">Delicious Cuisine</p>
        </div>
        <div>
          <img src={img7} alt="Cuisine" />
          <p className="legend">Delicious Cuisine</p>
        </div>
      </Carousel>

      <div className="restaurant-bar-text">
        <p>
          Welcome to our exquisite Restaurant cum Bar, an establishment that boasts
          over 7000 sqft of air-conditioned luxury in the heart of Kolkata. Our venue
          provides a perfect blend of delicious food, delightful drinks, and an
          ambient atmosphere that is second to none. Whether you're here for a
          family dinner, a casual meet-up with friends, or a special event, we
          promise an unforgettable dining experience.
        </p>
        <p>
          <strong>Main Bar</strong>: Featuring a wide range of premium beverages,
          including spirits, cocktails, and mocktails, our bar ensures you have the
          perfect drink to accompany your meal.
        </p>
        <p>
          <strong>Additional Bars</strong>: We also house two additional bar sections
          offering a more intimate setting for smaller gatherings.
        </p>
        <p>
          Enjoy our signature dishes, including an array of Continental, Indian, and
          Chinese cuisines prepared by our experienced chefs.
        </p>
      </div>
    </div>
  );
};

export default RestaurantBar;
