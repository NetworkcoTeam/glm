import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-white py-4 px-6 flex items-center justify-between relative shadow-md z-50">
      
      {/* Left Nav Links */}
      <div className="flex gap-6">
        <a href="#home" className="hover:text-cyan-400">Home</a>
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#services" className="hover:text-cyan-400">Services</a>
        <a href="#portfolio" className="hover:text-cyan-400">Portfolio</a>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img
          src="https://via.placeholder.com/100x40?text=LOGO"
          alt="Logo"
          className="h-10"
        />
      </div>

      {/* Right Contact Link */}
      <div className="ml-auto">
        <a href="#contact" className="hover:text-cyan-400 font-semibold">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
