
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useWaitlist } from '../context/WaitlistContext';

const Footer = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const { openWaitlist } = useWaitlist();

  return (
    <>
      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
             <Link to="/" className="flex items-center gap-2">
              <img 
                src="/jaccedlogo.png" 
                alt="Jacced Fitness Logo" 
                className="h-16 w-auto" 
              />
             </Link>
              <p className="text-gray-600 mb-4">
                Your AI-powered fitness companion for gyms and fitness centers.
              </p>
            </div>
            
            <div className="flex justify-start md:justify-end">
              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-fitness-primary" onClick={() => window.open('/dashboard/ai-trainer', '_blank')}>Demo</Button></li>
                  <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-fitness-primary" onClick={() => window.open('/gym-manager', '_blank')}>Gym Manager Demo</Button></li>
                  <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-fitness-primary" onClick={openWaitlist}>Join Waitlist</Button></li>
                  <li><Button variant="link" className="p-0 h-auto text-gray-600 hover:text-fitness-primary" onClick={() => setContactDialogOpen(true)}>Contact</Button></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Jacced Fitness. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              For more information about Jacced Fitness, please contact us at:
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="font-medium text-center">
              <a href="mailto:justicechuk@gmail.com" className="text-fitness-primary hover:underline">
                justicechuk@gmail.com
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
