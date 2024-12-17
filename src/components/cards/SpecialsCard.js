import React from 'react';
import './SpecialsCard.css'; // Import the CSS file

const SpecialsCard = ({ imageUrl, dish, description, price, onBuy }) => {
  return (
    <div className="specials-card">
      <img src={imageUrl} alt={dish} className="specials-card-image" />
      <h2 className="specials-card-dish">{dish}</h2>
      <p className="specials-card-description">{description}</p>
      <span className="specials-card-price">{price}</span>
      <button onClick={onBuy} className="buy-button">order</button>
    </div>
  );
};

export default SpecialsCard;

