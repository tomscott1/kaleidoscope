import React from 'react';
import './styles.css';
import logo from '../../assets/logo.svg'; // Adjust the path if needed

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="menu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Portfolios</a>
            <a href="#">Contact Us</a>
          </div>
          <a href="#" className="cta">Book A Demo</a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
