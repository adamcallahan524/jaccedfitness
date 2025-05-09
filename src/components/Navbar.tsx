import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Dumbbell } from 'lucide-react';
import { useWaitlist } from '../context/WaitlistContext';

const Navbar = () => {
  const { openWaitlist } = useWaitlist();
  const [messagesOpen, setMessagesOpen] = React.useState(false);

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
            <Button variant="ghost" onClick={openWaitlist}>Pricing</Button>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden md:block" onClick={openWaitlist}>Log In</Button>
            <Link to="/dashboard">
              <Button className="bg-fitness-primary hover:bg-fitness-secondary">See It Live In Action</Button>
            </Link>
          </div>
        </div>
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
