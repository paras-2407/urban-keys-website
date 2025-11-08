import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center space-x-1 bg-amber-500 px-3 py-1 rounded-full text-sm font-medium">
            <Star className="h-4 w-4 fill-current" />
            {/* <span>Rated #1 in the Area</span> */}
            <span>BUY | SELL | LEASE</span>
            <Star className="h-4 w-4 fill-current" />

          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Your Dreams
          <span className="text-amber-400 block">Our Priority</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-20 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          With over 18 years of experience, we help you navigate the real estate market 
          with confidence and expertise.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Contact Us</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Projects
          </button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">500+</div>
            <div className="text-gray-300">Homes Sold</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">15+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;