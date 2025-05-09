
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Dumbbell } from 'lucide-react';

const Navbar = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOpenWaitlist = () => {
    setWaitlistOpen(true);
    setSubmitted(false);
  };

  const handleSubmitWaitlist = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-fitness-primary to-fitness-accent flex items-center justify-center">
              <div className="flex items-center justify-center">
                <Dumbbell size={18} className="text-white" />
              </div>
            </div>
            <span className="font-bold text-xl">Jacced Fitness</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="font-medium text-gray-600 hover:text-fitness-primary transition-colors">Home</Link>
            <Button variant="ghost" onClick={handleOpenWaitlist}>Pricing</Button>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden md:block" onClick={handleOpenWaitlist}>Log In</Button>
            <Link to="/dashboard">
              <Button className="bg-fitness-primary hover:bg-fitness-secondary">See It Live In Action</Button>
            </Link>
          </div>
        </div>
      </nav>

      <Dialog open={waitlistOpen} onOpenChange={setWaitlistOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{submitted ? "You're on the list!" : "Join the Waitlist"}</DialogTitle>
            <DialogDescription>
              {submitted 
                ? "Thanks for your interest! We'll notify you when Jacced Fitness launches." 
                : "Jacced Fitness isn't live yet, but we're working hard to launch soon. Join our waitlist to be the first to know."}
            </DialogDescription>
          </DialogHeader>
          
          {!submitted ? (
            <form onSubmit={handleSubmitWaitlist} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                />
              </div>
              
              <DialogFooter>
                <Button type="submit" className="w-full">Join Waitlist</Button>
              </DialogFooter>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-6">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-center text-gray-600 mb-6">
                We've added <span className="font-medium">{email}</span> to our waitlist.
              </p>
              <Button onClick={() => setWaitlistOpen(false)}>Close</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
