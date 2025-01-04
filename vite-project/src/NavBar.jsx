// src/NavBar.jsx
import React from 'react';
import './NavBar.css';  // We will style the navbar in this CSS file
import BackgroundChanger from './BackgroundChanger.jsx';
import { useState } from "react";
import ToggleButton from './BackgroundChanger.jsx';
const NavBar = () => {
    const [isDark, setIsDark] = useState(false);

  const handleToggle = (isOn) => {
    setIsDark(isOn); // Update the state based on toggle
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="logo-img" /> {/* Replace with your logo */}
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#aboutus">About Us</a></li>
        <div
      className={`min-h-screen ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            Toggle Background Color
          </h1>
          <ToggleButton onToggle={handleToggle} />
        </div>
      </div>
    </div>

      </ul>
    </nav>
  );
};

export default NavBar;
