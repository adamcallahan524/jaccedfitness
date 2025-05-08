
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-fitness-primary to-fitness-accent rounded-3xl overflow-hidden">
          <div className="py-16 px-8 md:px-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your gym's fitness offerings?</h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Join hundreds of gyms and thousands of individuals who have reached their fitness goals with Jacced Fitness AI trainer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/dashboard" 
                className="px-8 py-4 rounded-full font-medium bg-white text-fitness-primary hover:bg-opacity-90 transition-all duration-300 text-center"
              >
                Get Started Free
              </Link>
              <Link 
                to="/features" 
                className="px-8 py-4 rounded-full font-medium border border-white text-white hover:bg-white/10 transition-all duration-300 text-center"
              >
                Enterprise Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
