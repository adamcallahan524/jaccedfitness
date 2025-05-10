
import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { useWaitlist } from '../../context/WaitlistContext';
import {
  Activity,
  BarChart,
  Home,
  Dumbbell,
  TrendingUp,
  MessageCircle,
  Menu,
  Building
} from 'lucide-react';

const DashboardMobileNav = () => {
  const { openWaitlist } = useWaitlist();
  const location = useLocation();
  const currentPath = location.pathname;

  // Only highlight Overview when exactly on /dashboard
  const isExactDashboard = currentPath === "/dashboard";
  
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white md:hidden z-20">
      <div className="grid grid-cols-6 gap-1">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-2 ${
              isExactDashboard ? "text-fitness-primary" : "text-gray-600"
            }`
          }
          end
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </NavLink>
        <NavLink
          to="/dashboard/workouts"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-2 ${
              isActive ? "text-fitness-primary" : "text-gray-600"
            }`
          }
        >
          <Dumbbell className="h-5 w-5" />
          <span className="text-xs mt-1">Workouts</span>
        </NavLink>
        <NavLink
          to="/dashboard/nutrition"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-2 ${
              isActive ? "text-fitness-primary" : "text-gray-600"
            }`
          }
        >
          <BarChart className="h-5 w-5" />
          <span className="text-xs mt-1">Nutrition</span>
        </NavLink>
        <NavLink
          to="/dashboard/progress"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-2 ${
              isActive ? "text-fitness-primary" : "text-gray-600"
            }`
          }
        >
          <TrendingUp className="h-5 w-5" />
          <span className="text-xs mt-1">Progress</span>
        </NavLink>
        <NavLink
          to="/gym-manager"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-2 ${
              isActive ? "text-fitness-primary" : "text-gray-600"
            }`
          }
        >
          <Building className="h-5 w-5" />
          <span className="text-xs mt-1">Gym</span>
        </NavLink>
        <NavLink
          to="/dashboard/ai-trainer"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-2 ${
              isActive ? "text-fitness-primary" : "text-gray-600"
            }`
          }
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs mt-1">AI</span>
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardMobileNav;
