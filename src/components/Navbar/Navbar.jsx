import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './Navbar.css';
import logo from '../../images/logo.png';
import Button from '../Button/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <img src={logo} alt="logo" />
      {isMobile ? (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Open'}
          </button>
          {isOpen && (
            <ul>
              <Button className="navbar-button" onClick={handleClick}>
                Boton
              </Button>
            </ul>
          )}
        </>
      ) : (
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        
      )}
    </nav>
  );
};

export default Navbar;