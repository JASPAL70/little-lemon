import React from 'react';
import SpecialsCard from './cards/SpecialsCard'; // Importing SpecialsCard component
import GreekSalad from '../assets/greek-salad.jpg'; // Ensure correct image import
import Bruschetta from '../assets/bruschetta.jpg';
import LemonDessert from '../assets/lemon-dessert.jpg';

function Specials() {
  const specials = [
    {
      imageUrl: GreekSalad,
      dish: "Greek salad",
      description: "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: '₹250'
    },
    {
      imageUrl: Bruschetta,
      dish: "Bruschetta",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: '₹200'
    },
    {
      imageUrl: LemonDessert,
      dish: "Lemon Dessert",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: '₹180'
    }
  ];

  const handleBuy = (item) => {
    alert(`You bought: ${item.dish} for ${item.price}`);
    // Add the item to cart logic can be added here
  };

  return (
    <div className="specials-container">
      <h1>Specials</h1>
      <br/>
      <div className="specials-cards">
        {specials.map((special, idx) => (
          <SpecialsCard
            key={idx}
            imageUrl={special.imageUrl}
            dish={special.dish}
            description={special.description}
            price={special.price}
            onBuy={() => handleBuy(special)}
          />
        ))}
      </div>
    </div>
  );
}

export default Specials;




