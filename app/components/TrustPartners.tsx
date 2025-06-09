'use client';

import React from 'react';
import { Building2, Leaf, Factory, Truck, Wheat, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 mb-12 relative inline-block"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          Trusted by Leading Innovators in Agriculture
          <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
            <path d="M0,0 C50,6 50,6 100,0" stroke="currentColor" strokeWidth="2" fill="none" className="text-green-400" />
          </svg>
        </motion.h2>

        <motion.div 
          className="relative w-full overflow-hidden py-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="flex whitespace-nowrap"
            variants={marqueeVariants}
            animate="animate"
          >
            {trustPartners.concat(trustPartners).map((partner, index) => (
              <motion.div 
                key={index} 
                className="inline-flex items-center justify-center p-4 mx-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                variants={itemVariants}
              >
                <span className="text-green-600 group-hover:text-green-700 transition-colors mr-3">
                  {partner.icon}
                </span>
                <span className="text-gray-800 font-semibold text-lg">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 