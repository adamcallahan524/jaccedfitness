
import React from 'react';
import { Dumbbell, Calendar, Activity, Heart } from 'lucide-react';

const Features = () => {
  const featureItems = [
    {
      icon: <Dumbbell className="h-8 w-8 text-fitness-primary" />,
      title: 'Personalized Workouts',
      description: 'Custom workout plans based on your gym\'s equipment and your members\' fitness levels.'
    },
    {
      icon: <Calendar className="h-8 w-8 text-fitness-primary" />,
      title: 'Nutrition Coaching',
      description: 'Provide meal suggestions and nutrition advice tailored to each member\'s training.'
    },
    {
      icon: <Activity className="h-8 w-8 text-fitness-primary" />,
      title: 'Progress Tracking',
      description: 'Help members track their progress with detailed metrics and visual representations.'
    },
    {
      icon: <Heart className="h-8 w-8 text-fitness-primary" />,
      title: 'Member Engagement',
      description: 'Increase retention by creating a community where members stay motivated together.'
    }
  ];

  return (
    <section className="fitness-section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Features to <span className="gradient-text">Power Up</span> Your Gym
          </h2>
          <p className="text-gray-600 text-lg">
            Our AI-driven platform helps gyms provide personalized training to all members, increasing engagement and retention.
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
