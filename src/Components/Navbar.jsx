import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white py-4 px-6 flex items-center justify-between relative shadow-md z-50">
      
      {/* Left Nav Links */}
      <div className="flex gap-6 font-extrabold">
        <Link to="/" className="hover:text-gray-500">Home</Link>
        <Link to="/about" className="hover:text-gray-500">About</Link>
        <Link to="/service" className="hover:text-gray-500">Services</Link>
        <Link to="/portfolio" className="hover:text-gray-500">Portfolio</Link>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 ">
        <img
          src="Logo.png"
          alt="Logo"
          className="h-10"
        />
      </div>

      {/* Right Contact Link */}
      <div className="ml-auto">
        <Link to="/ContactUs" className="hover:text-gray-500 font-extrabold">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
