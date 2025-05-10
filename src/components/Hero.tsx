
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
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
              <span className="text-sm font-medium">Transform Your Gym Business</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">AI Fitness Solutions</span> For Modern Gyms
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Replace expensive trainers with our AI platform. Increase member satisfaction, reduce costs, and grow your gym business with personalized workout plans and nutrition guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard" className="fitness-button text-center group">
                <span className="flex items-center justify-center">
                  See It Live
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
                <span className="text-sm font-medium">Reduce Staff Costs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm font-medium">Increase Retention</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm font-medium">24/7 Member Support</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            {/* Dashboard Preview Image */}
            <div className="relative z-10 overflow-hidden rounded-2xl border shadow-xl bg-white">
              <div className="aspect-[5/3] relative overflow-hidden">
                {/* Realistic Dashboard Interface */}
                <div className="w-full h-full bg-gray-50 p-4">
                  <div className="h-10 bg-white rounded-lg shadow-sm mb-3 flex items-center px-3">
                    <div className="h-4 w-4 rounded-full bg-fitness-primary mr-2"></div>
                    <div className="h-3 w-32 bg-gray-200 rounded-md"></div>
                    <div className="ml-auto flex gap-2">
                      <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                      <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex justify-between mb-2">
                        <div className="h-4 w-24 font-medium text-sm">Member Engagement</div>
                        <div className="text-xs text-green-500 font-bold">+23%</div>
                      </div>
                      <div className="flex items-end gap-2 h-12">
                        <div className="h-8 w-4 bg-fitness-primary/20 rounded-sm"></div>
                        <div className="h-10 w-4 bg-fitness-primary/40 rounded-sm"></div>
                        <div className="h-6 w-4 bg-fitness-primary/30 rounded-sm"></div>
                        <div className="h-11 w-4 bg-fitness-primary/60 rounded-sm"></div>
                        <div className="h-7 w-4 bg-fitness-primary/40 rounded-sm"></div>
                        <div className="h-12 w-4 bg-fitness-primary rounded-sm"></div>
                        <div className="h-9 w-4 bg-fitness-primary/70 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex justify-between mb-2">
                        <div className="h-4 w-24 font-medium text-sm">Revenue</div>
                        <div className="text-xs text-fitness-primary font-bold">$14,500/mo</div>
                      </div>
                      <div className="mt-2 h-12 bg-gray-100 rounded-md overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-fitness-primary to-fitness-accent rounded-md"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-medium">Popular Equipment</div>
                      <div className="h-7 w-20 rounded-md bg-fitness-primary flex items-center justify-center text-xs text-white font-medium">View Data</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 bg-gray-100 rounded-md flex flex-col items-center justify-center p-1">
                        <div className="h-6 w-6 rounded-full bg-fitness-primary/20 flex items-center justify-center mb-1">
                          <div className="h-3 w-3 rounded-full bg-fitness-primary"></div>
                        </div>
                        <div className="text-xs text-center font-medium">Cardio</div>
                      </div>
                      <div className="h-16 bg-gray-100 rounded-md flex flex-col items-center justify-center p-1">
                        <div className="h-6 w-6 rounded-full bg-fitness-accent/20 flex items-center justify-center mb-1">
                          <div className="h-3 w-3 rounded-full bg-fitness-accent"></div>
                        </div>
                        <div className="text-xs text-center font-medium">Weights</div>
                      </div>
                      <div className="h-16 bg-gray-100 rounded-md flex flex-col items-center justify-center p-1">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mb-1">
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs text-center font-medium">Machines</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="w-full p-6 text-white">
                    <h3 className="font-bold text-xl mb-2">Gym Manager Dashboard</h3>
                    <p className="text-sm text-white/90 mb-3">Real-time analytics to maximize your gym's potential</p>
                    <Link to="/gym-manager" className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                      Try It Live <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
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
