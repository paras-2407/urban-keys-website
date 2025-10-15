// src/components/Properties.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, ArrowRight, Building2 } from 'lucide-react';
import { propertiesData as properties } from '../data/Properties';

const Properties: React.FC = () => {
  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exceptional homes and plots in prime locations across Jaipur,
            curated to match your lifestyle and investment goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                  property.status === 'For Sale' ? 'bg-green-100 text-green-800' :
                  property.status === 'Sold' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {property.status}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {property.price}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.sqft}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/properties/${property.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}

          {/* "Coming Soon" Card */}
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg border-2 border-dashed border-gray-300 text-center">
            <Building2 className="h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Many More Coming Soon
            </h3>
            <p className="text-gray-500">
              We are actively curating the best properties in Jaipur for you. Stay tuned!
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;