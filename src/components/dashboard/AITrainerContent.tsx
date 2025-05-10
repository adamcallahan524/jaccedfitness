
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Camera, Heart, Clock, Dumbbell, Upload, Info, Brain, User } from 'lucide-react';
import { useWaitlist } from '../../context/WaitlistContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      text: "👋 Hi there! I'm your AI Fitness Trainer. I'm here to guide you from start to finish in your fitness journey. Ask me about workout techniques, form checks, nutrition advice, or personalized plans!",
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
        text: "I understand your question about workout optimization. I can analyze your form from videos, suggest adjustments to your workout plan based on how you're feeling, and provide real-time guidance during exercises. To access these personalized features, please join our waitlist.",
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

  // Example suggested questions that demonstrate AI capabilities
  const suggestedQuestions = [
    { text: "Check my squat form", icon: <Camera size={16} /> },
    { text: "I'm feeling tired today", icon: <Heart size={16} /> },
    { text: "How do I use this machine?", icon: <Info size={16} /> },
    { text: "Update my workout plan", icon: <Dumbbell size={16} /> }
  ];

  return (
    <div className="p-6 h-[calc(100vh-64px)] flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">AI Fitness Trainer</h1>
        <p className="text-gray-600">Your 24/7 workout companion - from warm-up to cool-down</p>
      </div>
      
      <Tabs defaultValue="chat" className="flex-1 flex flex-col">
        <TabsList className="mb-4">
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="capabilities">What I Can Do</TabsTrigger>
        </TabsList>
        
        <TabsContent value="chat" className="flex-1 flex flex-col">
          <Card className="flex-1 flex flex-col overflow-hidden">
            <CardContent className="p-4 flex flex-col h-full">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
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
              
              {/* Suggested questions */}
              {!hasSentMessage && (
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Try asking about:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((q, i) => (
                      <Button 
                        key={i} 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => {
                          setInput(q.text);
                        }}
                      >
                        {q.icon}
                        <span>{q.text}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={openWaitlist}
                  className="px-3"
                >
                  <Upload size={18} />
                </Button>
                <Input
                  placeholder="Ask me anything about your fitness journey..."
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
        </TabsContent>
        
        <TabsContent value="capabilities" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                  <Camera size={24} />
                </div>
                <h3 className="text-xl font-bold">Form Analysis</h3>
                <p className="text-gray-600">Upload videos of your exercise form and get instant feedback and correction suggestions.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mb-2">
                  <Dumbbell size={24} />
                </div>
                <h3 className="text-xl font-bold">Custom Workouts</h3>
                <p className="text-gray-600">Get personalized workout plans based on your goals, equipment access, and fitness level.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mb-2">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-bold">Mood Adaptations</h3>
                <p className="text-gray-600">Having a low energy day? I'll adapt your workout based on how you're feeling.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-2">
                  <Info size={24} />
                </div>
                <h3 className="text-xl font-bold">Equipment Guidance</h3>
                <p className="text-gray-600">Learn how to use any gym equipment with detailed instructions and technique tips.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center text-red-600 mb-2">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold">Real-Time Coaching</h3>
                <p className="text-gray-600">Get step-by-step guidance during your workout, just like having a trainer by your side.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-2">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-bold">Progressive Adaptation</h3>
                <p className="text-gray-600">I learn from your progress and automatically adjust your program as you improve.</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-fitness-primary/5 border-fitness-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <User size={24} className="text-fitness-primary" />
                <h3 className="text-xl font-bold">Your 24/7 Personal Coach</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Unlike human trainers who are only available during sessions, I'm with you from the start to finish of your fitness journey - available whenever and wherever you need guidance.
              </p>
              <Button onClick={openWaitlist} className="w-full">Join Waitlist for Early Access</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AITrainerContent;
