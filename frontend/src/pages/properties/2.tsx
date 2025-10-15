import React from 'react';

const ITLHousingDetails: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">ITL Housing – A Secure Gated Community</h2>
      <p className="mb-4 text-lg leading-relaxed">
        <strong>ITL Housing</strong> is a thoughtfully planned gated residential society located adjacent 
        to Ashiyana Greens, just off Sikar Highway (NH11) in Jaipur. This compact and well-connected 
        community is ideal for families looking to build their dream home in a peaceful yet accessible location.
      </p>
      
      <h3 className="text-2xl font-semibold mb-3 mt-6">Key Features</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Prime Location:</strong> Situated right off the Sikar Highway (NH11), ensuring excellent 
          connectivity to major city hubs.
        </li>
        <li>
          <strong>Residential Plots:</strong> Offers a range of plot sizes from <strong>122 sq. yards to 311 sq. yards</strong>, 
          perfect for custom home construction.
        </li>
        <li>
          <strong>Secure Living:</strong> As a gated community, it provides a safe and secure environment 
          for families.
        </li>
        <li>
          <strong>Modern Amenities:</strong> The project features contemporary amenities and lush green surroundings 
          for a comfortable and high-quality lifestyle.
        </li>
      </ul>

      <p className="mt-6 text-lg">
        Combining convenience, value, and livability, ITL Housing is a perfect opportunity for both 
        discerning homebuyers and savvy investors.
      </p>
    </div>
  );
};

export default ITLHousingDetails;