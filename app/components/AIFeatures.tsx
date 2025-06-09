'use client';

import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  Droplets, 
  Leaf, 
  Sun, 
  Thermometer, 
  Wind,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function AIFeatures() {
  const aiFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Neural Network Analysis",
      description: "Advanced neural networks analyze crop patterns and predict optimal growth conditions with 95% accuracy.",
      stats: "95% Accuracy"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Smart Irrigation",
      description: "AI-powered moisture sensors and predictive analytics optimize water usage based on real-time soil conditions.",
      stats: "40% Water Savings"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Disease Detection",
      description: "Computer vision algorithms detect plant diseases at early stages, preventing crop loss and reducing pesticide use.",
      stats: "Early Detection"
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Yield Prediction",
      description: "Machine learning models analyze historical data and current conditions to predict crop yields with high precision.",
      stats: "±5% Accuracy"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Climate Adaptation",
      description: "AI systems monitor and adapt to changing climate conditions, optimizing farming strategies in real-time.",
      stats: "Real-time Adaptation"
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Resource Optimization",
      description: "Smart algorithms optimize resource allocation, reducing waste and maximizing efficiency across all operations.",
      stats: "30% Efficiency"
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
    <section className="relative py-24 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,50 C20,40 40,60 60,50 C80,40 100,60 100,50 L100,100 L0,100 Z"
              fill="currentColor"
              className="text-green-600"
            />
          </svg>
        </div>
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,30 C30,20 50,40 70,30 C90,20 100,40 100,30 L100,100 L0,100 Z"
              fill="currentColor"
              className="text-green-600"
            />
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-4 mb-16">
          <motion.div 
            className="inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-600 text-sm font-semibold mb-4">
              AI Innovation
            </span>
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            AI-Powered <span className="text-green-600 relative">
              Agriculture
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path d="M0,0 C50,6 50,6 100,0" stroke="currentColor" strokeWidth="2" fill="none" className="text-green-600" />
              </svg>
            </span> Innovation
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            Discover how our cutting-edge AI technologies are revolutionizing farming practices 
            and driving sustainable agricultural growth.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {aiFeatures.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm relative overflow-hidden"
              variants={itemVariants}
            >
              <Card 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 space-y-4 relative">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="pt-4">
                    <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0 h-auto">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 relative overflow-hidden group">
            <span className="relative z-10">Explore AI Solutions</span>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 