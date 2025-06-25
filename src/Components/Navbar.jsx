import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-6 shadow-md z-50">
      <div className="flex items-center justify-between">
        {/* Left Nav Links - Desktop */}
        <div className="hidden md:flex gap-6 font-extrabold">
          <Link to="/" className="hover:text-gray-500">Home</Link>
          <Link to="/about" className="hover:text-gray-500">About</Link>
          <Link to="/service" className="hover:text-gray-500">Services</Link>
          <Link to="/portfolio" className="hover:text-gray-500">Portfolio</Link>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
           <Link to ="/Homepage">
           <img src="/Logo.png" alt="Logo" className="h-10" />
           </Link>
          
        </div>

        {/* Right Contact Link - Desktop + Mobile Toggle */}
        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden md:block font-extrabold">
            <Link to="/ContactUs" className="hover:text-gray-500">Contact Us</Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 text-2xl font-bold">
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-400"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>

          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-500">About</Link>
          <Link to="/service" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Services</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Portfolio</Link>
          <Link to="/ContactUs" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
