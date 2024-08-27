import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black p-4 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-10 mr-2" />
          Generative AI
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
          <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded">About</Link>
          <Link to="/Overview" className="block text-white px-3 py-2">Overview</Link>

          {/* Add more links as needed */}
        </div>
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="block text-white px-3 py-2">Home</Link>
        <Link to="/about" className="block text-white px-3 py-2">About</Link>
        <Link to="/Overview" className="block text-white px-3 py-2">Overview</Link>
        {/* Add more links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
