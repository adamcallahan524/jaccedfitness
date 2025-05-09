import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  TrendingUp, 
  Users, 
  Calendar,
  BarChart,
  PieChart,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWaitlist } from '../../context/WaitlistContext';

const GymManagerOverview = () => {
  const { openWaitlist } = useWaitlist();
  // Example data for gym licenses and metrics
  const licenseData = {
    total: 100,
    used: 78,
    active: 65,
    inactive: 13
  };
  
  // Mock data for member activity
  const memberActivityData = [
    { date: 'Monday', count: 42 },
    { date: 'Tuesday', count: 38 },
    { date: 'Wednesday', count: 45 },
    { date: 'Thursday', count: 39 },
    { date: 'Friday', count: 48 },
    { date: 'Saturday', count: 52 },
    { date: 'Sunday', count: 30 },
  ];
  
  // Example data for top performing workouts
  const topWorkouts = [
    { name: 'Upper Body Blast', engagement: 89, popularity: '+12%' },
    { name: 'HIIT Cardio', engagement: 76, popularity: '+8%' },
    { name: 'Core Crusher', engagement: 72, popularity: '+5%' },
    { name: 'Leg Day', engagement: 68, popularity: '-2%' },
  ];
  
  // Example member retention metrics
  const retentionMetrics = {
    overall: 87,
    change: '+5%',
    trend: 'up',
    newMembers: 15,
    churned: 3
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Gym Manager Dashboard</h1>
        <p className="text-gray-600">FitLife Gym • Licenses Overview & Member Analytics</p>
      </div>
      
      {/* License Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Total Licenses</p>
                <p className="text-2xl font-bold">{licenseData.total}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-fitness-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-fitness-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Assigned Licenses</p>
                <p className="text-2xl font-bold">{licenseData.used}</p>
                <p className="text-xs text-gray-500">{licenseData.total - licenseData.used} available</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="mt-2">
              <Progress value={(licenseData.used / licenseData.total) * 100} className="h-1" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Active Users</p>
                <p className="text-2xl font-bold">{licenseData.active}</p>
                <div className="flex items-center text-xs text-green-600">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span>+8% this month</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Activity className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Inactive Users</p>
                <p className="text-2xl font-bold">{licenseData.inactive}</p>
                <div className="flex items-center text-xs text-red-600">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  <span>-3% this month</span>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* License Usage and Member Retention */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold flex items-center justify-between">
              <span>Weekly Member Activity</span>
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Last 7 days</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-60 w-full">
              {/* Member Activity Chart Visualization */}
              <div className="flex h-full items-end gap-2">
                {memberActivityData.map((day, index) => (
                  <div key={index} className="relative flex-1 flex flex-col items-center">
                    <div 
                      className="bg-fitness-primary/80 hover:bg-fitness-primary rounded-t w-full transition-all" 
                      style={{ height: `${(day.count / 60) * 100}%` }}
                    ></div>
                    <span className="text-xs mt-2 text-gray-500">{day.date.substring(0, 3)}</span>
                    <span className="absolute bottom-[calc(100%+5px)] text-xs font-medium">{day.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold">Member Retention</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-500">Overall Retention</span>
                <span className="text-sm font-medium flex items-center">
                  {retentionMetrics.change}
                  {retentionMetrics.trend === 'up' ? (
                    <TrendingUp className="ml-1 h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="ml-1 h-4 w-4 text-red-500" />
                  )}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold mr-2">{retentionMetrics.overall}%</span>
                <Progress value={retentionMetrics.overall} className="h-2 flex-1" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="h-5 w-5 text-green-600" />
                  <p className="text-sm text-gray-700">New Members</p>
                </div>
                <p className="text-xl font-bold mt-1">{retentionMetrics.newMembers}</p>
              </div>
              
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <ArrowDownRight className="h-5 w-5 text-red-600" />
                  <p className="text-sm text-gray-700">Churned</p>
                </div>
                <p className="text-xl font-bold mt-1">{retentionMetrics.churned}</p>
              </div>
            </div>
            
            <div className="pt-2">
              <Button variant="outline" className="w-full" onClick={openWaitlist}>
                View Detailed Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Top Performing Content & Recent Member Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold">Top Performing Workouts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topWorkouts.map((workout, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-lg bg-fitness-muted flex items-center justify-center text-fitness-primary font-bold`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{workout.name}</p>
                      <p className="text-xs text-gray-500">
                        {workout.engagement}% engagement
                      </p>
                    </div>
                  </div>
                  <div className={`text-sm font-medium ${workout.popularity.includes('+') ? 'text-green-600' : 'text-red-500'}`}>
                    {workout.popularity}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Button variant="outline" size="sm" className="w-full" onClick={openWaitlist}>
                View All Workouts
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold">License Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Manage Licenses</div>
                <Button size="sm" variant="outline" onClick={openWaitlist}>Add Licenses</Button>
              </div>
              
              <div className="space-y-2">
                <div 
                  className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={openWaitlist}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Users size={18} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">Assign Licenses</p>
                      <p className="text-xs text-gray-500">22 licenses available</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={(e) => {
                    e.stopPropagation();
                    openWaitlist();
                  }}>Assign</Button>
                </div>
                
                <div 
                  className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={openWaitlist}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Calendar size={18} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">License Expiration</p>
                      <p className="text-xs text-gray-500">Renews in 45 days</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={(e) => {
                    e.stopPropagation();
                    openWaitlist();
                  }}>Manage</Button>
                </div>
                
                <div 
                  className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={openWaitlist}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <BarChart size={18} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium">License Reports</p>
                      <p className="text-xs text-gray-500">Download usage analytics</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={(e) => {
                    e.stopPropagation();
                    openWaitlist();
                  }}>Reports</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Re-engagement Opportunities */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold">Re-engagement Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium">Inactive Members</h3>
                <div className="text-xl font-bold text-amber-500">13</div>
              </div>
              <p className="text-sm text-gray-500 mb-4">Members who haven't logged in within the last 14 days</p>
              <Button variant="outline" size="sm" className="w-full" onClick={openWaitlist}>Send Reminder</Button>
            </div>
            
            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium">Unassigned Licenses</h3>
                <div className="text-xl font-bold text-green-500">22</div>
              </div>
              <p className="text-sm text-gray-500 mb-4">Licenses that haven't been assigned to members yet</p>
              <Button variant="outline" size="sm" className="w-full" onClick={openWaitlist}>Invite Members</Button>
            </div>
            
            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium">Expiring Soon</h3>
                <div className="text-xl font-bold text-blue-500">45</div>
              </div>
              <p className="text-sm text-gray-500 mb-4">Days remaining before your plan renewal date</p>
              <Button variant="outline" size="sm" className="w-full" onClick={openWaitlist}>Manage Subscription</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GymManagerOverview;
