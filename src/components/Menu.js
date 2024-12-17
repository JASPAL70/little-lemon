import React from 'react';
import './Menu.css'; // Import the CSS file

// Import images
import SpaghettiCarbonara from '../assets/menu/spaghetti-carbonara.jpg';
import MargheritaPizza from '../assets/menu/margherita-pizza.jpg';
import CaesarSalad from '../assets/menu/caesar-salad.jpg';
import GrilledChicken from '../assets/menu/grilled-chicken.jpg';
import Tiramisu from '../assets/menu/tiramisu.jpg';
import MushroomRisotto from '../assets/menu/mushroom-risotto.jpg';
import GarlicBread from '../assets/menu/garlic-bread.jpg';
import CapreseSalad from '../assets/menu/caprese-salad.jpg'; // Corrected import path
import Lasagna from '../assets/menu/lasagna.jpg';
import Bruschetta from '../assets/menu/bruschetta.jpg';
import FettuccineAlfredo from '../assets/menu/fettuccine-alfredo.jpg';
import MinestroneSoup from '../assets/menu/minestrone-soup.jpg';
import ProsciuttoEMelone from '../assets/menu/prosciutto-e-melone.jpg';
import PestoPasta from '../assets/menu/pesto-pasta.jpg';
import Gnocchi from '../assets/menu/gnocchi.jpg';
import Ravioli from '../assets/menu/ravioli.jpg';
import PizzaQuattroStagioni from '../assets/menu/pizza-quattro-stagioni.jpg';
import PannaCotta from '../assets/menu/panna-cotta.jpg';
import Affogato from '../assets/menu/affogato.jpg';
import Espresso from '../assets/menu/espresso.jpg';
import GreekSalad from '../assets/menu/greek-salad.jpg';
import LemonDessert from '../assets/menu/lemon-dessert.jpg';

const menuItems = [
  { id: 1, name: 'Spaghetti Carbonara', price: '₹350', image: SpaghettiCarbonara },
  { id: 2, name: 'Margherita Pizza', price: '₹300', image: MargheritaPizza },
  { id: 3, name: 'Caesar Salad', price: '₹250', image: CaesarSalad },
  { id: 4, name: 'Grilled Chicken', price: '₹400', image: GrilledChicken },
  { id: 5, name: 'Tiramisu', price: '₹200', image: Tiramisu },
  { id: 6, name: 'Mushroom Risotto', price: '₹350', image: MushroomRisotto },
  { id: 7, name: 'Garlic Bread', price: '₹150', image: GarlicBread },
  { id: 8, name: 'Caprese Salad', price: '₹250', image: CapreseSalad }, // Corrected image path
  { id: 9, name: 'Lasagna', price: '₹450', image: Lasagna },
  { id: 10, name: 'Bruschetta', price: '₹200', image: Bruschetta },
  { id: 11, name: 'Fettuccine Alfredo', price: '₹380', image: FettuccineAlfredo },
  { id: 12, name: 'Minestrone Soup', price: '₹180', image: MinestroneSoup },
  { id: 13, name: 'Prosciutto e Melone', price: '₹500', image: ProsciuttoEMelone },
  { id: 14, name: 'Pesto Pasta', price: '₹320', image: PestoPasta },
  { id: 15, name: 'Gnocchi', price: '₹300', image: Gnocchi },
  { id: 16, name: 'Ravioli', price: '₹350', image: Ravioli },
  { id: 17, name: 'Pizza Quattro Stagioni', price: '₹380', image: PizzaQuattroStagioni },
  { id: 18, name: 'Panna Cotta', price: '₹250', image: PannaCotta },
  { id: 19, name: 'Affogato', price: '₹180', image: Affogato },
  { id: 20, name: 'Espresso', price: '₹100', image: Espresso },
  { id: 21, name: 'Greek Salad', price: '₹250', image: GreekSalad },
  { id: 22, name: 'Lemon Dessert', price: '₹180', image: LemonDessert }
];

const handleBuy = (item) => {
  alert(`You bought: ${item.name} for ${item.price}`);
  // Add the item to cart logic can be added here
};

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <ul className="menu-list">
        {menuItems.map(item => (
          <li key={item.id} className="menu-item">
            <div className="menu-item-image-container">
              <img src={item.image} alt={item.name} className="menu-item-image" />
            </div>
            <div className="menu-item-details">
              <span className="menu-item-name">{item.name}</span>
              <span className="menu-item-price">{item.price}</span>
              <button onClick={() => handleBuy(item)} className="buy-button">order</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

// import React from 'react';
// import './Menu.css'; // Import the CSS file

// // Import images
// import SpaghettiCarbonara from '../assets/menu/spaghetti-carbonara.jpg';
// import MargheritaPizza from '../assets/menu/margherita-pizza.jpg';
// import CaesarSalad from '../assets/menu/caesar-salad.jpg';
// import GrilledChicken from '../assets/menu/grilled-chicken.jpg';
// import Tiramisu from '../assets/menu/tiramisu.jpg';
// import MushroomRisotto from '../assets/menu/mushroom-risotto.jpg';
// import GarlicBread from '../assets/menu/garlic-bread.jpg';
// import CapreseSalad from '../assets/menu/caesar-salad.jpg';
// import Lasagna from '../assets/menu/lasagna.jpg';
// import Bruschetta from '../assets/menu/bruschetta.jpg';
// import FettuccineAlfredo from '../assets/menu/fettuccine-alfredo.jpg';
// import MinestroneSoup from '../assets/menu/minestrone-soup.jpg';
// import ProsciuttoEMelone from '../assets/menu/prosciutto-e-melone.jpg';
// import PestoPasta from '../assets/menu/pesto-pasta.jpg';
// import Gnocchi from '../assets/menu/gnocchi.jpg';
// import Ravioli from '../assets/menu/ravioli.jpg';
// import PizzaQuattroStagioni from '../assets/menu/pizza-quattro-stagioni.jpg';
// import PannaCotta from '../assets/menu/panna-cotta.jpg';
// import Affogato from '../assets/menu/affogato.jpg';
// import Espresso from '../assets/menu/espresso.jpg';
// import GreekSalad from '../assets/greek-salad.jpg';
// import LemonDessert from '../assets/lemon-dessert.jpg';

// const Menu = () => {
//   const menuItems = [
//     { id: 1, name: 'Spaghetti Carbonara', price: '₹350', image: SpaghettiCarbonara },
//     { id: 2, name: 'Margherita Pizza', price: '₹300', image: MargheritaPizza },
//     { id: 3, name: 'Caesar Salad', price: '₹250', image: CaesarSalad },
//     { id: 4, name: 'Grilled Chicken', price: '₹400', image: GrilledChicken },
//     { id: 5, name: 'Tiramisu', price: '₹200', image: Tiramisu },
//     { id: 6, name: 'Mushroom Risotto', price: '₹350', image: MushroomRisotto },
//     { id: 7, name: 'Garlic Bread', price: '₹150', image: GarlicBread },
//     { id: 8, name: 'Caprese Salad', price: '₹250', image: CapreseSalad },
//     { id: 9, name: 'Lasagna', price: '₹450', image: Lasagna },
//     { id: 10, name: 'Bruschetta', price: '₹200', image: Bruschetta },
//     { id: 11, name: 'Fettuccine Alfredo', price: '₹380', image: FettuccineAlfredo },
//     { id: 12, name: 'Minestrone Soup', price: '₹180', image: MinestroneSoup },
//     { id: 13, name: 'Prosciutto e Melone', price: '₹500', image: ProsciuttoEMelone },
//     { id: 14, name: 'Pesto Pasta', price: '₹320', image: PestoPasta },
//     { id: 15, name: 'Gnocchi', price: '₹300', image: Gnocchi },
//     { id: 16, name: 'Ravioli', price: '₹350', image: Ravioli },
//     { id: 17, name: 'Pizza Quattro Stagioni', price: '₹380', image: PizzaQuattroStagioni },
//     { id: 18, name: 'Panna Cotta', price: '₹250', image: PannaCotta },
//     { id: 19, name: 'Affogato', price: '₹180', image: Affogato },
//     { id: 20, name: 'Espresso', price: '₹100', image: Espresso },
//     { id: 21, name: 'Greek Salad', price: '₹250', image: GreekSalad },
//     { id: 22, name: 'Lemon Dessert', price: '₹180', image: LemonDessert }
//   ];

//   const handleBuy = (item) => {
//     alert(`You bought: ${item.name} for ${item.price}`);
//     // Add the item to cart logic can be added here
//   };

// const Menu = () => {
//   return (
//     <div className="menu-container">
//       <h1>Our Menu</h1>
//       <ul className="menu-list">
//         {menuItems.map(item => (
//           <li key={item.id} className="menu-item">
//             <div className="menu-item-image-container">
//               <img src={item.image} alt={item.name} className="menu-item-image" />
//             </div>
//             <div className="menu-item-details">
//               <span className="menu-item-name">{item.name}</span>
//               <span className="menu-item-price">{item.price}</span>
//               <button onClick={() => handleBuy(item)} className="buy-button">Buy</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// };

// export default Menu;

// import React from 'react';
// import './Menu.css'; // Import the CSS file

// const menuItems = [
//   { id: 1, name: 'Spaghetti Carbonara', price: '₹350', image: 'https://via.placeholder.com/150' },
//   { id: 2, name: 'Margherita Pizza', price: '₹300', image: 'https://via.placeholder.com/150' },
//   { id: 3, name: 'Caesar Salad', price: '₹250', image: 'https://via.placeholder.com/150' },
//   { id: 4, name: 'Grilled Chicken', price: '₹400', image: 'https://via.placeholder.com/150' },
//   { id: 5, name: 'Tiramisu', price: '₹200', image: 'https://via.placeholder.com/150' },
//   { id: 6, name: 'Mushroom Risotto', price: '₹350', image: 'https://via.placeholder.com/150' },
//   { id: 7, name: 'Garlic Bread', price: '₹150', image: 'https://via.placeholder.com/150' },
//   { id: 8, name: 'Caprese Salad', price: '₹250', image: 'https://via.placeholder.com/150' },
//   { id: 9, name: 'Lasagna', price: '₹450', image: 'https://via.placeholder.com/150' },
//   { id: 10, name: 'Bruschetta', price: '₹200', image: 'https://via.placeholder.com/150' },
//   { id: 11, name: 'Fettuccine Alfredo', price: '₹380', image: 'https://via.placeholder.com/150' },
//   { id: 12, name: 'Minestrone Soup', price: '₹180', image: 'https://via.placeholder.com/150' },
//   { id: 13, name: 'Prosciutto e Melone', price: '₹500', image: 'https://via.placeholder.com/150' },
//   { id: 14, name: 'Pesto Pasta', price: '₹320', image: 'https://via.placeholder.com/150' },
//   { id: 15, name: 'Gnocchi', price: '₹300', image: 'https://via.placeholder.com/150' },
//   { id: 16, name: 'Ravioli', price: '₹350', image: 'https://via.placeholder.com/150' },
//   { id: 17, name: 'Pizza Quattro Stagioni', price: '₹380', image: 'https://via.placeholder.com/150' },
//   { id: 18, name: 'Panna Cotta', price: '₹250', image: 'https://via.placeholder.com/150' },
//   { id: 19, name: 'Affogato', price: '₹180', image: 'https://via.placeholder.com/150' },
//   { id: 20, name: 'Espresso', price: '₹100', image: 'https://via.placeholder.com/150' }
// ];

// const handleBuy = (item) => {
//   alert(`You bought: ${item.name} for ${item.price}`);
//   // Add the item to cart logic can be added here
// };

// const Menu = () => {
//   return (
//     <div className="menu-container">
//       <h1>Our Menu</h1>
//       <ul className="menu-list">
//         {menuItems.map(item => (
//           <li key={item.id} className="menu-item">
//             <div className="menu-item-image-container">
//               <img src={item.image} alt={item.name} className="menu-item-image" />
//             </div>
//             <div className="menu-item-details">
//               <span className="menu-item-name">{item.name}</span>
//               <span className="menu-item-price">{item.price}</span>
//               <button onClick={() => handleBuy(item)} className="buy-button">Buy</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Menu;
