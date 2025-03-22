import React from 'react';
import img1 from '../assets/mj.jpg';
import img2 from '../assets/mk.jpg';
import img3 from '../assets/mm.jpg';
import img4 from '../assets/me.jpg';
import img from '../assets/images.jpg';
import img5 from '../assets/images1.jpg';

const Gallery = () => {
  return (
    <section id="gallery" className="h-screen flex flex-col justify-center items-center text-center bg-gray-200">
           <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5images justify-center items-center">
              <p className="...">
                  <img src={img1}alt="Profile" className="w-1/2  object-cover shadow-lg"/></p>
              <p className="...">
                  <img src={img2}alt="Profile" className="w-1/2  object-cover shadow-lg"/></p>
              <p className="...">
                  <img src={img}alt="Profile" className="w-1/2 object-cover shadow-lg"/></p>
              <p className="...">
                  <img src={img3}alt="Profile" className="w-1/2  object-cover shadow-lg"/></p>
              <p className="...">
                  <img src={img4}alt="Profile" className="w-1/2 object-cover shadow-lg"/></p>
              <p className="...">
                  <img src={img5}alt="Profile" className="w-1/2  object-cover shadow-lg"/></p>
          </div>
    </section>
  );
};

export default Gallery;