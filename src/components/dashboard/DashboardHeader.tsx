
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, MessageCircle } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <header className="bg-white border-b px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <Link to="/dashboard" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-fitness-primary to-fitness-accent flex items-center justify-center">
          <span className="text-white font-bold text-xs">PP</span>
        </div>
        <span className="font-bold text-lg hidden sm:block">Physique Power</span>
      </Link>
      
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <MessageCircle size={20} className="text-gray-600" />
        </button>
        <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center">
          <User size={18} className="text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
