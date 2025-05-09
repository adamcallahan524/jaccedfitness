
import React, { createContext, useState, useContext } from 'react';
import WaitlistDialog from '../components/WaitlistDialog';

interface WaitlistContextType {
  openWaitlist: () => void;
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
    setIsOpen(true);
  };

  return (
    <WaitlistContext.Provider value={{ openWaitlist }}>
      {children}
      <WaitlistDialog open={isOpen} onOpenChange={setIsOpen} />
    </WaitlistContext.Provider>
  );
};
