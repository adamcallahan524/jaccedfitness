
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Upload, VideoIcon, Clock, CalendarCheck } from 'lucide-react';

const AITrainerContent = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'system', content: 'Hello! I\'m your AI fitness trainer. How can I help you today?' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message to chat history
    setChatHistory(prev => [...prev, { role: 'user', content: message }]);
    
    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        role: 'system', 
        content: "I've received your message. As your AI trainer, I'll help you with personalized advice based on your needs. What specific aspect of your fitness journey would you like assistance with today?" 
      }]);
    }, 1000);
    
    setMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-8/12">
          <h1 className="text-2xl font-bold mb-6">Your AI Fitness Trainer</h1>
          
          <Tabs defaultValue="chat" className="w-full mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <MessageSquare size={16} />
                <span>Chat</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <VideoIcon size={16} />
                <span>My Videos</span>
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex items-center gap-2">
                <Clock size={16} />
                <span>Schedule</span>
              </TabsTrigger>
              <TabsTrigger value="plans" className="flex items-center gap-2">
                <CalendarCheck size={16} />
                <span>My Plans</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="chat" className="space-y-4">
              <div className="border rounded-lg bg-gray-50 p-4 h-[500px] overflow-y-auto flex flex-col">
                <div className="flex-1 space-y-4">
                  {chatHistory.map((msg, index) => (
                    <div 
                      key={index}
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.role === 'user' 
                          ? 'bg-fitness-primary text-white ml-auto' 
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      {msg.content}
                    </div>
                  ))}
                </div>
                
                <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                  <Textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask your AI trainer about workout advice, nutrition plans, or modifications..."
                    className="resize-none flex-1"
                  />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" type="button">
                        <Upload size={16} className="mr-2" />
                        Upload
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Upload Content</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="border-2 border-dashed rounded-lg p-8 text-center">
                          <VideoIcon size={48} className="mx-auto mb-4 text-gray-400" />
                          <p className="text-sm text-gray-600 mb-2">Upload videos of your form for feedback</p>
                          <p className="text-xs text-gray-400">Drag files here or click to browse</p>
                          <input type="file" className="hidden" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="button">Upload</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Button type="submit">Send</Button>
                </form>
              </div>
            </TabsContent>
            
            <TabsContent value="videos">
              <div className="border rounded-lg p-8 bg-gray-50 text-center">
                <VideoIcon size={48} className="mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">Upload Form Videos</h3>
                <p className="text-gray-600 mb-6">Share videos of your exercises to receive personalized form feedback</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Upload Video</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Upload Video</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="border-2 border-dashed rounded-lg p-8 text-center">
                        <VideoIcon size={48} className="mx-auto mb-4 text-gray-400" />
                        <p className="text-sm text-gray-600 mb-2">Upload videos of your form for feedback</p>
                        <p className="text-xs text-gray-400">Drag files here or click to browse</p>
                        <input type="file" className="hidden" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="button">Upload</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </TabsContent>
            
            <TabsContent value="schedule">
              <div className="border rounded-lg p-6 bg-gray-50">
                <h3 className="text-lg font-medium mb-4">Your Weekly Schedule</h3>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="text-center font-medium">{day}</div>
                  ))}
                  {['Upper Body', 'Rest', 'Lower Body', 'Cardio', 'Full Body', 'Active Recovery', 'Rest'].map((workout, idx) => (
                    <div key={idx} className={`p-2 text-center text-sm rounded-md ${
                      workout === 'Rest' ? 'bg-gray-100' : 'bg-fitness-primary/10 border border-fitness-primary/20'
                    }`}>
                      {workout}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">Adjust Schedule</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="plans">
              <div className="border rounded-lg p-6 bg-gray-50">
                <h3 className="text-lg font-medium mb-4">Your Active Plans</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Strength Building - Week 8</h4>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">In Progress</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">4 workouts remaining this week</div>
                    <div className="mt-2 flex gap-2">
                      <Button size="sm" variant="outline">View Details</Button>
                      <Button size="sm">Modify Plan</Button>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Nutrition Plan - Cutting Phase</h4>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">2 weeks until review</div>
                    <div className="mt-2 flex gap-2">
                      <Button size="sm" variant="outline">View Details</Button>
                      <Button size="sm">Modify Plan</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:w-4/12">
          <div className="border rounded-lg p-4 mb-6">
            <h3 className="font-medium mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <VideoIcon size={16} className="mr-2" />
                Upload a new workout video
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare size={16} className="mr-2" />
                Ask for workout modification
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CalendarCheck size={16} className="mr-2" />
                Update my fitness goals
              </Button>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-3">Recent Insights</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Based on your recent workouts:</p>
                <p className="text-sm font-medium">Your squat form has improved by 15%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Nutrition suggestion:</p>
                <p className="text-sm font-medium">Consider adding more protein on training days</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Recovery:</p>
                <p className="text-sm font-medium">Your sleep quality affects your performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrainerContent;
