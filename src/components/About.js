import React from 'react';
import Chef from '../assets/restaurant chef B.jpg';
import { FaUtensils, FaHistory, FaLeaf } from 'react-icons/fa';
import './About.css'; // Import the CSS file

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={Chef} alt="Chef Cooking" />
      </div>
      <div className="about-text-container">
        <h1>About Little Lemon</h1>
        <div className="about-icons">
          <div className="icon animated-box">
            <FaUtensils />
            <p>Delicious Cuisine</p>
          </div>
          <div className="icon animated-box">
            <FaHistory />
            <p>Established in 2024</p>
          </div>
          <div className="icon animated-box">
            <FaLeaf />
            <p>Fresh Ingredients</p>
          </div>
        </div>
        <p>
          Welcome to Little Lemon, where the flavors of Italy come alive in every bite. Established in 2024, we have been dedicated to serving authentic Italian cuisine crafted with love and the freshest ingredients. Our cozy restaurant offers a warm and inviting atmosphere, perfect for family dinners, romantic dates, and special occasions.
        </p>
        <p>
          At Little Lemon, we believe in the magic of good food and the joy it brings. Our menu features a wide variety of dishes, from classic pasta and wood-fired pizzas to delectable desserts. Each dish is prepared with utmost care by our passionate chefs who bring traditional recipes to life.
        </p>
        <p>
          We are committed to using fresh, locally-sourced ingredients to ensure the highest quality in every meal. Whether you are here for a quick bite or a leisurely dinner, our goal is to provide an unforgettable dining experience. Come join us and taste the difference at Little Lemon!
        </p>
      </div>
    </div>
  );
}

export default About;
