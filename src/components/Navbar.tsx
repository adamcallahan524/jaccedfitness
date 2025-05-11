import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Dumbbell, Menu, X } from 'lucide-react';
import { useWaitlist } from '../context/WaitlistContext';

const Navbar = () => {
  const { openWaitlist } = useWaitlist();
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-white/90 backdrop-blur-md"
      } border-b`}>
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
         <Link to="/" className="flex items-center gap-2">
  <img 
    src="/jaccedlogo.png" 
    alt="Jacced Fitness Logo" 
    className="h-14 w-auto" 
  />
</Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-medium text-gray-600 hover:text-fitness-primary transition-colors">Home</Link>
            <Button variant="ghost" onClick={openWaitlist}>Pricing</Button>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden md:block" onClick={openWaitlist}>Log In</Button>
            <Link to="/dashboard">
              <Button className="bg-fitness-primary hover:bg-fitness-secondary">See It Live</Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col p-4 space-y-3">
              <Link 
                to="/" 
                className="px-3 py-2 rounded-md hover:bg-gray-100 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <button 
                className="px-3 py-2 rounded-md hover:bg-gray-100 font-medium text-left"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWaitlist();
                }}
              >
                Pricing
              </button>
              <button 
                className="px-3 py-2 rounded-md hover:bg-gray-100 font-medium text-left"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWaitlist();
                }}
              >
                Log In
              </button>
              <div className="pt-2">
                <Link 
                  to="/dashboard"
                  className="block w-full px-3 py-2 bg-fitness-primary text-white rounded-md text-center font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  See It Live
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <Dialog open={messagesOpen} onOpenChange={setMessagesOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Messages</DialogTitle>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-auto">
            {/* Message content remains the same */}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
