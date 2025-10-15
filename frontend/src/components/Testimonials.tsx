// src/components/OurTeam.tsx

import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

// 1. Define the TypeScript interface for a team member
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin: string;
    email: string;
  };
}

// 2. Create the data for your team
const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Rohan Sharma',
    role: 'Founder & Director',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'With over two decades of experience in the Jaipur real estate market, Rohan leads our vision with integrity and a deep commitment to client success.',
    socials: {
      linkedin: '#',
      email: 'mailto:rohan.sharma@urbankeys.com'
    }
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Lead Property Advisor',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Priya specializes in residential and commercial properties, combining market analysis with a personalized approach to find your perfect investment.',
    socials: {
      linkedin: '#',
      email: 'mailto:priya.singh@urbankeys.com'
    }
  },
  {
    id: 3,
    name: 'Ankit Verma',
    role: 'Client Relations Manager',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Ankit ensures a seamless and transparent experience for every client, managing everything from initial consultation to final documentation.',
    socials: {
      linkedin: '#',
      email: 'mailto:ankit.verma@urbankeys.com'
    }
  }
];

const OurTeam: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Professional Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The dedicated experts behind our success, committed to finding your perfect property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamData.map((member) => (
            <div 
              key={member.id}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <img 
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-gray-200"
              />
              
              <h3 className="text-2xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-4">
                {member.role}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {member.bio}
              </p>

              <div className="flex items-center justify-center space-x-4">
                <a href={member.socials.linkedin} className="text-gray-500 hover:text-blue-700 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href={member.socials.email} className="text-gray-500 hover:text-blue-700 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;