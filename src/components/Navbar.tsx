
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-fitness-primary to-fitness-accent flex items-center justify-center">
            <span className="text-white font-bold text-lg">PP</span>
          </div>
          <span className="font-bold text-xl">Physique Power</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-gray-600 hover:text-fitness-primary transition-colors">Home</Link>
          <Link to="/features" className="font-medium text-gray-600 hover:text-fitness-primary transition-colors">Features</Link>
          <Link to="/pricing" className="font-medium text-gray-600 hover:text-fitness-primary transition-colors">Pricing</Link>
          <Link to="/about" className="font-medium text-gray-600 hover:text-fitness-primary transition-colors">About</Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/dashboard">
            <Button variant="outline" className="hidden md:block">Log In</Button>
          </Link>
          <Link to="/dashboard">
            <Button className="bg-fitness-primary hover:bg-fitness-secondary">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
