import React from 'react';
import { Brain, Code, Palette, Cpu } from 'lucide-react';

const teamMembers = [
  {
    name: "Jai Sharma",
    role: "Lead Developer",
    icon: Code,
  },
  {
    name: "Giri Patel",
    role: "Backend Specialist",
    icon: Brain,
  },
  {
    name: "Praneeth Reddy",
    role: "UI/UX Designer",
    icon: Palette,
  },
  {
    name: "Arshad Khan",
    role: "AI Engineer",
    icon: Cpu,
  },
];

const About = () => {
  return (
    <div id="about" className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A dedicated group of Indian students and professionals working together to revolutionize
            the way we learn and study.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm
                group relative overflow-hidden transform transition-all hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933]/0 via-[#FF9933]/5 to-[#FF9933]/0 
                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <member.icon className="w-12 h-12 text-[#FF9933] mb-4 animate-float" />
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;