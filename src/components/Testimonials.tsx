
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'FitLife Gym',
      role: '150+ members using Jacced Fitness',
      content: 'Since implementing Jacced Fitness, our member retention has increased by 35%. The personalized workout plans keep our members engaged and coming back.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Michael Chen',
      role: 'Individual User',
      content: 'As someone who struggled to build muscle, this AI trainer understood exactly what my body needed. The results speak for themselves!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Elite Athletics',
      role: '300+ active members',
      content: 'Jacced Fitness gives us a competitive edge. Our members love the personalized experience, and it\'s freed up our trainers to focus on higher-value services.',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  return (
    <section className="fitness-section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 text-lg">
            Hear from our gyms and members who have transformed their fitness with Jacced Fitness
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
