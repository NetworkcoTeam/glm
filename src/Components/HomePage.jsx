import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Navbar from './Navbar'

function HomePage() {
  return (
    <div>
       <Navbar/>
     <section id="home" className="h-screen flex flex-col  mr-0  bg-gradient-to-r bg-black  text-white text-left py-28">
      <h1 className="text-5xl md:text-5xl font-bold mb-4 mr-0 text-amber-400 ml-12 italic">Gold Label Media</h1>
      <p className="text-lg md:text-xl max-w-xl mb-8 ml-4">
       Welcome to gold label media-where ideas meet impact.
       We are not just your marketing agency, we’re your growth partners. At the heart of everything we do is a commitment to creativity, strategy,impact and results
      </p>
     
     <button className='bg-gray-800 w-32 rounded-3xl ml-2 h-12'>
      Contact Us
     </button>

       
    </section>
    </div>

  )
}

export default HomePage