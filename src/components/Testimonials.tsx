
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "FitLife Gym",
      role: "150+ members using Jacced Fitness",
      content: "Since implementing Jacced Fitness, our member retention has increased by 35%. The personalized workout plans keep our members engaged and coming back.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 5,
      highlight: "35% increased retention"
    },
    {
      name: "Michael Chen",
      role: "Individual User",
      content: "As someone who struggled to build muscle, this AI trainer understood exactly what my body needed. The results speak for themselves!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 5,
      highlight: "20lbs muscle gain in 3 months"
    },
    {
      name: "Elite Athletics",
      role: "300+ active members",
      content: "Jacced Fitness gives us a competitive edge. Our members love the personalized experience, and it's freed up our trainers to focus on higher-value services.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 5,
      highlight: "45% increase in PT revenue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transformations & <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-gray-600 text-lg">
            See how gyms and individuals are crushing their fitness goals with Jacced Fitness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-40 w-full bg-gradient-to-r from-fitness-primary/10 to-fitness-accent/10 relative">
                <div className="absolute top-6 left-6 px-3 py-1 bg-white rounded-full text-sm font-medium text-fitness-primary shadow-md">
                  {testimonial.highlight}
                </div>
                <div className="absolute -bottom-12 left-6">
                  <div className="h-24 w-24 rounded-full border-4 border-white overflow-hidden shadow-md">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <CardContent className="pt-16 pb-6">
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
                
                <p className="text-gray-600">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="fitness-button">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
