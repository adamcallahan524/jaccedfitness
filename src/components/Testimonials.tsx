
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Lost 25 lbs in 3 months',
      content: 'The personalized workout plans and nutrition advice have completely transformed my fitness journey. I\'ve never felt stronger or more confident!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Michael Chen',
      role: 'Gained 15 lbs of muscle',
      content: 'As someone who struggled to build muscle, this AI trainer understood exactly what my body needed. The results speak for themselves!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Alicia Rodriguez',
      role: 'Marathon runner',
      content: 'The endurance training program helped me shave 15 minutes off my marathon time. I love how the app adapts to my progress week by week.',
      image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  return (
    <section className="fitness-section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 text-lg">
            Hear from our community members who have transformed their fitness with our AI trainer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="fitness-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
