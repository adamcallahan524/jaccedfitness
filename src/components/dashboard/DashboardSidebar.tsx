
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Dumbbell, Calendar, Activity, Heart, Users, Flag, Building2, MessageSquare, Barcode } from 'lucide-react';
import { useWaitlist } from '../../context/WaitlistContext';

const DashboardSidebar = () => {
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

  // Handle sidebar item click - show waitlist for routes that don't exist
  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (!realRoutes.includes(path)) {
      e.preventDefault();
      openWaitlist();
    }
  };

  return (
    <aside className="min-h-screen w-64 border-r bg-white hidden md:block">
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-sm font-medium text-gray-500 uppercase">Menu</h2>
        </div>
        
        <nav className="space-y-1">
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
    </aside>
  );
};

export default DashboardSidebar;
