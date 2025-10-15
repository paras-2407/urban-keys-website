// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Properties from './components/Properties';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <Properties />
//       <Testimonials />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// src/App.tsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // 1. Import Outlet
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* 2. Outlet will render the current page's content */}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;