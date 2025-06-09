'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            Ready to Transform Your Agriculture?
          </motion.h2>
          <motion.p 
            className="text-xl text-green-200 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Join the future of farming with AgriAI. Start your journey towards sustainable and efficient agriculture today.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button size="lg" variant="outline" className="border-white text-green-800 hover:bg-gray-200 hover:text-green-700 px-8 py-4">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 