
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistDialog: React.FC<WaitlistDialogProps> = ({ open, onOpenChange }) => {
  const handleJoinWaitlist = () => {
    window.open("https://app.formbricks.com/s/cmaggh8cg4xl6x101fumkedlg", "_blank");
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
          
          <Button 
            className="w-full" 
            onClick={handleJoinWaitlist}
          >
            Join Waitlist
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
