'use client';

import Image from 'next/image';
import { Twitter, Facebook, Instagram, Youtube, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">AgriAI</h3>
            <p className="text-sm leading-relaxed">
              Innovating for a sustainable agricultural future with AI-powered solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500 transition-colors duration-200">Home</a></li>
              <li><a href="#features" className="hover:text-green-500 transition-colors duration-200">Features</a></li>
              <li><a href="#about" className="hover:text-green-500 transition-colors duration-200">About Us</a></li>
              <li><a href="#contact" className="hover:text-green-500 transition-colors duration-200">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500 transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Home className="w-6 h-6" /> {/* Using Home icon for TikTok as a placeholder */}
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="border-t border-gray-700 pt-8 text-center text-sm"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} AgriAI. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
} 