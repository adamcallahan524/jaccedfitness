
import React from 'react';
import { NavLink } from "react-router-dom";
import { useWaitlist } from '../../context/WaitlistContext';
import {
  Activity,
  BarChart,
  Home,
  Dumbbell,
  TrendingUp,
  Heart,
  Users,
  Target,
  MessageCircle,
  Menu
} from 'lucide-react';

const DashboardMobileNav = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white md:hidden">
      <div className="grid grid-cols-5 gap-1">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-2 ${
              isActive ? "text-fitness-primary" : "text-gray-600"
            }`
          }
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
        <button
          onClick={openWaitlist}
          className="flex flex-col items-center justify-center py-2 text-gray-600"
        >
          <Menu className="h-5 w-5" />
          <span className="text-xs mt-1">More</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardMobileNav;
