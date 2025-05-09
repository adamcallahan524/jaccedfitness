
import React from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardMobileNav from '@/components/dashboard/DashboardMobileNav';
import AITrainerContent from '@/components/dashboard/AITrainerContent';

const AITrainerPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 pb-16 md:pb-0">
          <AITrainerContent />
        </main>
      </div>
      <DashboardMobileNav />
    </div>
  );
};

export default AITrainerPage;
