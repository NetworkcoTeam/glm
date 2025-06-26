import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Portfolio() {
  const projects = [
    {
      title: 'RAMChemicals',
      description: 'A brief description of project one.',
      image: ['CLM.png'],
    },
    {
      title: 'Thukusani',
      description: 'A brief description of project two.',
      image: ['TakuLogo.png'],
    },
    {
      title: 'The NetworkCo',
      description: 'A brief description of project three.',
      image: ['NetC.png'],
    },
    {
      title: 'Cailey Ann Services',
      description: 'A brief description of project four.',
      image: ['1.png'],
    },
    {
      title: 'Gold Label Media',
      description: 'A brief description of project five.',
      image: ['Logo.png'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-gray-700 text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl font-bold text-amber-300 mb-4">Welcome to Our Portfolio</h2>
        <p className="text-gray-300 text-lg">
          Below are the projects we have participated in:
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-10 px-6 bg-gradient-to-r from-black via-gray-800 to-gray-700"
      >
        <h3 className="text-3xl font-bold text-center text-amber-300 mb-10">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border-2 border-amber-600 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center p-4"
            >
              {/* Image(s) */}
              <div className="flex justify-center items-center mb-4">
                {project.image.map((imgSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imgSrc}
                    alt={`${project.title} ${imgIndex + 1}`}
                    className=" h-40 object-cover rounded-3xl"
                  />
                ))}
              </div>

              {/* Title & Description */}
              <h4 className="text-xl font-semibold text-amber-400 mb-2">{project.title}</h4>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 text-center ">
        <h3 className="text-3xl font-bold text-amber-300 mb-6">Get in Touch</h3>
        <p className="mb-4 text-gray-400">Feel free to reach out for collaborations or just to say hi!</p>
        <a
          href="mailto:info@glmedia.co.za"
          className="bg-amber-500 text-black px-6 py-2 rounded hover:bg-amber-400 transition"
        >
          Contact Me
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default Portfolio;
