'use client';

import { Button } from '@/components/ui/button';
import { Play, CheckCircle, Users, ArrowRight } from 'lucide-react';

export default function Story() {
  return (
    <section id="about" className="py-24 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sustainable farming technology"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            <Button 
              size="lg" 
              className="absolute bottom-6 left-6 bg-white text-gray-900 hover:bg-gray-100"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Cultivating Tomorrow: The <span className="text-green-600">AgriAI</span> Story
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                At AgriAI, our journey is more than a narrative; it's a commitment to shaping the future of agriculture. 
                Born out of a passion for innovation and a vision for sustainable farming.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Roots in Innovation</h3>
                  <p className="text-gray-600">
                    Our story begins with a relentless pursuit of innovation. AgriAI emerged from a dedicated team 
                    of agricultural experts, data scientists, and technology enthusiasts who saw the potential for 
                    transformative change in AI-powered farming.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Empowering Farmers</h3>
                  <p className="text-gray-600">
                    AgriAI is more than a brand; it's a partner in growth. Our journey is intertwined with the success 
                    stories of farmers worldwide who have embraced our AI solutions and witnessed transformative results 
                    in their agricultural practices.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Explore Our Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 