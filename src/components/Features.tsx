
import React from 'react';
import { Dumbbell, Calendar, Activity, Heart } from 'lucide-react';

const Features = () => {
  const featureItems = [
    {
      icon: <Dumbbell className="h-8 w-8 text-fitness-primary" />,
      title: 'Personalized Workouts',
      description: 'Custom workout plans based on your goals, equipment, and fitness level.'
    },
    {
      icon: <Calendar className="h-8 w-8 text-fitness-primary" />,
      title: 'Nutrition Coaching',
      description: 'Get meal suggestions and nutrition advice tailored to your training schedule.'
    },
    {
      icon: <Activity className="h-8 w-8 text-fitness-primary" />,
      title: 'Progress Tracking',
      description: 'Track your progress with detailed metrics and visual representations.'
    },
    {
      icon: <Heart className="h-8 w-8 text-fitness-primary" />,
      title: 'Community Support',
      description: 'Connect with friends and get motivated by the community.'
    }
  ];

  return (
    <section className="fitness-section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Features to <span className="gradient-text">Power Up</span> Your Fitness
          </h2>
          <p className="text-gray-600 text-lg">
            Our AI-driven platform adapts to your unique needs and helps you achieve your fitness goals efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((feature, index) => (
            <div key={index} className="fitness-card bg-white hover:border-fitness-primary">
              <div className="mb-4 rounded-full bg-fitness-muted p-3 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
