
import React, { createContext, useState, useContext } from 'react';
import WaitlistDialog from '../components/WaitlistDialog';

interface WaitlistContextType {
  openWaitlist: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export const useWaitlist = (): WaitlistContextType => {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error('useWaitlist must be used within a WaitlistProvider');
  }
  return context;
};

export const WaitlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openWaitlist = () => {
    console.log("Opening waitlist dialog");
    setIsOpen(true);
  };

  return (
    <WaitlistContext.Provider value={{ openWaitlist, isOpen, setIsOpen }}>
      {children}
      {/* Render dialog directly without additional router context */}
      <WaitlistDialog open={isOpen} onOpenChange={setIsOpen} />
    </WaitlistContext.Provider>
  );
};
