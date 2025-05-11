
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "Individual",
      price: "$14.99",
      interval: "per month",
      description: "Perfect for personal fitness journeys",
      features: [
        "Personalized workout plans",
        "Nutrition guidance",
        "Progress tracking",
        "Workout library",
        "Community access"
      ],
      highlighted: false,
      cta: "Start Free Trial"
    },
    {
      name: "Gym Starter",
      price: "$299",
      interval: "per month",
      description: "Train up to 100 of your members",
      features: [
        "Up to 100 member licenses",
        "Branded member experience",
        "Gym owner dashboard",
        "Member analytics",
        "Email support",
        "Custom exercise library"
      ],
      highlighted: true,
      cta: "Contact Sales"
    },
    {
      name: "Enterprise",
      price: "Custom",
      interval: "pricing",
      description: "For gym chains & fitness centers",
      features: [
        "Unlimited member licenses",
        "Fully white-labeled experience",
        "Advanced analytics & reporting",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 priority support"
      ],
      highlighted: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
              <p className="text-xl text-gray-600">
                Choose the plan that's right for your fitness business or personal journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative ${plan.highlighted ? 'shadow-xl border-fitness-primary' : 'border-gray-200'}`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-fitness-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-0">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="mt-4 mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.interval}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-2 mt-1">
                            <Check size={16} className="text-green-500" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className={`w-full ${plan.highlighted ? 'bg-fitness-primary hover:bg-fitness-secondary' : ''}`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 max-w-3xl mx-auto text-center bg-white p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
              <p className="text-gray-600 mb-6">
                Our team can create a tailored package for your specific business requirements.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-fitness-primary hover:bg-fitness-secondary">
                  Contact Our Sales Team
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Everything you need to know about Jacced Fitness for your gym
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y">
              <div className="py-6">
                <h3 className="text-lg font-medium mb-2">How many licenses do I need for my gym?</h3>
                <p className="text-gray-600">
                  We recommend purchasing licenses based on your active membership count. Our Gym Essential plan covers up to 100 members, while Enterprise plans can accommodate unlimited members.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium mb-2">Can I customize the app with my gym's branding?</h3>
                <p className="text-gray-600">
                  Yes! All gym plans include custom branding capabilities. Enterprise plans offer a fully white-labeled experience with your logo, colors, and custom domain.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium mb-2">How does billing work for fluctuating member counts?</h3>
                <p className="text-gray-600">
                  We bill based on your plan tier. If your member count grows beyond your current plan, we'll help you upgrade to the appropriate tier for your needs.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium mb-2">Can individual members sign up separately from my gym?</h3>
                <p className="text-gray-600">
                  Yes, individuals can sign up for personal accounts. If they're members of your gym, they can link their accounts to access your gym's custom workouts and programs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
