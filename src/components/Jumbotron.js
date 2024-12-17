import React from 'react';
import Food from '../assets/restaurant-food.jpg';
import { useNavigate } from 'react-router-dom';
import './Jumbotron.css'; // Import the CSS file

function Jumbotron() {
  const navigate = useNavigate();

  return (
    <div className="jumbotron-container">
      <div className="jumbotron-content">
        <h1>Little Lemon</h1>
        <div className="jumbotron-details">
          <p>Welcome to Little Lemon, where the flavors of Italy come alive in every bite.</p>
          <p>
            Since our inception in 2024, we have been dedicated to serving authentic Italian cuisine
            crafted with love and the freshest ingredients. Our cozy restaurant offers a warm and inviting atmosphere,
            perfect for family dinners, romantic dates, and special occasions.
          </p>
          <p>
            Come and enjoy our wide variety of dishes, from classic pasta and wood-fired pizzas to delectable desserts.
            Our chefs are passionate about bringing traditional recipes to your table, ensuring an unforgettable dining experience.
          </p>
          <button onClick={() => { navigate('/booking') }} className="reserve-button">Reserve Table</button>
        </div>
      </div>
      <div className="jumbotron-image">
        <img src={Food} alt="Restaurant Food"/>
      </div>
    </div>
  );
}

export default Jumbotron;

// import React from 'react';
// import Food from '../assets/restaurant-food.jpg'
// import { useNavigate } from 'react-router-dom';

// function Jumbotron() {
//   const navigate = useNavigate();

//   return (
//     <div className="jumbotron-container">
//       <div>
//         <h1>Little Lemon</h1>
//         <br/>
//         <button onClick={() => { navigate('/booking') }}>Reserve Table</button>
//       </div>
//       <div>
//         <img src={Food} alt="Restaurant Food"/>
//       </div>
//     </div>
//   )
// }

// export default Jumbotron;