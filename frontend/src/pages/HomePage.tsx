// src/pages/HomePage.tsx
import React from 'react';

// Import all the sections that make up your home page
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Properties from '../components/Properties'; 
// import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Properties />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
};

export default HomePage;