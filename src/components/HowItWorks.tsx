
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'License for Your Gym',
      description: 'Get Jacced Fitness for your gym with custom branding and unlimited member accounts.'
    },
    {
      number: '02',
      title: 'Member Onboarding',
      description: 'Members set their fitness goals, provide body metrics, and access to available equipment.'
    },
    {
      number: '03',
      title: 'AI-Powered Plans',
      description: 'Each member gets daily workouts and nutrition guidance designed for their unique journey.'
    },
    {
      number: '04',
      title: 'Track & Refine',
      description: 'Monitor member engagement, satisfaction, and health outcomes across your entire gym.'
    }
  ];

  return (
    <section className="fitness-section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">
            Elevate your gym's personal training offerings with our AI-powered fitness platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="fitness-card h-full">
                <span className="block text-4xl font-bold text-fitness-accent mb-4">{step.number}</span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="#4CC9F0"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/dashboard" className="fitness-button inline-block">
            Start Your Gym's Fitness Revolution
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
