import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Artist John</div>
        <div className="flex justify-center space-x-4 flex-grow">
          <button onClick={() => scrollToSection('home')} className="hover:text-gray-600">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-gray-600">
            About Me
          </button>
          <button onClick={() => scrollToSection('gallery')}className="hover:text-gray-600">
            Gallery
          </button>
        </div>
        <button className="hover:text-gray-600">
            Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;