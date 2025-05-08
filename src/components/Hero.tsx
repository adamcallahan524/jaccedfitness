
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
      {/* Modern Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-fitness-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-fitness-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Jacced Fitness</span> AI Trainer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Premium AI fitness solution for gyms and individuals. Offer personalized workout plans and nutrition guidance to your members or use it yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard" className="fitness-button text-center">
                Get Started
              </Link>
              <Link to="/features" className="px-6 py-3 rounded-full font-medium border border-fitness-primary text-fitness-primary hover:bg-fitness-primary/10 transition-all duration-300 text-center">
                For Gym Owners
              </Link>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white">
                  <span className="text-xs">🏋️</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white">
                  <span className="text-xs">🏃</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white">
                  <span className="text-xs">💪</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Used by <span className="font-bold">250+ gyms</span> and <span className="font-bold">10,000+</span> fitness enthusiasts
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            {/* Modern UI Preview */}
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border flex flex-col">
              <div className="bg-gradient-to-r from-fitness-primary to-fitness-accent p-1">
                <div className="bg-white p-4 rounded-t-xl">
                  <h3 className="font-bold text-xl mb-4 flex items-center">
                    <svg className="h-5 w-5 mr-2 text-fitness-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Dashboard Analytics
                  </h3>
                  
                  {/* Dashboard Preview */}
                  <div className="space-y-4">
                    {/* Workout Progress */}
                    <div className="p-3 border rounded-lg bg-gray-50">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-sm">Workout Completion</h4>
                        <span className="text-sm font-bold text-green-500">+12%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-fitness-primary h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    
                    {/* Nutrition Tracking */}
                    <div className="p-3 border rounded-lg bg-gray-50">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-sm">Nutrition Goals</h4>
                        <span className="text-sm font-bold text-amber-500">75%</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        <div>
                          <p className="text-xs text-gray-500">Protein</p>
                          <div className="w-full bg-gray-200 h-1 rounded-full mt-1">
                            <div className="bg-blue-500 h-1 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Carbs</p>
                          <div className="w-full bg-gray-200 h-1 rounded-full mt-1">
                            <div className="bg-green-500 h-1 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Fats</p>
                          <div className="w-full bg-gray-200 h-1 rounded-full mt-1">
                            <div className="bg-yellow-500 h-1 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Today's Plan */}
                    <div className="p-3 border rounded-lg bg-gray-50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">Today's Plan</h4>
                        <span className="text-xs bg-fitness-primary/10 text-fitness-primary px-2 py-0.5 rounded-full">
                          Customized
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md bg-fitness-primary/20 flex items-center justify-center text-fitness-primary">
                          1
                        </div>
                        <div className="text-xs">
                          <p className="font-medium">Upper Body Focus</p>
                          <p className="text-gray-500">4 exercises • 45 min</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center bg-gray-50">
                <p className="text-xs text-gray-500">Last updated: Today, 10:45 AM</p>
                <button className="text-xs bg-fitness-primary text-white px-3 py-1 rounded-full">View Full Dashboard</button>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-3 rounded-xl shadow-lg rotate-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-xs">
                  <p className="font-medium">Goals Met</p>
                  <p className="text-green-600 font-bold">+23% this week</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 transform bg-white p-3 rounded-xl shadow-lg -rotate-3 hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-xs">
                  <p className="font-medium">Member Engagement</p>
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
