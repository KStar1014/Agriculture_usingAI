'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MagicAI() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-gray-900 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Smart AI Products in <span className="text-purple-400">Agriculture</span><br className="hidden md:block"/>
          Innovating for a Smarter Future.
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-400 mb-16"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Discover our cutting-edge AI solutions for modern farming.
        </motion.p>

        {/* Main Image Section */}
        <motion.div 
          className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl mb-20 group"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/magic_ai.jpg"
            alt="AI in Agriculture"
            width={1200}
            height={675}
            loading='eager'
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Overlay or interactive elements can be added here if needed */}
        </motion.div>

        {/* Achievements/Logos Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="flex flex-col items-center space-y-2"
            variants={itemVariants}
          >
            <Image src="/images/card_ai_2.jpg" alt="United States Patent Awarded" width={120} height={80} className="mb-2" loading='eager' />
            <p className="text-sm text-gray-300">United States Patent Awarded</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center space-y-2"
            variants={itemVariants}
          >
            <Image src="/images/card_ai_2.jpg" alt="Forbes 30 Under 30" width={120} height={80} className="mb-2" loading='eager' />
            <p className="text-sm text-gray-300">Founders Named Forbes 30 Under 30</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center space-y-2"
            variants={itemVariants}
          >
            <Image src="/images/card_ai_2.jpg" alt="National Science Foundation Backed" width={120} height={80} className="mb-2" loading='eager' />
            <p className="text-sm text-gray-300">National Science Foundation Backed</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center space-y-2"
            variants={itemVariants}
          >
            <Image src="/images/card_ai_2.jpg" alt="Engadget #1 Startup" width={120} height={80} className="mb-2" loading='eager' />
            <p className="text-sm text-gray-300">#1 Startup At World&apos;s Largest Tech Show</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center space-y-2"
            variants={itemVariants}
          >
            <Image src="/images/card_ai_2.jpg" alt="University of Illinois Venture Champion" width={120} height={80} className="mb-2" loading='eager' />
            <p className="text-sm text-gray-300">University of Illinois Venture Champion</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center space-y-2"
            variants={itemVariants}
          >
            <div className="text-5xl font-bold text-green-400">4.8</div>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-gray-300">Average Farmer Product Review</p>
          </motion.div>
        </motion.div>
        <p className="text-xs text-gray-600 mt-12 max-w-4xl mx-auto">
          Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.
        </p>
      </div>
    </section>
  );
} 