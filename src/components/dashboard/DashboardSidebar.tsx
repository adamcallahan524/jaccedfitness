
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
  Building,
} from 'lucide-react';

const DashboardSidebar = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <aside className="hidden md:block w-64 bg-sidebar-background border-r">
      <div className="h-full py-6 px-3 flex flex-col">
        <div className="space-y-1">
          <h2 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Dashboard
          </h2>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive
                  ? "bg-fitness-primary text-white"
                  : "text-gray-700 hover:text-fitness-primary hover:bg-gray-100"
              }`
            }
          >
            <Home className="h-5 w-5" />
            <span>Overview</span>
          </NavLink>
          <NavLink
            to="/dashboard/workouts"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive
                  ? "bg-fitness-primary text-white"
                  : "text-gray-700 hover:text-fitness-primary hover:bg-gray-100"
              }`
            }
          >
            <Dumbbell className="h-5 w-5" />
            <span>Workouts</span>
          </NavLink>
          <NavLink
            to="/dashboard/nutrition"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive
                  ? "bg-fitness-primary text-white"
                  : "text-gray-700 hover:text-fitness-primary hover:bg-gray-100"
              }`
            }
          >
            <BarChart className="h-5 w-5" />
            <span>Nutrition</span>
          </NavLink>
          <NavLink
            to="/dashboard/progress"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive
                  ? "bg-fitness-primary text-white"
                  : "text-gray-700 hover:text-fitness-primary hover:bg-gray-100"
              }`
            }
          >
            <TrendingUp className="h-5 w-5" />
            <span>Progress</span>
          </NavLink>
          <NavLink
            to="/dashboard/gym-check-in"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive
                  ? "bg-fitness-primary text-white"
                  : "text-gray-700 hover:text-fitness-primary hover:bg-gray-100"
              }`
            }
          >
            <Activity className="h-5 w-5" />
            <span>Gym Check-in</span>
          </NavLink>
          <NavLink
            to="/dashboard/ai-trainer"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive
                  ? "bg-fitness-primary text-white"
                  : "text-gray-700 hover:text-fitness-primary hover:bg-gray-100"
              }`
            }
          >
            <MessageCircle className="h-5 w-5" />
            <span>AI Trainer</span>
          </NavLink>
          <NavLink
            to="/gym-manager"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive
                  ? "bg-fitness-primary text-white"
                  : "text-gray-700 hover:text-fitness-primary hover:bg-gray-100"
              }`
            }
          >
            <Building className="h-5 w-5" />
            <span>Gym Manager</span>
          </NavLink>
        </div>
        
        <div className="mt-6 space-y-1">
          <h2 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Coming Soon
          </h2>
          <button
            onClick={openWaitlist}
            className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:text-fitness-primary hover:bg-gray-100 transition-all"
          >
            <Target className="h-5 w-5" />
            <span>Goals</span>
          </button>
          <button
            onClick={openWaitlist}
            className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:text-fitness-primary hover:bg-gray-100 transition-all"
          >
            <Heart className="h-5 w-5" />
            <span>Health</span>
          </button>
          <button
            onClick={openWaitlist}
            className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:text-fitness-primary hover:bg-gray-100 transition-all"
          >
            <Users className="h-5 w-5" />
            <span>Community</span>
          </button>
        </div>
        
        <div className="mt-auto px-3">
          <div className="rounded-lg bg-gray-100 p-4 border border-gray-200">
            <p className="text-sm font-medium mb-3">Need personalized help?</p>
            <button 
              onClick={openWaitlist}
              className="w-full px-3 py-2 text-xs rounded-lg bg-fitness-primary text-white hover:bg-fitness-primary/90 transition-colors"
            >
              Talk to AI Coach
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
