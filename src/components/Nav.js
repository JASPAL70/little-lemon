import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import './Nav.css'; // Import the CSS file

function Nav() {
  return (
    <header className="navbar">
      <div className="navbar-header">
        <img src={Logo} alt="Little Lemon Logo" className="navbar-logo" />
      </div>
      <nav>
        <ul className="navbar-links">
          <li className="navbar-item"><Link to="/">Home</Link></li>
          <li className="navbar-item"><Link to="/about">About</Link></li>
          <li className="navbar-item"><Link to="/menu">Menu</Link></li>
          <li className="navbar-item"><Link to="/booking">Reservations</Link></li>
          <li className="navbar-item"><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Nav.css'; // Import the CSS file

// function Nav() {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-links">
//         <li className="navbar-item"><Link to="/">Home</Link></li>
//         <li className="navbar-item"><Link to="/about">About</Link></li>
//         <li className="navbar-item"><Link to="/menu">Menu</Link></li>
//         <li className="navbar-item"><Link to="/booking">Reservations</Link></li>
//         <li className="navbar-item"><Link to="/order">Order Online</Link></li>
//         <li className="navbar-item"><Link to="/login">Login</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Nav;
