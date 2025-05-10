
import React from 'react';
import { useWaitlist } from '../context/WaitlistContext';
import { ArrowRight, DollarSign, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GymSavingsSection = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-fitness-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-fitness-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Save Money</span>, Maximize Revenue
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered solution helps gym owners save on staffing costs while providing top-tier training to members.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 relative">
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 bg-fitness-primary/5 p-4 rounded-xl">
                    <div className="h-10 w-10 rounded-lg bg-fitness-primary/20 text-fitness-primary flex items-center justify-center mb-4">
                      <DollarSign size={20} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Reduce Staffing Costs</h3>
                    <p className="text-gray-600">Save up to 62% on personal training staff costs through AI automation</p>
                  </div>
                  
                  <div className="flex-1 bg-fitness-primary/5 p-4 rounded-xl">
                    <div className="h-10 w-10 rounded-lg bg-fitness-primary/20 text-fitness-primary flex items-center justify-center mb-4">
                      <TrendingUp size={20} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Increase Revenue</h3>
                    <p className="text-gray-600">Offer premium services at scale without additional staff costs</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <h3 className="font-bold text-lg mb-3">Cost Comparison</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium text-gray-700">Traditional Personal Trainers</span>
                      <span className="font-bold text-red-500">$40-65 / hour</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium text-gray-700">Jacced AI Platform</span>
                      <span className="font-bold text-green-500">$8-15 / member / month</span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-3">
                      <span className="font-bold">Annual Savings</span>
                      <span className="font-bold text-green-600">$18,000-32,000 / year</span>
                    </div>
                  </div>
                </div>
                
                <Button onClick={openWaitlist} className="w-full">Calculate Your Gym's Savings</Button>
              </div>
              
              {/* Fixed arrow position to be properly centered in the circle */}
              <div className="hidden md:flex absolute -right-6 top-1/2 transform -translate-y-1/2 h-12 w-12 bg-fitness-accent rounded-full items-center justify-center text-white">
                <ArrowRight size={20} className="mx-auto" />
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Why Gyms Are Switching to AI Training</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-fitness-primary text-white flex items-center justify-center shrink-0">
                  <Users size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Scale Personal Training</h3>
                  <p className="text-gray-600">Provide personalized training to all members without adding staff costs. One AI can serve thousands of members simultaneously.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-fitness-primary text-white flex items-center justify-center shrink-0">
                  <DollarSign size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Eliminate HR Headaches</h3>
                  <p className="text-gray-600">No more trainer turnover, scheduling conflicts, or payroll complications. Our AI is available 24/7 with consistent quality.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-fitness-primary text-white flex items-center justify-center shrink-0">
                  <TrendingUp size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Member Retention</h3>
                  <p className="text-gray-600">According to the 2023 IHRSA report, members with personalized plans are 83% more likely to continue their membership compared to those without guidance.</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  onClick={openWaitlist}
                  variant="outline" 
                  className="border-fitness-primary text-fitness-primary hover:bg-fitness-primary/10"
                >
                  Book a Demo for Your Gym
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymSavingsSection;
