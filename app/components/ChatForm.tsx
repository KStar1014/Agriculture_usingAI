'use client';

import { motion } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ChatFormProps {
  onClose: () => void;
}

export default function ChatForm({ onClose }: ChatFormProps) {
  return (
    <motion.div
      className="fixed bottom-24 right-8 z-50 w-80 bg-white rounded-lg shadow-xl flex flex-col"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <div className="flex justify-between items-center bg-green-600 text-white p-4 rounded-t-lg">
        <h3 className="text-lg font-semibold">Chat with us!</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-green-700">
          <X className="w-5 h-5" />
        </Button>
      </div>
      <div className="flex-grow p-4 overflow-y-auto" style={{ maxHeight: '300px' }}>
        {/* Chat messages will go here */}
        <div className="text-gray-600 text-sm">Welcome! How can I help you today?</div>
      </div>
      <div className="border-t p-4 flex items-center space-x-2">
        <Textarea 
          placeholder="Type your message..." 
          className="flex-grow rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500"
          rows={1}
        />
        <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg">
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </motion.div>
  );
} 