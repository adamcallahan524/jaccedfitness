
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from 'lucide-react';
import { useWaitlist } from '../../context/WaitlistContext';

// Use this to help us format timestamps
const formatTime = (date: Date) => {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

const AITrainerContent = () => {
  const { openWaitlist } = useWaitlist();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{
    id: number;
    text: string;
    sender: 'user' | 'ai';
    time: string;
  }[]>([
    {
      id: 1,
      text: "👋 Hi there! I'm your AI Fitness Trainer. How can I help with your fitness journey today?",
      sender: 'ai',
      time: formatTime(new Date())
    }
  ]);

  // Track if the user has sent a message
  const [hasSentMessage, setHasSentMessage] = useState(false);
  
  const handleSend = () => {
    if (!input.trim()) return;
    
    if (hasSentMessage) {
      // If the user has already sent a message, show the waitlist popup
      openWaitlist();
      return;
    }
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user' as const,
      time: formatTime(new Date())
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Set flag that user has sent a message
    setHasSentMessage(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: "Thanks for your message! I've analyzed your query and can help with that. To access personalized AI training advice, please join our waitlist for when this feature goes live.",
        sender: 'ai' as const,
        time: formatTime(new Date())
      };
      
      setMessages(prev => [...prev, aiResponse]);
      
      // Prompt user to join waitlist after AI responds
      setTimeout(() => {
        openWaitlist();
      }, 1500);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-6 h-[calc(100vh-64px)] flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">AI Fitness Trainer</h1>
        <p className="text-gray-600">Get personalized advice and guidance for your fitness journey</p>
      </div>
      
      <Card className="flex-1 flex flex-col overflow-hidden">
        <CardContent className="p-4 flex flex-col h-full">
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg px-4 py-3 ${
                    message.sender === 'user' 
                      ? 'bg-fitness-primary text-white' 
                      : 'bg-gray-100'
                  }`}
                >
                  <p>{message.text}</p>
                  <p className={`text-xs mt-1 text-right ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Input
              placeholder="Ask a question or share your fitness goals..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1"
            />
            <Button onClick={handleSend} className="px-3">
              <Send size={18} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AITrainerContent;
