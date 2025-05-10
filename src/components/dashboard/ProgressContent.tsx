
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, 
  PolarRadiusAxis, Radar
} from 'recharts';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Camera, TrendingUp, Award, Flag, Calendar as CalendarIcon } from 'lucide-react';
import { useWaitlist } from '../../context/WaitlistContext';

const ProgressContent = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { openWaitlist } = useWaitlist();
  
  const weightData = [
    { date: 'Jan', weight: 187 },
    { date: 'Feb', weight: 184 },
    { date: 'Mar', weight: 182 },
    { date: 'Apr', weight: 179 },
    { date: 'May', weight: 176 },
  ];
  
  const strengthData = [
    { date: 'Jan', bench: 165, squat: 225, deadlift: 275 },
    { date: 'Feb', bench: 175, squat: 235, deadlift: 285 },
    { date: 'Mar', bench: 180, squat: 245, deadlift: 295 },
    { date: 'Apr', bench: 185, squat: 255, deadlift: 315 },
    { date: 'May', bench: 195, squat: 265, deadlift: 335 },
  ];
  
  const measurementsData = [
    { date: 'Jan', chest: 42, waist: 36, arms: 15 },
    { date: 'Feb', chest: 42.5, waist: 35.5, arms: 15.2 },
    { date: 'Mar', chest: 43, waist: 35, arms: 15.5 },
    { date: 'Apr', chest: 43.5, waist: 34.5, arms: 15.7 },
    { date: 'May', chest: 44, waist: 34, arms: 16 },
  ];
  
  // New radar chart data for body composition
  const bodyCompositionData = [
    { subject: 'Muscle Mass', A: 65, B: 75, fullMark: 100 },
    { subject: 'Body Fat %', A: 25, B: 16, fullMark: 100 },
    { subject: 'Water %', A: 60, B: 65, fullMark: 100 },
    { subject: 'BMI', A: 28, B: 24, fullMark: 100 },
    { subject: 'Metabolic Rate', A: 1800, B: 2000, fullMark: 3000 },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Progress Tracking</h1>
        <p className="text-gray-600">Monitor your fitness journey over time</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-fitness-primary/5 to-fitness-primary/20 border-fitness-primary/20 hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-fitness-primary/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-fitness-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Current Weight</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">176</span>
                  <span className="text-sm text-gray-500 mb-1">lbs</span>
                </div>
              </div>
            </div>
            <div className="h-[70px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weightData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="weight" stroke="#8884d8" fill="url(#weightGradient)" />
                  <YAxis domain={['dataMin - 5', 'dataMax + 5']} hide={true} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm text-green-600 flex justify-end items-center mt-1">
              <span>-11 lbs</span>
              <span className="text-xs text-gray-500 ml-1">since Jan</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-amber-50 to-amber-100/50 border-amber-200/50 hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Award className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Body Fat %</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">15.2</span>
                  <span className="text-sm text-gray-500 mb-1">%</span>
                </div>
              </div>
            </div>
            <div className="h-[70px] flex items-center justify-center">
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-green-500 rounded-full transition-all duration-1000" 
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>
            <div className="text-sm text-green-600 flex justify-end items-center mt-3">
              <span>-3.8%</span>
              <span className="text-xs text-gray-500 ml-1">since Jan</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200/50 hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Flag className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Progress Status</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">83%</span>
                  <span className="text-sm text-gray-500 mb-1">to goal</span>
                </div>
              </div>
            </div>
            <div className="h-[70px] flex items-center justify-center">
              <div className="space-y-2 w-full">
                <div className="flex justify-between text-xs">
                  <span>Start: 190 lbs</span>
                  <span>Goal: 170 lbs</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-1000" 
                    style={{ width: '83%' }}
                  ></div>
                </div>
              </div>
            </div>
            <Button onClick={openWaitlist} variant="link" className="text-blue-600 p-0 h-auto mt-2 w-full text-sm">
              Update Goal
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="body">Body Stats</TabsTrigger>
          <TabsTrigger value="strength">Strength</TabsTrigger>
          <TabsTrigger value="photos">Progress Photos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card className="mb-6 overflow-hidden border-0 shadow-md">
            <CardHeader className="bg-gradient-to-r from-fitness-primary to-fitness-accent text-white">
              <CardTitle>Your Progress Journey</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weightData}>
                    <defs>
                      <linearGradient id="weightColorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" />
                    <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '8px', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        border: 'none'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="weight" 
                      name="Weight (lbs)"
                      stroke="#8884d8" 
                      fill="url(#weightColorGradient)" 
                      activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-0 shadow-md">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                <CardTitle>Strength Progress</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={strengthData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          borderRadius: '8px', 
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          border: 'none'
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="bench" 
                        name="Bench Press (lbs)"
                        stroke="#8884d8" 
                        strokeWidth={2}
                        activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="squat" 
                        name="Squat (lbs)"
                        stroke="#82ca9d" 
                        strokeWidth={2}
                        activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="deadlift" 
                        name="Deadlift (lbs)"
                        stroke="#ffc658" 
                        strokeWidth={2}
                        activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-0 shadow-md">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                <CardTitle>Body Composition</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={bodyCompositionData}>
                      <PolarGrid stroke="#e0e0e0" />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar 
                        name="January" 
                        dataKey="A" 
                        stroke="#8884d8" 
                        fill="#8884d8" 
                        fillOpacity={0.3} 
                      />
                      <Radar 
                        name="Today" 
                        dataKey="B" 
                        stroke="#82ca9d" 
                        fill="#82ca9d" 
                        fillOpacity={0.3} 
                      />
                      <Legend />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="body">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
            <Card className="lg:col-span-2 overflow-hidden border-0 shadow-md">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                <CardTitle>Log New Measurement</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Weight (lbs)', 'Body Fat %', 'Waist (in)', 'Chest (in)', 'Arms (in)', 'Legs (in)', 'Hips (in)', 'Shoulders (in)'].map((measurement) => (
                    <div key={measurement}>
                      <label className="text-sm font-medium mb-1 block">{measurement}</label>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fitness-primary focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-end">
                  <Button onClick={openWaitlist} className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-md">
                    Save Measurements
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-0 shadow-md">
              <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-900 text-white flex items-center justify-between">
                <CardTitle>Select Date</CardTitle>
                <CalendarIcon className="h-5 w-5 text-white/80" />
              </CardHeader>
              <CardContent className="p-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
                <Button 
                  onClick={openWaitlist} 
                  variant="outline" 
                  className="w-full mt-4 border-gray-300"
                >
                  View Historical Data
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6 overflow-hidden border-0 shadow-md">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
              <CardTitle>Body Measurements History</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left py-3 px-4 font-semibold">Date</th>
                      <th className="text-right py-3 px-4 font-semibold">Weight</th>
                      <th className="text-right py-3 px-4 font-semibold">Body Fat</th>
                      <th className="text-right py-3 px-4 font-semibold">Chest</th>
                      <th className="text-right py-3 px-4 font-semibold">Waist</th>
                      <th className="text-right py-3 px-4 font-semibold">Arms</th>
                      <th className="text-center py-3 px-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: 'May 7, 2025', weight: 176, bodyFat: 15.2, chest: 44, waist: 34, arms: 16 },
                      { date: 'Apr 9, 2025', weight: 179, bodyFat: 16.1, chest: 43.5, waist: 34.5, arms: 15.7 },
                      { date: 'Mar 12, 2025', weight: 182, bodyFat: 16.8, chest: 43, waist: 35, arms: 15.5 },
                      { date: 'Feb 15, 2025', weight: 184, bodyFat: 17.5, chest: 42.5, waist: 35.5, arms: 15.2 },
                      { date: 'Jan 18, 2025', weight: 187, bodyFat: 19.0, chest: 42, waist: 36, arms: 15 },
                    ].map((record, index) => (
                      <tr key={record.date} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}>
                        <td className="py-3 px-4">{record.date}</td>
                        <td className="text-right py-3 px-4">{record.weight} lbs</td>
                        <td className="text-right py-3 px-4">{record.bodyFat}%</td>
                        <td className="text-right py-3 px-4">{record.chest}"</td>
                        <td className="text-right py-3 px-4">{record.waist}"</td>
                        <td className="text-right py-3 px-4">{record.arms}"</td>
                        <td className="text-center py-3 px-4">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={openWaitlist}
                            className="text-fitness-primary hover:text-fitness-primary/80 font-medium"
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="strength">
          <Card className="mt-4 overflow-hidden border-0 shadow-md">
            <CardHeader className="bg-gradient-to-r from-red-500 to-rose-500 text-white">
              <CardTitle>Strength Progress</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={strengthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '8px', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        border: 'none'
                      }}
                    />
                    <Legend wrapperStyle={{ paddingTop: 20 }} />
                    <Bar 
                      dataKey="bench" 
                      name="Bench Press (lbs)" 
                      fill="#8884d8" 
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar 
                      dataKey="squat" 
                      name="Squat (lbs)" 
                      fill="#82ca9d" 
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar 
                      dataKey="deadlift" 
                      name="Deadlift (lbs)" 
                      fill="#ffc658" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                    <Dumbbell className="h-4 w-4 text-purple-600" />
                  </div>
                  Bench Press
                </h3>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">195</span>
                  <span className="text-sm text-gray-500 mb-1">lbs</span>
                </div>
                <div className="text-sm text-green-600 flex items-center mt-1">
                  <span>+30 lbs</span>
                  <span className="text-xs text-gray-500 ml-1">since Jan</span>
                </div>
                <Button onClick={openWaitlist} className="w-full mt-4 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white shadow-sm">
                  Log New PR
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <Dumbbell className="h-4 w-4 text-green-600" />
                  </div>
                  Squat
                </h3>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">265</span>
                  <span className="text-sm text-gray-500 mb-1">lbs</span>
                </div>
                <div className="text-sm text-green-600 flex items-center mt-1">
                  <span>+40 lbs</span>
                  <span className="text-xs text-gray-500 ml-1">since Jan</span>
                </div>
                <Button onClick={openWaitlist} className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white shadow-sm">
                  Log New PR
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <Dumbbell className="h-4 w-4 text-blue-600" />
                  </div>
                  Deadlift
                </h3>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">335</span>
                  <span className="text-sm text-gray-500 mb-1">lbs</span>
                </div>
                <div className="text-sm text-green-600 flex items-center mt-1">
                  <span>+60 lbs</span>
                  <span className="text-xs text-gray-500 ml-1">since Jan</span>
                </div>
                <Button onClick={openWaitlist} className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-sm">
                  Log New PR
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6 overflow-hidden border-0 shadow-md">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
              <CardTitle>Recent Personal Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 p-2">
                {[
                  { exercise: 'Bench Press', weight: 195, date: 'May 2, 2025', increase: 10 },
                  { exercise: 'Squat', weight: 265, date: 'Apr 28, 2025', increase: 10 },
                  { exercise: 'Deadlift', weight: 335, date: 'Apr 23, 2025', increase: 20 },
                  { exercise: 'Overhead Press', weight: 135, date: 'Apr 15, 2025', increase: 5 },
                  { exercise: 'Barbell Row', weight: 175, date: 'Apr 9, 2025', increase: 10 },
                ].map((record, index) => (
                  <div 
                    key={record.exercise} 
                    className={`flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transform transition-all duration-200 hover:-translate-y-1 ${index === 0 ? 'bg-green-50 border-green-200' : ''}`}
                    onClick={openWaitlist}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-lg ${index === 0 ? 'bg-green-100 text-green-600' : 'bg-fitness-muted text-fitness-primary'} flex items-center justify-center font-bold`}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold">{record.exercise}</h4>
                        <p className="text-sm text-gray-500">{record.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{record.weight} lbs</p>
                      <p className="text-xs text-green-600">+{record.increase} lbs</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="photos">
          <div className="mt-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Progress Photos</h2>
              <Button onClick={openWaitlist} className="bg-gradient-to-r from-fitness-primary to-fitness-accent hover:from-fitness-primary/90 hover:to-fitness-accent/90 text-white shadow-md flex items-center gap-2">
                <Camera size={16} />
                <span>Upload New Photo</span>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['January', 'March', 'May'].map((month, i) => (
                <Card key={month} className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02] cursor-pointer" onClick={openWaitlist}>
                  <CardContent className="p-0">
                    <div className="h-72 bg-gray-200 flex items-center justify-center text-gray-400 overflow-hidden relative">
                      {i === 0 && (
                        <img 
                          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                          alt="January Progress" 
                          className="w-full h-full object-cover"
                        />
                      )}
                      {i === 1 && (
                        <img 
                          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                          alt="March Progress" 
                          className="w-full h-full object-cover"
                        />
                      )}
                      {i === 2 && (
                        <img 
                          src="https://images.unsplash.com/photo-1584863231364-2edc166de576?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                          alt="May Progress" 
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-4 bg-white">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold">{month} 2025</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${i === 0 ? 'bg-gray-100' : i === 1 ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                          {i === 0 ? 'Starting Point' : i === 1 ? 'Progress' : 'Latest'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Weight: {month === 'January' ? '187' : month === 'March' ? '182' : '176'} lbs</p>
                      <div className="flex justify-between items-center mt-2">
                        <div className="text-xs text-gray-500">Body Fat: {month === 'January' ? '19.0%' : month === 'March' ? '16.8%' : '15.2%'}</div>
                        <button className="text-xs text-fitness-primary hover:underline" onClick={(e) => {e.stopPropagation(); openWaitlist();}}>View Details</button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProgressContent;
