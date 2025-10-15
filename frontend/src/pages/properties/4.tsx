import React from 'react';

const Property1Details = () => {
  return (
    // You can use full JSX here, including other components if you wish
    <div>
      <h2 className="text-3xl font-bold mb-4">A Luxurious Villa with a Modern Touch</h2>
      <p className="mb-4">
        Welcome to <strong>Suncity Township</strong>, a premier residential community located on Sikar Road in Jaipur. This beautiful property offers a premium living experience with state-of-the-art amenities and breathtaking views.
      </p>
      <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Spacious Layout:</strong> Over 2500 sqft of thoughtfully designed living space.</li>
        <li><strong>Gourmet Kitchen:</strong> Fully equipped with modern appliances and granite countertops.</li>
        <li><strong>Master Suite:</strong> A luxurious master bedroom with an en-suite bathroom and walk-in closet.</li>
        <li><strong>Community Amenities:</strong> Access to a clubhouse, swimming pool, and landscaped gardens.</li>
      </ul>
      <p className="mt-4">
        This estate is perfect for families looking for a blend of comfort, luxury, and security in a prime location.
      </p>
    </div>
  );
};

export default Property1Details;