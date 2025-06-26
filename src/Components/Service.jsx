import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // ✅ Import Footer

const services = [
  {
    title: "Market Research",
    description: "In-depth analysis to understand market trends and consumer behaviour...",
    iframe: "https://lottie.host/embed/4d396114-30ed-48f3-a7d6-7c2f374cc1a5/yuFTKJPGVh.lottie",
  },
  {
    title: "Social Media Content Creation",
    description: "Design and production of engaging content for social media platforms...",
    iframe: "https://lottie.host/embed/76022b38-845a-4e78-8769-7c1b52171171/8HS65nGQCR.lottie",
  },
  {
    title: "Photography",
    description: "Professional photography services for events, products, and promotional materials...",
    iframe: "https://lottie.host/embed/94ae6060-19f6-4269-ba4e-3b9879ba92ce/x32BEQu1yJ.lottie",
  },
  {
    title: "Market Strategy",
    description: "Development of comprehensive marketing plans tailored to client objectives...",
    iframe: "https://lottie.host/embed/68f2a7dd-4439-448f-ada0-46d0a5345017/1PMKyEi49H.lottie",
  },
  {
    title: "Videography",
    description: "High-quality video production for marketing campaigns and storytelling...",
    iframe: "https://lottie.host/embed/6d18cc6c-8122-48b7-bd08-9ba230b75cb0/mT5RVNUZoq.lottie",
  },
];

const style = `
  .perspective {
    perspective: 1000px;
  }
  .preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
`;

function FlipCard({ title, description, iframe }) {
  return (
    <div className="group w-full h-64 perspective">
      <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden bg-gray-900 text-amber-800 rounded-2xl shadow-lg flex flex-col">
          <div className="w-full h-40 rounded-t-2xl overflow-hidden">
            <iframe
              src={iframe}
              className="w-full h-full"
              allowFullScreen
              title={title}
            ></iframe>
          </div>
          <div className="p-2">
            <h2 className="text-lg font-semibold text-amber-500 text-center italic">{title}</h2>
          </div>
        </div>

        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-800 text-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 space-y-4">
          <h2 className="text-base font-semibold text-amber-400 text-center italic">{title}</h2>
          <p className="text-xs text-center">{description}</p>
          <button className="mt-2 px-4 py-1 bg-amber-500 text-black text-sm font-semibold rounded-lg hover:bg-amber-400 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Service() {
  return (
    <>
      <style>{style}</style>
      <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-gray-700 text-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="mt-12 text-4xl font-bold text-center text-amber-200 mb-12">Our Services</h1>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service, index) => (
              <FlipCard
                key={index}
                title={service.title}
                description={service.description}
                iframe={service.iframe}
              />
            ))}
          </div>
        </div>
        <Footer /> {/* ✅ Footer added at the end */}
      </div>
    </>
  );
}
