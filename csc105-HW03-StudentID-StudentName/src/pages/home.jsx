import React from 'react';
import Button from '../assets/Button';
import img1 from '../assets/images.jpg'
import face from '../assets/face.jpg'
import ig from '../assets/ig.jpg'
import x from '../assets/x.png'
const Home = () => {
  return (
         <section id="about" className="min-h-screen flex flex-row items-center justify-center p-8 bg-white">
            <div className="w-full sm:w-1/2 text-center sm:text-left">
              <h1 className="text-5xl font-bold mb-4">Hello, it's me</h1>
                    <h2 className="text-4xl font-bold mb-4">Michael Jackson</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                      Please hold your breath as we dive into a world full of Song with Michael Jackson.
                    </p><div>
                              <a src={face} href="https://facebook.com" >
                                <img src={face}alt="Profile" className=" w-1/16 rounded-full object-cover "/>
                              </a>
                              <a  href="https://twitter.com" >
                                <img src={x}alt="Profile" className=" w-1/16 rounded-full object-cover "/>
                              </a>
                              <a href="https://instagram.com">
                                <img src={ig}alt="Profile" className=" w-1/16 rounded-full object-cover "/>
                              </a>
                            </div>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                      My Portfolio
                    </button>
            </div>
             <div className="w-full md:w-1/4 flex justify-center mb-8 sm:mb-0">
             <img src={img1}alt="Profile" className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-lg"/>
               </div>
          </section>
        );
      };

export default Home;