import React from 'react';
import Home from './pages/Home';
import Navbar from './assets/Navbar';
import Gallery from './pages/Gallery';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="font-sans bg-gray-100">
      <Navbar />
      <Home />
      <AboutMe />
      <Gallery />
    </div>
  );
}

export default App;