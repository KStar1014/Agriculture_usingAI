'use client';

import React from 'react';
import { Building2, Leaf, Factory, Truck, Wheat, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TrustPartners() {
  const trustPartners = [
    {
      name: "John Deere",
      logo: "/images/partners/john-deere.png",
      alt: "John Deere Logo"
    },
    {
      name: "Monsanto",
      logo: "/images/partners/monsanto.png",
      alt: "Monsanto Logo"
    },
    {
      name: "Syngenta",
      logo: "/images/partners/syngenta.png",
      alt: "Syngenta Logo"
    },
    {
      name: "Bayer CropScience",
      logo: "/images/partners/bayer.png",
      alt: "Bayer CropScience Logo"
    },
    {
      name: "Corteva",
      logo: "/images/partners/corteva.png",
      alt: "Corteva Logo"
    },
    {
      name: "CNH Industrial",
      logo: "/images/partners/cnh.png",
      alt: "CNH Industrial Logo"
    },
    {
      name: "AGCO",
      logo: "/images/partners/agco.png",
      alt: "AGCO Logo"
    },
    {
      name: "Kubota",
      logo: "/images/partners/kubota.png",
      alt: "Kubota Logo"
    },
    {
      name: "Yara",
      logo: "/images/partners/yara.png",
      alt: "Yara Logo"
    },
    {
      name: "BASF",
      logo: "/images/partners/basf.png",
      alt: "BASF Logo"
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
                <div className="relative w-24 h-12">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 