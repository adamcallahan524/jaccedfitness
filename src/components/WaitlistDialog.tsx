
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistDialog: React.FC<WaitlistDialogProps> = ({ open, onOpenChange }) => {
  const handleJoinWaitlist = () => {
    window.open("https://app.formbricks.com/s/cmaj3779t3ckzqy01qkcuxkzn", "_blank");
    onOpenChange(false);
  };

  const handleMeetTrainer = () => {
    window.location.href = "/dashboard/ai-trainer";
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join the Waitlist</DialogTitle>
        </DialogHeader>
        
        <div className="py-6">
          <p className="text-gray-600 mb-6">
            Jacced Fitness isn't live yet, but we're working hard to launch soon. 
            Join our waitlist to be the first to know when we launch!
          </p>
          
          <div className="flex flex-col gap-3">
            <Button 
              className="w-full bg-gradient-to-r from-fitness-primary to-fitness-accent hover:opacity-90"
              onClick={handleJoinWaitlist}
            >
              Join Waitlist
            </Button>
            
            <Button 
              variant="outline"
              className="w-full border-fitness-primary text-fitness-primary hover:bg-fitness-primary/10"
              onClick={handleMeetTrainer}
            >
              Meet Your AI Trainer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
