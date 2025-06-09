'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatForm from './ChatForm';

export default function ChatbotIcon() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <>
      <motion.div
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-full p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
      >
        <MessageCircle className="w-8 h-8" />
      </motion.div>

      <AnimatePresence>
        {showChat && <ChatForm onClose={toggleChat} />}
      </AnimatePresence>
    </>
  );
} 