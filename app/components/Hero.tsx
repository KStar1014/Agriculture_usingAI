'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover"
          style={{ filter: 'brightness(0.8)' }}
        >
          <source src="https://idoxdeu.sufydely.com/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 to-blue-900/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                Revolutionize Farming with{' '}
                <span className="text-green-400">AI Technology</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-100 leading-relaxed"
                variants={itemVariants}
              >
                Welcome to the future of agriculture, where artificial intelligence meets sustainable farming. 
                Our advanced AI systems transform the way you approach modern agriculture, particularly in 
                precision farming and crop optimization.
              </motion.p>
            </div>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button size="lg" variant="outline" className="px-8 py-4 group border-white text-green-800 hover:bg-white hover:text-green-600">
                  <Play className="mr-2 w-5 h-5 group-hover:text-green-600 transition-colors" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center space-x-4 pt-8"
              variants={containerVariants}
            >
              <motion.div className="flex -space-x-2" variants={containerVariants}>
                {/* Using different background colors to simulate avatars */}
                <motion.div 
                  className="w-10 h-10 rounded-full bg-[url('/images/men_1.jpg')] bg-cover bg-center opacity-90 border-2 border-white flex items-center justify-center text-white text-sm font-semibold"
                  variants={itemVariants}
                ></motion.div>
                <motion.div 
                  className="w-10 h-10 rounded-full bg-[url('/images/women_2.jpg')] bg-cover bg-center opacity-90 border-2 border-white flex items-center justify-center text-white text-sm font-semibold"
                  variants={itemVariants}
                ></motion.div>
                <motion.div 
                  className="w-10 h-10 rounded-full bg-[url('/images/men_2.jpg')] bg-cover bg-center opacity-90 border-2 border-white flex items-center justify-center text-white text-sm font-semibold"
                  variants={itemVariants}
                ></motion.div>
                <motion.div 
                  className="w-10 h-10 rounded-full bg-[url('/images/women_1.jpg')] bg-cover bg-center opacity-90 border-2 border-white flex items-center justify-center text-white text-sm font-semibold"
                  variants={itemVariants}
                ></motion.div>
                <motion.div 
                  className="w-10 h-10 rounded-full bg-[url('/images/women_2.jpg')] bg-cover bg-center opacity-90 border-2 border-white flex items-center justify-center text-white text-sm font-semibold"
                  variants={itemVariants}
                ></motion.div>
                <motion.div className="w-10 h-10 rounded-full bg-green-600 border-2 border-white flex items-center justify-center z-10" variants={itemVariants}>
                  <span className="text-white text-sm font-bold">+</span>
                </motion.div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="font-semibold text-white">50K+ Farmers</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-sm">★</span>
                  ))}
                  <span className="ml-2 text-sm text-gray-200">4.9/5 Rating</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/574919/pexels-photo-574919.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI-powered agriculture technology"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
                style={{opacity:0.4}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-bounce"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold">+40% Yield</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-pulse"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold">AI Powered</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
} 