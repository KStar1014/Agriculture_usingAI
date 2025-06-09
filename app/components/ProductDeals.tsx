'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight, Heart, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export default function ProductDeals() {
  const topSalePicks = [
    {
      image: "/images/ai_pick.jpg",
      title: "Autumn Blaze® Red Maple Tree",
      rating: 4.5,
      reviews: 802,
      originalPrice: "$139.95",
      discountedPrice: "$139.95", // No discount visible in image for this one
      discount: "UP TO 46% OFF",
    },
    {
      image: "/images/ai_pick.jpg",
      title: "Honeycrisp™ Apple Tree",
      rating: 4.0,
      reviews: 393,
      originalPrice: "$111.95",
      discountedPrice: "$111.95",
      discount: "UP TO 39% OFF",
    },
    {
      image: "/images/ai_pick.jpg",
      title: "Thuja Green Giant Arborvitae",
      rating: 4.8,
      reviews: 2919,
      originalPrice: "$19.95",
      discountedPrice: "$19.95",
      discount: "BUY 1, GET 1",
    },
    {
      image: "/images/ai_pick.jpg",
      title: "Endless Summer® The Original Reblooming Hydrangea",
      rating: 4.3,
      reviews: 351,
      originalPrice: "$29.95",
      discountedPrice: "$29.95",
      discount: "UP TO 52% OFF",
    },
    {
      image: "/images/ai_pick.jpg",
      title: "Eastern Redbud Tree",
      rating: 4.2,
      reviews: 243,
      originalPrice: "$69.95",
      discountedPrice: "$69.95",
      discount: "UP TO 38% OFF",
    },
    {
      image: "/images/ai_pick.jpg",
      title: "Pink Dogwood Tree",
      rating: 4.7,
      reviews: 300,
      originalPrice: "$139.95",
      discountedPrice: "$139.95",
      discount: "UP TO 39% OFF",
    },
    {
      image: "/images/ai_pick.jpg",
      title: "Willow Hybrid Tree",
      rating: 4.1,
      reviews: 329,
      originalPrice: "$64.9",
      discountedPrice: "$64.9",
      discount: "UP TO 42% OFF",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Promotional Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Hot Summer DEALS Banner */}
          <motion.div 
            className="lg:col-span-2 bg-gradient-to-br from-green-700 to-green-900 text-white rounded-lg p-8 flex flex-col justify-center items-center relative overflow-hidden"
            variants={itemVariants}
          >
            {/* <div className="absolute inset-0 bg-[url('/images/.png')] bg-cover bg-center opacity-20"></div> */}
            <div className="relative z-10 text-center">
              <span className="bg-yellow-400 text-green-900 font-bold px-3 py-1 rounded-full text-sm mb-4 inline-block transform -rotate-3">This week only!</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-2">Hot Summer DEALS</h2>
              <p className="text-xl font-semibold mb-4">UP TO <span className="text-yellow-400 text-6xl">65% OFF</span></p>
              <p className="text-green-200 text-sm mb-8">New limited-time price drops on select plants & trees. Don&apos;t miss out!</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full shadow-lg">Save Big</Button>
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-6">
            {/* Bestsellers Card */}
            <motion.div 
              className="bg-gray-100 rounded-lg p-6 flex flex-col justify-between items-start relative overflow-hidden h-48"
              variants={itemVariants}
            >
              <Image 
                src="/images/card1.webp" 
                alt="More bestsellers on sale" 
                fill 
                className="object-cover rounded-lg absolute inset-0 opacity-70"
                loading='eager'
              />
              {/* <div className="relative z-10">
                <span className="bg-yellow-300 text-green-900 font-bold px-3 py-1 rounded-md text-xs mb-2 inline-block">More bestsellers</span>
                <h3 className="text-lg font-semibold text-gray-800">on sale</h3>
              </div>
              <Button variant="ghost" size="icon" className="relative z-10 mt-auto ml-auto">
                <ArrowRight className="w-5 h-5 text-gray-800" />
              </Button> */}
            </motion.div>

            {/* Fresh Summer Harvests Card */}
            <motion.div 
              className="bg-gray-100 rounded-lg p-6 flex flex-col justify-between items-start relative overflow-hidden h-48"
              variants={itemVariants}
            >
              <Image 
                src="/images/card2.webp" 
                alt="Fresh summer harvests" 
                fill 
                className="object-cover rounded-lg absolute inset-0 opacity-70"
                loading='eager'
              />
              {/* <div className="relative z-10">
                <span className="bg-yellow-300 text-green-900 font-bold px-3 py-1 rounded-md text-xs mb-2 inline-block">Fresh summer</span>
                <h3 className="text-lg font-semibold text-gray-800">harvests</h3>
                <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">FROM $24.95</span>
              </div>
              <Button variant="ghost" size="icon" className="relative z-10 mt-auto ml-auto">
                <ArrowRight className="w-5 h-5 text-gray-800" />
              </Button> */}
            </motion.div>
          </div>
        </motion.div>

        {/* Top Sale Picks Carousel */}
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Top sale picks
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {topSalePicks.map((product, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <motion.div 
                    className="p-1"
                    variants={itemVariants}
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
													loading='eager'
                        />
                        <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Heart className="w-5 h-5 text-gray-500" />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 text-lg mb-2">{product.title}</h3>
                        <div className="flex items-center mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                            />
                          ))}
                          <span className="text-sm text-gray-500 ml-2">{product.reviews}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Starting at <span className="font-bold text-lg text-gray-900">{product.originalPrice}</span></p>
                        <p className="text-sm text-green-600 font-semibold">{product.discount}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
} 