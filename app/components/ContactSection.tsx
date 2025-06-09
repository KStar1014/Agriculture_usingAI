'use client';

import { Phone, Package, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

export default function ContactSection() {
	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.15 } },
	};
	return (
		<section className="bg-gray-50 py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{/* Contact Us */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
					>
						<div className="flex flex-col items-center text-center md:items-start md:text-left">
							<div className="mb-4">
								<div className="w-20 h-20 bg-[url('https://cdn.shopify.com/s/files/1/0059/8835/2052/files/contact-us-icon.svg?v=1718657623')] bg-cover bg-center opacity-90 flex items-center justify-center text-white text-sm font-semibold"></div>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h3>
							<p className="text-gray-600 mb-4">
								Have questions or want to order over the phone? We&apos;re here to help. Talk to our Plant Experts.
							</p>
							<p className="text-gray-800 font-bold mb-2">(800) 973-8959</p>
							<a href="#" className="text-green-600 hover:underline">Contact Us</a>
						</div>
					</motion.div>

					{/* Track Your Shipment */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
					>
						<div className="flex flex-col items-center text-center md:items-start md:text-left">
							<div className="mb-4">
								<div className="w-20 h-20 bg-[url('https://cdn.shopify.com/s/files/1/0059/8835/2052/files/track-shipping-icon.svg?v=1718657623')] bg-cover bg-center opacity-90 flex items-center justify-center text-white text-sm font-semibold"></div>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">Track Your Shipment</h3>
							<p className="text-gray-600 mb-4">
								Find out when your new plants will be delivered directly to your door.
							</p>
							<a href="#" className="text-green-600 hover:underline mb-2">Track My Shipment</a>
							<a href="#" className="text-green-600 hover:underline">Create an Account / Sign In</a>
						</div>
					</motion.div>

					{/* Stay in the Loop */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
					>
						<div className="flex flex-col items-center text-center md:items-start md:text-left">
							<div className="mb-4">
								<div className="w-20 h-24 bg-[url('https://cdn.shopify.com/s/files/1/0059/8835/2052/files/newsletter-icon.svg?v=1718657623')] bg-cover bg-center opacity-90 flex items-center justify-center text-white text-sm font-semibold"></div>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">Stay in the Loop</h3>
							<p className="text-gray-600 mb-4">
								Sign up for our mailing list for special offers, new products, expert advice and more.
							</p>
							<div className="flex w-full max-w-md gap-3">
								<Input
									type="email"
									placeholder="Enter your email here..."
									className="flex-grow rounded-l-md border-gray-300 focus:ring-green-500 focus:border-green-500"
								/>
								<Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-r-md">
									Sign up
								</Button>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
} 