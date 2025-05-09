
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Dumbbell, Calendar, Activity, Heart, Users, Menu, Building2, MessageSquare, Flag, Barcode } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useWaitlist } from '../../context/WaitlistContext';

const DashboardMobileNav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { openWaitlist } = useWaitlist();
  
  // Real routes that exist in the application
  const realRoutes = [
    '/dashboard',
    '/dashboard/workouts',
    '/dashboard/nutrition',
    '/dashboard/progress',
    '/dashboard/ai-trainer',
    '/dashboard/gym-check-in',
    '/gym-manager'
  ];
  
  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Dumbbell size={20} />, label: 'Workouts', path: '/dashboard/workouts' },
    { icon: <Calendar size={20} />, label: 'Nutrition', path: '/dashboard/nutrition' },
    { icon: <Activity size={20} />, label: 'Progress', path: '/dashboard/progress' },
    { icon: <MessageSquare size={20} />, label: 'AI Trainer', path: '/dashboard/ai-trainer' },
    { icon: <Barcode size={20} />, label: 'Gym Check-In', path: '/dashboard/gym-check-in' },
    { icon: <Flag size={20} />, label: 'Goals', path: '/dashboard/goals' },
    { icon: <Heart size={20} />, label: 'Health', path: '/dashboard/health' },
    { icon: <Users size={20} />, label: 'Community', path: '/dashboard/community' },
    { icon: <Building2 size={20} />, label: 'Gym Manager', path: '/gym-manager' },
  ];

  // Handle mobile nav item click - show waitlist for routes that don't exist
  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (!realRoutes.includes(path)) {
      e.preventDefault();
      openWaitlist();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-between items-center px-2 py-2 md:hidden">
      <Link
        to="/dashboard"
        className={`p-2 rounded-lg flex flex-col items-center ${
          pathname === '/dashboard' ? 'text-fitness-primary' : 'text-gray-500'
        }`}
      >
        <Home size={20} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      
      <Link
        to="/dashboard/workouts"
        className={`p-2 rounded-lg flex flex-col items-center ${
          pathname === '/dashboard/workouts' ? 'text-fitness-primary' : 'text-gray-500'
        }`}
      >
        <Dumbbell size={20} />
        <span className="text-xs mt-1">Workouts</span>
      </Link>
      
      <Link
        to="/dashboard/gym-check-in"
        className={`p-2 rounded-lg flex flex-col items-center ${
          pathname === '/dashboard/gym-check-in' ? 'text-fitness-primary' : 'text-gray-500'
        }`}
      >
        <Barcode size={20} />
        <span className="text-xs mt-1">Check In</span>
      </Link>
      
      <Link
        to="/dashboard/ai-trainer"
        className={`p-2 rounded-lg flex flex-col items-center ${
          pathname === '/dashboard/ai-trainer' ? 'text-fitness-primary' : 'text-gray-500'
        }`}
      >
        <MessageSquare size={20} />
        <span className="text-xs mt-1">AI Trainer</span>
      </Link>
      
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 rounded-lg flex flex-col items-center text-gray-500">
            <Menu size={20} />
            <span className="text-xs mt-1">More</span>
          </button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="py-6">
            <h2 className="text-lg font-bold mb-6">Menu</h2>
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                      isActive 
                        ? 'bg-fitness-primary text-white font-medium' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={(e) => handleItemClick(e, item.path)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DashboardMobileNav;
