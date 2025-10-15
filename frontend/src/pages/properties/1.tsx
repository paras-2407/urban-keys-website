import React from 'react';

const Property1Details: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Suncity Township – A Premier Planned Community</h2>
      <p className="mb-4 text-lg leading-relaxed">
        Spread across <strong>400 acres</strong> on Sikar Road, Jaipur, Suncity Township is a 
        <strong> JDA-approved</strong>, well-planned development offering a perfect blend of residential 
        and commercial opportunities. It's a complete destination for modern living, investment, and business.
      </p>
      
      <h3 className="text-2xl font-semibold mb-3 mt-6">Key Features</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Diverse Property Options:</strong> Features residential plots, multiple apartment projects, 
          and commercial spaces to suit various needs.
        </li>
        <li>
          <strong>Flexible Plot Sizes:</strong> Residential plots are available in sizes ranging from 
          <strong> 160 sq. yards to 1200 sq. yards</strong>, ideal for everything from compact homes to luxury villas.
        </li>
        <li>
          <strong>Modern Infrastructure:</strong> The township is designed with wide roads and robust infrastructure, 
          ensuring a high-quality living environment.
        </li>
        <li>
          <strong>Strategic Location:</strong> Excellent connectivity to the rest of Jaipur makes it a prime choice 
          for both homebuyers and real estate investors.
        </li>
      </ul>

      <p className="mt-6 text-lg">
        With its thoughtful planning and comprehensive amenities, Suncity Township stands out as an ideal choice 
        for those seeking a secure and well-connected community in Jaipur.
      </p>
    </div>
  );
};

export default Property1Details;