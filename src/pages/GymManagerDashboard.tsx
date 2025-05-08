
import React from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import GymManagerOverview from '@/components/dashboard/GymManagerOverview';
import DashboardMobileNav from '@/components/dashboard/DashboardMobileNav';

const GymManagerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 pb-16 md:pb-0">
          <GymManagerOverview />
        </main>
      </div>
      <DashboardMobileNav />
    </div>
  );
};

export default GymManagerDashboard;
