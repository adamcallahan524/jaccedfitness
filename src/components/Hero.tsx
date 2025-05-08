
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-fitness-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-fitness-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Personal <span className="gradient-text">AI Fitness Trainer</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Achieve your fitness goals with personalized workout plans and nutrition guidance
              tailored to your body and fitness level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard" className="fitness-button text-center">
                Start Your Journey
              </Link>
              <Link to="/features" className="px-6 py-3 rounded-full font-medium border border-fitness-primary text-fitness-primary hover:bg-fitness-primary/10 transition-all duration-300 text-center">
                Learn More
              </Link>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white">
                  <span className="text-xs">👤</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white">
                  <span className="text-xs">👤</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white">
                  <span className="text-xs">👤</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Joined by <span className="font-bold">10,000+</span> fitness enthusiasts
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border">
              <div className="bg-gradient-to-r from-fitness-primary to-fitness-accent p-1">
                <div className="bg-white p-6 rounded-t-xl">
                  <h3 className="font-bold text-xl mb-4">Today's Workout Plan</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 border rounded-lg">
                      <div className="h-12 w-12 bg-fitness-muted rounded-lg flex items-center justify-center text-fitness-primary font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">Barbell Squats</h4>
                        <p className="text-sm text-gray-500">4 sets × 12 reps</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 border rounded-lg">
                      <div className="h-12 w-12 bg-fitness-muted rounded-lg flex items-center justify-center text-fitness-primary font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Bench Press</h4>
                        <p className="text-sm text-gray-500">3 sets × 10 reps</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 border rounded-lg">
                      <div className="h-12 w-12 bg-fitness-muted rounded-lg flex items-center justify-center text-fitness-primary font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Deadlifts</h4>
                        <p className="text-sm text-gray-500">4 sets × 8 reps</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-center text-gray-500 text-sm">Personalized for your goals</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 bg-fitness-muted p-4 rounded-xl shadow-lg rotate-6 hidden lg:block">
              <p className="font-medium">Protein Intake</p>
              <p className="text-sm text-gray-500">130g / 150g</p>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                <div className="bg-fitness-accent h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-12 transform bg-fitness-muted p-4 rounded-xl shadow-lg -rotate-3 hidden lg:block">
              <p className="font-medium">Weekly Progress</p>
              <p className="text-sm text-green-600">+12% Strength</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
