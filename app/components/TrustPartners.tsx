'use client';

import { Building2, Leaf, Factory, Truck, Wheat, Sprout } from 'lucide-react';

export default function TrustPartners() {
  const trustPartners = [
    {
      name: "AgriTech Solutions",
      icon: <Building2 className="w-8 h-8" />
    },
    {
      name: "FarmForward",
      icon: <Leaf className="w-8 h-8" />
    },
    {
      name: "GreenTech Industries",
      icon: <Factory className="w-8 h-8" />
    },
    {
      name: "Smart Farming Co",
      icon: <Truck className="w-8 h-8" />
    },
    {
      name: "TechHarvest",
      icon: <Wheat className="w-8 h-8" />
    },
    {
      name: "AgriInnovate",
      icon: <Sprout className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">
          Trusted by Leading Agricultural Companies
        </p>
        
        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* First Marquee */}
          <div className="flex animate-marquee whitespace-nowrap">
            {trustPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-8 text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer group"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-green-600 group-hover:text-green-700 transition-colors">
                    {partner.icon}
                  </div>
                  <span className="text-sm font-semibold">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Second Marquee (Duplicate for seamless loop) */}
          <div className="flex animate-marquee2 whitespace-nowrap absolute top-0">
            {trustPartners.map((partner, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center justify-center mx-8 text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer group"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-green-600 group-hover:text-green-700 transition-colors">
                    {partner.icon}
                  </div>
                  <span className="text-sm font-semibold">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </section>
  );
} 