'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sprout, Home, Flower, ChevronDown, Heart } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

export default function ModernFarming() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  return (
    <section className="bg-green-800 text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Add subtle background pattern or texture here if desired */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Welcome Message and Icons */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between mb-20 lg:mb-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              Welcome to the Modern <br className="hidden lg:block" />
              <span className="text-green-300">Farming Era</span>
            </motion.h1>
            <motion.div variants={itemVariants}>
              <Button className="mt-8 bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3 rounded-full shadow-lg">
                Learn More
              </Button>
            </motion.div>
          </div>

          <motion.div className="flex space-x-6" variants={containerVariants}>
            <motion.div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-600 rounded-full flex items-center justify-center shadow-xl" variants={iconVariants}>
              <Sprout className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
            <motion.div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-xl" variants={iconVariants}>
              <Home className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
            <motion.div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-xl" variants={iconVariants}>
              <Flower className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section: Robot Image and Vertical Pills */}
        <motion.div 
          className=""
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:space-x-8">
          <Carousel
            opts={{
              align: "start",
              loop: true, // Enable looping for continuous autoplay
            }}
            plugins={[
              Autoplay({
                delay: 2400, // Autoplay interval in milliseconds (e.g., 2.4 seconds)
                stopOnInteraction: false, // Continue autoplay even on user interaction
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full max-w-sm lg:max-w-none"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-full">
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-white/10 flex items-center justify-center">
                  <Image
                    src="/images/robot-sprayer.jpg"
                    alt="Agricultural Robot Sprayer"
                    fill
                    className="rounded-2xl object-cover"
                    loading="eager"
                  />
                  <div className="absolute top-4 right-4 bg-gray-900/50 rounded-full p-2 text-white">
                    <Heart className="w-5 h-5" />
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-full">
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-white/10 flex items-center justify-center">
                  <Image
                    src="/images/robot-sprayer-2.jpg"
                    alt="Another Agricultural Robot"
                    fill
                    className="rounded-2xl object-cover"
                    loading="eager"
                  />
                  <div className="absolute top-4 right-4 bg-gray-900/50 rounded-full p-2 text-white">
                    <Heart className="w-5 h-5" />
                  </div>
                </div>
              </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-full">
                  <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-white/10 flex items-center justify-center">
                    <Image
                     src="/images/robot-sprayer-3.jpg"
                      alt="Another Agricultural Robot"
                      fill
                      className="rounded-2xl object-cover"
                     loading="eager"
                    />
                    <div className="absolute top-4 right-4 bg-gray-900/50 rounded-full p-2 text-white">
                      <Heart className="w-5 h-5" />
                    </div>
                  </div>
                </CarouselItem>
              
              </CarouselContent>
              {/* <CarouselPrevious /> */}
              {/* <CarouselNext /> */}
          </Carousel>

        </div>
        </motion.div>
      </div>
    </section>
  );
} 