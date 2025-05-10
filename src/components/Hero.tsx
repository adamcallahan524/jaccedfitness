
import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';
import { useWaitlist } from '../context/WaitlistContext';

const Hero = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
      {/* Modern Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-fitness-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-fitness-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 mb-6">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium">Transforming Fitness</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Elevate Your Fitness</span> With AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Premium AI fitness solution for gyms and individuals. Replace expensive trainers with personalized workout plans and nutrition guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard" className="fitness-button text-center group">
                <span className="flex items-center justify-center">
                  Experience Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </span>
              </Link>
              <Link to="/gym-manager" className="px-6 py-3 rounded-full font-medium border border-fitness-primary text-fitness-primary hover:bg-fitness-primary/10 transition-all duration-300 text-center">
                For Gym Owners
              </Link>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm font-medium">AI-Powered Training</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm font-medium">Cost Effective</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm font-medium">24/7 Availability</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            {/* Modern Hero Image */}
            <div className="relative z-10 overflow-hidden rounded-2xl border shadow-xl">
              <div className="aspect-[5/3] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Person with trainer using digital fitness app" 
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-xl mb-2">AI-Powered Training</h3>
                  <p className="text-sm text-white/80">Get personalized workouts, nutrition plans, and real-time feedback</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-3 rounded-xl shadow-lg rotate-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <div className="text-xs">
                  <p className="font-medium">Cost Savings</p>
                  <p className="text-green-600 font-bold">Save 70% vs. trainers</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 transform bg-white p-3 rounded-xl shadow-lg -rotate-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Dumbbell className="h-4 w-4 text-blue-600" />
                </div>
                <div className="text-xs">
                  <p className="font-medium">Gym Success</p>
                  <p className="text-blue-600 font-bold">87% retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
