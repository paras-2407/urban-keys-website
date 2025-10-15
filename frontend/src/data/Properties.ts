// src/data/Properties.ts

// Define the shape of a single property object
interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: string;
  baths: string;
  sqft: string;
  status: 'For Sale' | 'Sold' | 'Pending'; // Use a union type for specific statuses
  description: string;
}

// Type the array to ensure all objects match the Property interface
export const propertiesData: Property[] = [
  {
    id: 1,
    image: 'https://www.suncityprojects.com/images/banner-suncity-township-jaipur.jpg',
    title: 'Suncity Township',
    location: 'Sikar Road, Jaipur',
    price: 'Plots & Apartments',
    beds: 'Plots',
    baths: 'Apartments',
    sqft: '400 Acres',
    status: 'For Sale',
    description: 'Spread across 400 acres, Suncity Township on Sikar Road, Jaipur, is a JDA-approved, well-planned development offering a perfect blend of residential and commercial opportunities. The township features residential plots ranging from 160 sq. yards to 1200 sq. yards, catering to diverse needs—from compact homes to luxury villas. In addition to plotted development, Suncity also includes commercial spaces and multiple apartment projects, making it a complete destination for living, investment, and business. With wide roads, modern infrastructure, and strategic connectivity, Suncity is an ideal choice for both homebuyers and real estate investors.'
  },
  {
    id: 2,
    image: 'https://i.ytimg.com/vi/4uG81Umn3L0/maxresdefault.jpg',
    title: 'ITL Housing',
    location: 'Adjoining Ashiyana Greens, Sikar Highway',
    price: 'Plots from 122 sq. yds',
    beds: 'Gated Society',
    baths: 'Plots',
    sqft: '122-311 sq. yds',
    status: 'For Sale',
    description: 'ITL Housing is a thoughtfully planned gated residential society located adjacent to Ashiyana Greens, just off Sikar Highway (NH11) in Jaipur. This compact and well-connected community offers residential plots ranging from 122 sq. yards to 311 sq. yards, making it ideal for families looking to build their dream home in a peaceful yet accessible location. The project features modern amenities and green surroundings, ensuring a comfortable and secure lifestyle. With excellent connectivity to city hubs via NH11, ITL Housing combines convenience, value, and livability—perfect for both homebuyers and investors.'
  },
  {
    id: 3,
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhousing.com%2Fbuy-parshvanath-shivala-villas-by-parshvanath-realhome-private-limited-in-theekariya-jaipur-rajasthan-pid-340670&psig=AOvVaw0PVpErdBdiKL6oplFBbl8U&ust=1759775704793000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPCSsMPZjZADFQAAAAAdAAAAABAf',
    title: 'Shivala Villas',
    location: 'Ajmer Road, Jaipur',
    price: '3 BHK Villas',
    beds: '3 Beds',
    baths: '3 Baths',
    sqft: '1551+ sqft',
    status: 'For Sale',
    description: 'Shivala Villas is an exclusive gated community located just 500mtr from Ajmer Road, Jaipur, offering a blend of luxury and modern living. The project features 3 BHK villas with built-up areas starting from 1,551 sq. ft., designed with high-end specifications and vastu-compliant layouts. Residents can enjoy a range of world-class amenities, including a clubhouse, swimming pool, gymnasium, landscaped parks, and EV charging stations. The development also includes premium commercial spaces for retail and business opportunities. With JDA approved, RERA approved and freehold patta, Shivala Villas ensures a secure and upscale living experience.'
  }
];