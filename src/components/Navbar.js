import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img3 from './Screenshot/HUMAYAN TIGER.png';
import './Navbar.css'; // CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSustainabilityDropdownOpen, setIsSustainabilityDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSustainabilityDropdown = () => {
    setIsSustainabilityDropdownOpen(!isSustainabilityDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={toggleMenu} style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={img3} alt="Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li className="dropdown" onClick={toggleDropdown}>
            <span className="dropdown-title">Products</span>
            <span className="caret"></span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/products/service" onClick={toggleMenu}>Restaurant cum Bar</Link></li>
                <li><Link to="/products/catering" onClick={toggleMenu}>Catering Service</Link></li>
                <li><Link to="/products/renting" onClick={toggleMenu}>Renting & Leasing Properties</Link></li>
              </ul>
            )}
          </li>
          <li className="dropdown" onClick={toggleSustainabilityDropdown}>
            <span className="dropdown-title">Sustainability</span>
            <span className="caret"></span>
            {isSustainabilityDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/sustainability/environment" onClick={toggleMenu}>Environment</Link></li>
                <li><Link to="/sustainability/social" onClick={toggleMenu}>Social</Link></li>
                <li><Link to="/sustainability/governance" onClick={toggleMenu}>Governance</Link></li>
              </ul>
            )}
          </li>
          {/* Additional Navigation Links */}
          <li><Link to="/media" onClick={toggleMenu}>Media</Link></li>
          <li><Link to="/careers" onClick={toggleMenu}>Careers</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>ContactUs</Link></li>
          <li><Link to="/customers" onClick={toggleMenu}>OurCustomers</Link></li>
          <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
          <li><Link to="/newsroom" onClick={toggleMenu}>Newsroom</Link></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
