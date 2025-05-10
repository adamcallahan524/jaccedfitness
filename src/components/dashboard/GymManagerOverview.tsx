
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  TrendingUp, 
  Users, 
  Calendar,
  BarChart,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Building,
  Star,
  CheckCircle,
  UserPlus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWaitlist } from '../../context/WaitlistContext';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const GymManagerOverview = () => {
  const { openWaitlist } = useWaitlist();
  const [activeTab, setActiveTab] = useState("overview");
  
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
  
  // Chart data for member activity
  const memberActivityChartData = [
    { name: 'Mon', value: 42 },
    { name: 'Tue', value: 38 },
    { name: 'Wed', value: 45 },
    { name: 'Thu', value: 39 },
    { name: 'Fri', value: 48 },
    { name: 'Sat', value: 52 },
    { name: 'Sun', value: 30 },
  ];
  
  // Area chart data for revenue trend
  const revenueData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 4500 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4800 },
    { name: 'May', value: 5500 },
    { name: 'Jun', value: 6000 },
    { name: 'Jul', value: 6300 },
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Gym Manager Dashboard</h1>
            <p className="text-gray-600">FitLife Gym • Business Analytics & Member Management</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={openWaitlist} className="flex items-center gap-2">
              <UserPlus size={16} />
              <span>Add Members</span>
            </Button>
            <Button onClick={openWaitlist} className="bg-gradient-to-r from-fitness-primary to-fitness-accent text-white shadow-sm">
              Generate Report
            </Button>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-blue-100/50 hover:shadow-md transition-shadow overflow-hidden">
            <div className="absolute top-0 right-0 h-20 w-20 bg-blue-500/10 rounded-bl-full"></div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Users size={20} />
                </div>
                <div className="text-sm font-medium text-blue-600">
                  Total Licenses
                </div>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold">{licenseData.total}</div>
                <div className="text-sm text-gray-600 mt-1">Premium AI trainers</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-100/50 hover:shadow-md transition-shadow overflow-hidden">
            <div className="absolute top-0 right-0 h-20 w-20 bg-green-500/10 rounded-bl-full"></div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle size={20} />
                </div>
                <div className="text-sm font-medium text-green-600">
                  Active Users
                </div>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold">{licenseData.active}</div>
                <div className="text-sm text-gray-600 mt-1">
                  <span className="text-green-600 font-medium">+8%</span> this month
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-100/50 hover:shadow-md transition-shadow overflow-hidden">
            <div className="absolute top-0 right-0 h-20 w-20 bg-amber-500/10 rounded-bl-full"></div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <Building size={20} />
                </div>
                <div className="text-sm font-medium text-amber-600">
                  Utilization
                </div>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold">78%</div>
                <div className="text-sm text-gray-600 mt-1">
                  License utilization
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-100/50 hover:shadow-md transition-shadow overflow-hidden">
            <div className="absolute top-0 right-0 h-20 w-20 bg-red-500/10 rounded-bl-full"></div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <DollarSign size={20} />
                </div>
                <div className="text-sm font-medium text-red-600">
                  Cost Savings
                </div>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold">$28,500</div>
                <div className="text-sm text-gray-600 mt-1">
                  vs. traditional trainers
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Primary Content Tabs */}
      <Tabs 
        defaultValue="overview" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="mb-8"
      >
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="overview">Business Overview</TabsTrigger>
          <TabsTrigger value="members">Member Management</TabsTrigger>
          <TabsTrigger value="licenses">License Management</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          {/* Revenue and Member Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 overflow-hidden border-0 shadow-md">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-between">
                <CardTitle>Revenue Growth</CardTitle>
                <Button variant="ghost" onClick={openWaitlist} className="text-white hover:bg-white/20 text-xs">
                  View Details
                </Button>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`$${value}`, 'Revenue']}
                        contentStyle={{
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          border: 'none'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#8884d8" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorRevenue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-500">Monthly Revenue</p>
                    <p className="text-xl font-bold">$6,300</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +12% from last month
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Annual Projection</p>
                    <p className="text-xl font-bold">$78,500</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +23% YoY
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Cost Efficiency</p>
                    <p className="text-xl font-bold">68%</p>
                    <p className="text-xs text-gray-500">vs. traditional trainers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-0 shadow-md">
              <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                <CardTitle>Member Retention</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
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
                  <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold mr-3">{retentionMetrics.overall}%</span>
                    <div className="flex-1">
                      <Progress value={retentionMetrics.overall} className="h-3" />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <ArrowUpRight className="h-5 w-5 text-green-600" />
                      <p className="text-sm text-gray-700">New Members</p>
                    </div>
                    <p className="text-2xl font-bold mt-2">{retentionMetrics.newMembers}</p>
                    <p className="text-xs text-gray-500 mt-1">This month</p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <ArrowDownRight className="h-5 w-5 text-red-600" />
                      <p className="text-sm text-gray-700">Churned</p>
                    </div>
                    <p className="text-2xl font-bold mt-2">{retentionMetrics.churned}</p>
                    <p className="text-xs text-gray-500 mt-1">This month</p>
                  </div>
                </div>
                
                <div className="pt-3 border-t">
                  <p className="text-sm text-gray-600 mb-3">Member satisfaction rating</p>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`h-5 w-5 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium">4.8/5</span>
                  </div>
                </div>
                
                <Button onClick={openWaitlist} variant="outline" className="w-full">
                  Retention Report
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Member Activity & Top Workouts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-0 shadow-md">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                <CardTitle>Weekly Member Activity</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={memberActivityChartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`${value} check-ins`, 'Activity']}
                        contentStyle={{
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          border: 'none'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#F59E0B"
                        strokeWidth={3}
                        dot={{ r: 6, strokeWidth: 2, stroke: '#FFF', fill: '#F59E0B' }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-500">Total Check-ins</p>
                    <p className="text-xl font-bold">294</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Peak Day</p>
                    <p className="text-xl font-bold">Saturday</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={openWaitlist}>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-0 shadow-md">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                <CardTitle>Top Performing Workouts</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {topWorkouts.map((workout, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={openWaitlist}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-lg flex items-center justify-center text-white font-bold ${
                          index === 0 ? 'bg-gradient-to-br from-yellow-400 to-amber-600' :
                          index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500' :
                          index === 2 ? 'bg-gradient-to-br from-amber-700 to-amber-900' :
                          'bg-gradient-to-br from-fitness-muted to-gray-400'
                        }`}>
                          #{index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{workout.name}</p>
                          <div className="w-full bg-gray-200 h-1.5 rounded-full mt-1">
                            <div 
                              className="bg-indigo-500 h-1.5 rounded-full" 
                              style={{ width: `${workout.engagement}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className={`text-sm font-medium ${workout.popularity.includes('+') ? 'text-green-600' : 'text-red-500'}`}>
                        {workout.popularity}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t flex justify-between items-center">
                  <div className="text-sm text-gray-500">Based on member engagement</div>
                  <Button variant="outline" size="sm" onClick={openWaitlist}>
                    All Workouts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="members" className="space-y-6">
          <Card className="overflow-hidden border-0 shadow-md">
            <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex items-center justify-between">
              <CardTitle>Member Management</CardTitle>
              <Button variant="ghost" onClick={openWaitlist} className="text-white hover:bg-white/20 flex items-center gap-1">
                <UserPlus size={14} />
                <span>Add Member</span>
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left py-3 px-4 font-semibold">Member</th>
                      <th className="text-left py-3 px-4 font-semibold">Status</th>
                      <th className="text-left py-3 px-4 font-semibold">Last Active</th>
                      <th className="text-left py-3 px-4 font-semibold">Workouts</th>
                      <th className="text-center py-3 px-4 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Sarah Johnson', status: 'Active', lastActive: '2 hours ago', workouts: 24, email: 'sarah@example.com' },
                      { name: 'Michael Chen', status: 'Active', lastActive: 'Today', workouts: 18, email: 'michael@example.com' },
                      { name: 'Jessica Smith', status: 'Inactive', lastActive: '2 weeks ago', workouts: 6, email: 'jessica@example.com' },
                      { name: 'David Wilson', status: 'Active', lastActive: 'Yesterday', workouts: 31, email: 'david@example.com' },
                      { name: 'Emma Brown', status: 'Inactive', lastActive: '1 month ago', workouts: 3, email: 'emma@example.com' },
                    ].map((member, index) => (
                      <tr 
                        key={member.email} 
                        className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors cursor-pointer`}
                        onClick={openWaitlist}
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="font-medium text-gray-600">{member.name.charAt(0)}</span>
                            </div>
                            <div>
                              <p className="font-medium">{member.name}</p>
                              <p className="text-xs text-gray-500">{member.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`text-xs px-2 py-1 rounded-full ${member.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                            {member.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm">{member.lastActive}</td>
                        <td className="py-3 px-4 text-sm">{member.workouts} completed</td>
                        <td className="py-3 px-4 text-center">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={(e) => {e.stopPropagation(); openWaitlist();}}
                            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                          >
                            Manage
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t flex items-center justify-between">
                <div className="text-sm text-gray-500">Showing 5 of 78 members</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={openWaitlist}>Previous</Button>
                  <Button variant="outline" size="sm" onClick={openWaitlist}>Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-0 shadow-md">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardTitle>Re-engagement Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer" onClick={openWaitlist}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2 text-amber-500" />
                      Inactive Members
                    </h3>
                    <div className="text-xl font-bold text-amber-500">13</div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Members who haven't logged in within the last 14 days</p>
                  <Button variant="outline" size="sm" className="w-full" onClick={openWaitlist}>Send Reminder</Button>
                </div>
                
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer" onClick={openWaitlist}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                      Goal Setters
                    </h3>
                    <div className="text-xl font-bold text-blue-500">24</div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Members who set goals but aren't tracking progress</p>
                  <Button variant="outline" size="sm" className="w-full" onClick={openWaitlist}>Send Check-in</Button>
                </div>
                
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer" onClick={openWaitlist}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium flex items-center">
                      <Star className="h-4 w-4 mr-2 text-purple-500" />
                      Success Stories
                    </h3>
                    <div className="text-xl font-bold text-purple-500">7</div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Members with exceptional progress who could inspire others</p>
                  <Button variant="outline" size="sm" className="w-full" onClick={openWaitlist}>Feature Stories</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-0 shadow-md">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
                <CardTitle>Member Analytics</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-medium text-gray-500">Age Distribution</h3>
                      <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">78 Members</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1 mb-1">
                      <div className="bg-indigo-500/80 h-16 rounded-l-md" style={{ height: '40px' }}></div>
                      <div className="bg-indigo-500/80 h-24" style={{ height: '80px' }}></div>
                      <div className="bg-indigo-500/80 h-32" style={{ height: '60px' }}></div>
                      <div className="bg-indigo-500/80 h-20" style={{ height: '30px' }}></div>
                      <div className="bg-indigo-500/80 h-12 rounded-r-md" style={{ height: '20px' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>18-24</span>
                      <span>25-34</span>
                      <span>35-44</span>
                      <span>45-54</span>
                      <span>55+</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-medium text-gray-500">Activity Level</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Highly Active (3+ workouts/week)</span>
                          <span className="font-medium">42%</span>
                        </div>
                        <Progress value={42} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Active (1-2 workouts/week)</span>
                          <span className="font-medium">35%</span>
                        </div>
                        <Progress value={35} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Occasional (1-3 workouts/month)</span>
                          <span className="font-medium">15%</span>
                        </div>
                        <Progress value={15} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Inactive (No workouts)</span>
                          <span className="font-medium">8%</span>
                        </div>
                        <Progress value={8} className="h-2" />
                      </div>
                    </div>
                  </div>
                  
                  <Button onClick={openWaitlist} variant="outline" className="w-full">
                    View Full Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="licenses" className="space-y-6">
          <Card className="overflow-hidden border-0 shadow-md">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between">
              <CardTitle>License Management</CardTitle>
              <Button variant="ghost" onClick={openWaitlist} className="text-white hover:bg-white/20">
                Add Licenses
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-medium text-sm text-gray-500">Total Licenses</h3>
                  <div className="text-2xl font-bold mt-1">{licenseData.total}</div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">Enterprise Plan</span>
                    <Button variant="ghost" size="sm" onClick={openWaitlist} className="h-7 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0">
                      Upgrade
                    </Button>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h3 className="font-medium text-sm text-gray-500">Available Licenses</h3>
                  <div className="text-2xl font-bold mt-1">{licenseData.total - licenseData.used}</div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">Ready to assign</span>
                    <Button variant="ghost" size="sm" onClick={openWaitlist} className="h-7 text-xs text-green-600 hover:text-green-700 hover:bg-green-50 p-0">
                      Assign
                    </Button>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h3 className="font-medium text-sm text-gray-500">License Expiration</h3>
                  <div className="text-2xl font-bold mt-1">45 days</div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">Auto-renew: On</span>
                    <Button variant="ghost" size="sm" onClick={openWaitlist} className="h-7 text-xs text-amber-600 hover:text-amber-700 hover:bg-amber-50 p-0">
                      Settings
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3">License Usage</h3>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="flex h-full">
                    <div 
                      className="bg-green-500 h-full" 
                      style={{ width: `${(licenseData.active / licenseData.total) * 100}%` }}
                    ></div>
                    <div 
                      className="bg-amber-500 h-full" 
                      style={{ width: `${(licenseData.inactive / licenseData.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <div className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    <span>Active ({licenseData.active})</span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                    <span>Inactive ({licenseData.inactive})</span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-gray-300 mr-2"></span>
                    <span>Unassigned ({licenseData.total - licenseData.used})</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div 
                  className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={openWaitlist}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Batch Assign Licenses</p>
                      <p className="text-xs text-gray-500">Quickly assign licenses to multiple members</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={(e) => {
                    e.stopPropagation();
                    openWaitlist();
                  }}>Assign</Button>
                </div>
                
                <div 
                  className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={openWaitlist}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <BarChart size={18} className="text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium">License Reports</p>
                      <p className="text-xs text-gray-500">Download usage analytics and reports</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={(e) => {
                    e.stopPropagation();
                    openWaitlist();
                  }}>Reports</Button>
                </div>
                
                <div 
                  className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={openWaitlist}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <DollarSign size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Billing & Subscription</p>
                      <p className="text-xs text-gray-500">Manage your payment methods and invoices</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={(e) => {
                    e.stopPropagation();
                    openWaitlist();
                  }}>Manage</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GymManagerOverview;
