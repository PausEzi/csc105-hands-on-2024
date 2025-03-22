import React from 'react';
import img1 from '../assets/images.jpg'
const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen flex flex-row sm:flex-col items-center justify-center p-8 bg-white">
      <div className="w-full md:w-1/4 flex justify-center mb-8 sm:mb-0">
        <img src={img1}alt="Profile" className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-lg"/>
      </div>

      <div className="w-full sm:w-1/2 text-center sm:text-left">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-6">
            I'm often called the "King of Pop," a groundbreaking singer, songwriter, and dancer who became a global music icon. Known for my distinctive voice, innovative dance moves, and timeless hits like "Thriller" and "Billie Jean," I revolutionized the music industry. Despite personal struggles and controversy, my legacy continues to inspire artists and entertain audiences worldwide.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutMe;