import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/About';
import Menu from './components/Menu'
import Login from './components/Login';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/booking" element={<BookingPage />}/>
            <Route path="/confirmed" element={<ConfirmedBooking />}/>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
