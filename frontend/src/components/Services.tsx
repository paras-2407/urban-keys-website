// src/components/Services.tsx

import React from 'react';
import { Home, TrendingUp, FileText, FileSearch, Calculator, Users, LucideProps } from 'lucide-react';

// Define the shape of a single service object
interface Service {
  icon: React.ComponentType<LucideProps>; // Type for a React component (like lucide icons)
  title: string;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  // Type the array to ensure all objects match the Service interface
  const services: Service[] = [
    {
      icon: Home,
      title: 'Home Buying',
      description: 'Find your perfect home with our expert guidance through every step of the buying process.',
      features: ['Market Analysis', 'Property Tours', 'Negotiation Support']
    },
    {
      icon: TrendingUp,
      title: 'Home Selling',
      description: 'Maximize your property value with our proven marketing strategies and pricing expertise.',
      features: ['Professional Photography', 'Market Pricing', 'Marketing Campaign']
    },
    {
      icon: FileText,
      title: 'Consultancy',
      description: 'Strategic advice and legal assistance for all your real estate needs, from due diligence to investment planning.',
      features: ['Legal Document Verification', 'JDA/RERA Compliance', 'Investment Strategy']
    },
    // ... other services
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From buying your first home to building a real estate portfolio, 
            we provide comprehensive services tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-gray-200"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-6 group-hover:text-amber-500 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;