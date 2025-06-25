import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import  '../CSSNeeded/VRBackground.css'


function HomePage() {
  return (
    <div className="VRBackground">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen  bg-gradient-to-r from-black via-gray-800 to-gray-700 text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20"
      >
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-200 italic">
           
            Gold Label Media
          </h1>

          <p className="text-lg md:text-xl ">
            Welcome to Gold Label Media — where ideas meet impact.
            We’re not just your marketing agency, we’re your growth partners.
            At the heart of everything we do is a commitment to creativity, strategy, impact, and results.
            We don’t do boring. Whether you are building a brand, launching a campaign, or in need of logo designs, we bring fresh thinking, digital expertise, and effective strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/ContactUs">
              <button className="bg-gray-800 w-36 rounded-3xl h-12 font-bold hover:text-amber-300 hover:scale-110 transition-transform">
                Contact Us
              </button>
            </Link>

            <Link to="/Portfolio">
              <button className="bg-gray-800 w-36 rounded-3xl h-12 font-bold hover:text-amber-300 hover:scale-110 transition-transform">
                Portfolio
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-pulse ">
       
          <img
            src="GLMO.png"
            alt="Gold Label"
            className="rounded-4xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
