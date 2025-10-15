// import React from 'react';
// import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';

// const Properties = () => {
//   const properties = [
//     {
//       id: 1,
//       image: 'https://www.suncityprojects.com/images/banner-suncity-township-jaipur.jpg',
//       title: 'Suncity Township',
//       location: 'Sikar Road, Jaipur',
//       price: '$850,000',
//       beds: 4,
//       baths: 3,
//       sqft: 2500,
//       status: 'For Sale'
//     },
//     {
//       id: 2,
//       image: 'https://i.ytimg.com/vi/4uG81Umn3L0/maxresdefault.jpg',
//       title: 'ITL Housing',
//       location: 'Green Triveni',
//       price: '$650,000',
//       beds: 2,
//       baths: 2,
//       sqft: 1800,
//       status: 'Sold'
//     },
//     {
//       id: 3,
//       image: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/85/b0/67/beautiful-and-peaceful.jpg',
//       title: 'Eden Garden',
//       location: 'Maple Heights',
//       price: '$525,000',
//       beds: 3,
//       baths: 2,
//       sqft: 2200,
//       status: 'For Sale'
//     },
//     {
//       id: 4,
//       image: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       title: 'Executive Estate',
//       location: 'Hill Country',
//       price: '$1,200,000',
//       beds: 5,
//       baths: 4,
//       sqft: 3800,
//       status: 'For Sale'
//     },
//     {
//       id: 5,
//       image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       title: 'Cozy Starter Home',
//       location: 'Oak Village',
//       price: '$385,000',
//       beds: 2,
//       baths: 1,
//       sqft: 1200,
//       status: 'Pending'
//     },
//     {
//       id: 6,
//       image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
//       title: 'Contemporary Townhouse',
//       location: 'City Center',
//       price: '$720,000',
//       beds: 3,
//       baths: 3,
//       sqft: 2000,
//       status: 'For Sale'
//     }
//   ];

//   return (
//     <section id="properties" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Featured Properties
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover exceptional homes in prime locations. From cozy starters 
//             to luxury estates, find the property that matches your lifestyle.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {properties.map((property) => (
//             <div 
//               key={property.id}
//               className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
//             >
//               <div className="relative">
//                 <img 
//                   src={property.image}
//                   alt={property.title}
//                   className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
//                   property.status === 'For Sale' ? 'bg-green-100 text-green-800' :
//                   property.status === 'Sold' ? 'bg-red-100 text-red-800' :
//                   'bg-yellow-100 text-yellow-800'
//                 }`}>
//                   {property.status}
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {property.title}
//                 </h3>
                
//                 <div className="flex items-center text-gray-600 mb-4">
//                   <MapPin className="h-4 w-4 mr-1" />
//                   <span>{property.location}</span>
//                 </div>
                
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-2xl font-bold text-blue-600">
//                     {property.price}
//                   </span>
//                 </div>
                
//                 <div className="flex items-center justify-between text-gray-600 mb-6">
//                   <div className="flex items-center">
//                     <Bed className="h-4 w-4 mr-1" />
//                     <span>{property.beds} beds</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Bath className="h-4 w-4 mr-1" />
//                     <span>{property.baths} baths</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Square className="h-4 w-4 mr-1" />
//                     <span>{property.sqft} sqft</span>
//                   </div>
//                 </div>
                
//                 <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2 group">
//                   <span>View Details</span>
//                   <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="text-center mt-12">
//           <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
//             View All Properties
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Properties;

// // src/components/PropertyDetail.tsx
// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { propertiesData } from '../data/Properties'; // Import the data
// import { MapPin, Bed, Bath, Square, ArrowLeft } from 'lucide-react';

// const PropertyDetail = () => {
//   const { id } = useParams(); // Get the 'id' from the URL
//   const property = propertiesData.find(p => p.id === Number(id));

//   // Handle case where property is not found
//   if (!property) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold">Property not found!</h2>
//         <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
//           &larr; Back to Properties
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-8">
//             <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
//                 <ArrowLeft className="h-4 w-4 mr-2" />
//                 Back to All Properties
//             </Link>
//         </div>

//         <div className="bg-gray-50 rounded-lg shadow-xl overflow-hidden">
//           <img 
//             src={property.image} 
//             alt={property.title} 
//             className="w-full h-96 object-cover"
//           />
//           <div className="p-8">
//             <div className="flex justify-between items-start mb-4">
//                 <div>
//                     <h1 className="text-4xl font-bold text-gray-900">{property.title}</h1>
//                     <div className="flex items-center text-gray-600 mt-2">
//                         <MapPin className="h-5 w-5 mr-2" />
//                         <span>{property.location}</span>
//                     </div>
//                 </div>
//                 <span className="text-4xl font-bold text-blue-600">
//                     {property.price}
//                 </span>
//             </div>

//             <div className="border-t border-gray-200 my-6"></div>

//             <div className="flex items-center justify-around text-gray-700 text-lg">
//                 <div className="flex items-center space-x-2">
//                     <Bed className="h-6 w-6 text-blue-500" />
//                     <span>{property.beds} Bedrooms</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                     <Bath className="h-6 w-6 text-blue-500" />
//                     <span>{property.baths} Bathrooms</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                     <Square className="h-6 w-6 text-blue-500" />
//                     <span>{property.sqft} sqft</span>
//                 </div>
//             </div>

//              <div className="border-t border-gray-200 my-6"></div>

//              <div>
//                 <h3 className="text-xl font-semibold mb-2">Description</h3>
//                 <p className="text-gray-600">
//                     Detailed description about {property.title} goes here. This beautiful property located in {property.location} offers a premium living experience with state-of-the-art amenities and breathtaking views. Perfect for families looking for comfort and luxury.
//                 </p>
//              </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PropertyDetail;
// src/components/PropertyDetail.tsx
import React, { Suspense, useMemo } from 'react'; // Import Suspense and useMemo
import { useParams, Link } from 'react-router-dom';
import { propertiesData } from '../data/Properties';
import { MapPin, Bed, Bath, Square, ArrowLeft, Loader2 } from 'lucide-react';

// A fallback component to show while the detail component is loading
const LoadingDetails = () => (
  <div className="flex justify-center items-center p-8">
    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
    <span className="ml-4 text-lg text-gray-600">Loading details...</span>
  </div>
);

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = propertiesData.find(p => p.id === Number(id));

  // Dynamically import the correct component using React.lazy
  // useMemo prevents re-creating the lazy component on every render
  const PropertyDetailsComponent = useMemo(() => {
    if (!id) return () => null; // Return a null component if id is not present
    return React.lazy(() => import(`../pages/properties/${id}.tsx`));
  }, [id]);


  if (!property) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Property not found!</h2>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
          &larr; Back to Properties
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
            <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Properties
            </Link>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-xl overflow-hidden">
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            {/* Summary details from the main data file */}
            <div className="flex justify-between items-start mb-4">
              <div>
                  <h1 className="text-4xl font-bold text-gray-900">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mt-2">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{property.location}</span>
                  </div>
              </div>
              <span className="text-4xl font-bold text-blue-600">
                  {property.price}
              </span>
            </div>
            <div className="flex items-center justify-around text-gray-700 text-lg my-6 border-y border-gray-200 py-6">
              <div className="flex items-center space-x-2"><Bed className="h-6 w-6 text-blue-500" /><span>{property.beds} Bedrooms</span></div>
              <div className="flex items-center space-x-2"><Bath className="h-6 w-6 text-blue-500" /><span>{property.baths} Bathrooms</span></div>
              <div className="flex items-center space-x-2"><Square className="h-6 w-6 text-blue-500" /><span>{property.sqft} sqft</span></div>
            </div>

            {/* Dynamically loaded detailed description */}
            <Suspense fallback={<LoadingDetails />}>
              <PropertyDetailsComponent />
            </Suspense>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetail;