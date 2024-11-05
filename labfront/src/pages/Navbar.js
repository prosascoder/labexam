import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  const goToAccount = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>MyApp</h1>
      </div>
      <div className="navbar-buttons">
        <button className="navbar-button home" onClick={goToHome}>Home</button>
        <button className="navbar-button login" onClick={goToAccount}>Account</button>
      </div>
    </nav>
  );
};

export default Navbar;
