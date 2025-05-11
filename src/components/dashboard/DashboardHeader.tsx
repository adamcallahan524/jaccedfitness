
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, MessageCircle, Dumbbell } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useWaitlist } from '../../context/WaitlistContext';

const DashboardHeader = () => {
  const [notificationsOpen, setNotificationsOpen] = React.useState(false);
  const [messagesOpen, setMessagesOpen] = React.useState(false);
  const { openWaitlist } = useWaitlist();

  const notifications = [
    { id: 1, title: "Workout Reminder", message: "Don't forget your upper body workout today!", time: "10 minutes ago", isNew: true },
    { id: 2, title: "New Feature!", message: "Try out our AI Trainer for personalized advice", time: "2 hours ago", isNew: true },
    { id: 3, title: "Progress Update", message: "You've been consistent for 7 days!", time: "Yesterday", isNew: false },
  ];

  const messages = [
    { id: 1, from: "Coach Mike", message: "How was your workout today?", time: "Just now", avatar: "M" },
    { id: 2, from: "Nutrition Support", message: "Your meal plan for next week is ready", time: "2 hours ago", avatar: "N" },
    { id: 3, from: "System", message: "Welcome to Jacced Fitness! How can we help?", time: "2 days ago", avatar: "S" },
  ];

  const handleMessageClick = () => {
    setMessagesOpen(false);
    openWaitlist();
  };

  return (
    <header className="bg-white border-b px-4 py-3 flex items-center justify-between sticky top-0 z-50">
   <Link to="/" className="flex items-center gap-2">
  <img 
    src="/jaccedlogo.png" 
    alt="Jacced Fitness Logo" 
    className="h-15 w-auto" 
  />
</Link>
      
      <div className="flex items-center gap-4">
        <Dialog open={notificationsOpen} onOpenChange={setNotificationsOpen}>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 relative"
            onClick={() => setNotificationsOpen(true)}
          >
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Notifications</DialogTitle>
            </DialogHeader>
            <div className="max-h-[60vh] overflow-auto">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-3 border-b last:border-b-0 ${notification.isNew ? 'bg-blue-50' : ''} hover:bg-gray-50 cursor-pointer`}
                  onClick={() => {
                    setNotificationsOpen(false);
                    openWaitlist();
                  }}
                >
                  <div className="flex justify-between">
                    <h4 className="font-medium">{notification.title}</h4>
                    {notification.isNew && (
                      <span className="text-xs bg-fitness-primary text-white px-2 py-0.5 rounded-full">New</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
        
        <Dialog open={messagesOpen} onOpenChange={setMessagesOpen}>
          <button 
            className="p-2 rounded-full hover:bg-gray-100"
            onClick={() => setMessagesOpen(true)}
          >
            <MessageCircle size={20} className="text-gray-600" />
          </button>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Messages</DialogTitle>
            </DialogHeader>
            <div className="max-h-[60vh] overflow-auto">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className="p-3 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer"
                  onClick={handleMessageClick}
                >
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                      <span className="font-medium text-gray-600">{message.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{message.from}</h4>
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{message.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
        
        <div 
          className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
          onClick={openWaitlist}
        >
          <User size={18} className="text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
