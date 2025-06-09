'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Cpu, Sprout, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze crop health, soil conditions, and weather patterns to optimize farming decisions."
    },
    {
      icon: <Sprout className="w-6 h-6" />,
      title: "Precision Agriculture",
      description: "Deliver precise amounts of water, fertilizer, and pesticides exactly where and when needed to maximize yield and minimize waste."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Yield Optimization",
      description: "Increase crop yields by up to 40% through intelligent monitoring, predictive analytics, and automated farming solutions."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            How AI Transforms <span className="text-green-600">Agriculture</span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our cutting-edge artificial intelligence solutions revolutionize traditional farming practices 
            and drive sustainable agricultural growth.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              variants={itemVariants}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="pt-4">
                    <span className="text-green-600 font-semibold group-hover:underline cursor-pointer inline-flex items-center">
                      Learn More 
                      <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 