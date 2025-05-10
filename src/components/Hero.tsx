
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
            {/* Modern Dashboard Preview Image */}
            <div className="relative z-10 overflow-hidden rounded-2xl border shadow-xl bg-white transform rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="aspect-[5/3] relative overflow-hidden">
                {/* Modern Dashboard Interface */}
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
                        <div className="h-4 w-24 font-medium text-sm">Engagement</div>
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
                  
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex items-center mb-2">
                        <div className="text-sm font-medium">AI Trainer Usage</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-lg font-bold text-fitness-primary">87%</span>
                          <span className="text-xs text-gray-500">Member adoption</span>
                        </div>
                        <div className="h-16 w-16">
                          <div className="h-full w-full rounded-full bg-fitness-primary/10 flex items-center justify-center">
                            <div className="h-12 w-12 rounded-full bg-fitness-primary/20 flex items-center justify-center">
                              <div className="h-8 w-8 rounded-full bg-fitness-primary/60 flex items-center justify-center text-white text-xs font-medium">
                                87%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex items-center mb-2">
                        <div className="text-sm font-medium">Member Retention</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <span className="text-lg font-bold text-green-500">+32%</span>
                            <svg className="w-4 h-4 text-green-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                          </div>
                          <span className="text-xs text-gray-500">Since last quarter</span>
                        </div>
                        <div className="flex items-end space-x-1">
                          <div className="w-3 bg-gray-200 rounded-t-sm h-8"></div>
                          <div className="w-3 bg-gray-200 rounded-t-sm h-10"></div>
                          <div className="w-3 bg-gray-200 rounded-t-sm h-6"></div>
                          <div className="w-3 bg-gray-200 rounded-t-sm h-9"></div>
                          <div className="w-3 bg-green-500 rounded-t-sm h-12"></div>
                          <div className="w-3 bg-green-500 rounded-t-sm h-16"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-medium">Most Popular Programs</div>
                      <div className="h-7 w-20 rounded-md bg-fitness-primary flex items-center justify-center text-xs text-white font-medium">View All</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-md flex flex-col items-center justify-center p-1">
                        <div className="h-6 w-6 rounded-full bg-purple-200 flex items-center justify-center mb-1">
                          <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                        </div>
                        <div className="text-xs text-center font-medium">HIIT</div>
                      </div>
                      <div className="h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-md flex flex-col items-center justify-center p-1">
                        <div className="h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mb-1">
                          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                        </div>
                        <div className="text-xs text-center font-medium">Strength</div>
                      </div>
                      <div className="h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-md flex flex-col items-center justify-center p-1">
                        <div className="h-6 w-6 rounded-full bg-green-200 flex items-center justify-center mb-1">
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs text-center font-medium">Cardio</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="w-full p-6 text-white">
                    <h3 className="font-bold text-xl mb-2">Gym Manager Dashboard</h3>
                    <p className="text-sm text-white/90 mb-3">Real-time analytics to maximize your gym's potential</p>
                    <Link to="/dashboard" className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                      See It Live <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-fitness-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-fitness-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
