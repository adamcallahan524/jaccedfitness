
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Dumbbell, Calendar, Activity, Heart, Users, Flag, Building2, MessageSquare } from 'lucide-react';

const DashboardSidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Dumbbell size={20} />, label: 'Workouts', path: '/dashboard/workouts' },
    { icon: <Calendar size={20} />, label: 'Nutrition', path: '/dashboard/nutrition' },
    { icon: <Activity size={20} />, label: 'Progress', path: '/dashboard/progress' },
    { icon: <MessageSquare size={20} />, label: 'AI Trainer', path: '/dashboard/ai-trainer' },
    { icon: <Flag size={20} />, label: 'Goals', path: '/dashboard/goals' },
    { icon: <Heart size={20} />, label: 'Health', path: '/dashboard/health' },
    { icon: <Users size={20} />, label: 'Community', path: '/dashboard/community' },
    { icon: <Building2 size={20} />, label: 'Gym Manager', path: '/gym-manager' },
  ];

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
