
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Calendar } from "@/components/ui/calendar";

const ProgressContent = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
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

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Progress Tracking</h1>
        <p className="text-gray-600">Monitor your fitness journey over time</p>
      </div>
      
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="body">Body Stats</TabsTrigger>
          <TabsTrigger value="strength">Strength</TabsTrigger>
          <TabsTrigger value="photos">Progress Photos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium">Current Weight</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">176</span>
                  <span className="text-sm text-gray-500 mb-1">lbs</span>
                </div>
                <div className="text-sm text-green-600 flex items-center mt-1">
                  <span>-11 lbs</span>
                  <span className="text-xs text-gray-500 ml-1">since Jan</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium">Body Fat %</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">15.2</span>
                  <span className="text-sm text-gray-500 mb-1">%</span>
                </div>
                <div className="text-sm text-green-600 flex items-center mt-1">
                  <span>-3.8%</span>
                  <span className="text-xs text-gray-500 ml-1">since Jan</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium">BMI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">24.1</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Normal Weight Range
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Weight Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weightData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                    <Tooltip />
                    <Area type="monotone" dataKey="weight" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Strength Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={strengthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="bench" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="squat" stroke="#82ca9d" />
                      <Line type="monotone" dataKey="deadlift" stroke="#ffc658" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Body Measurements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={measurementsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="chest" stroke="#8884d8" />
                      <Line type="monotone" dataKey="waist" stroke="#82ca9d" />
                      <Line type="monotone" dataKey="arms" stroke="#ffc658" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="body">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Log New Measurement</CardTitle>
              </CardHeader>
              <CardContent>
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
                  <button className="bg-fitness-primary text-white px-4 py-2 rounded-lg">
                    Save Measurements
                  </button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Measurement History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-right py-3 px-4">Weight</th>
                      <th className="text-right py-3 px-4">Body Fat</th>
                      <th className="text-right py-3 px-4">Chest</th>
                      <th className="text-right py-3 px-4">Waist</th>
                      <th className="text-right py-3 px-4">Arms</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: 'May 7, 2025', weight: 176, bodyFat: 15.2, chest: 44, waist: 34, arms: 16 },
                      { date: 'Apr 9, 2025', weight: 179, bodyFat: 16.1, chest: 43.5, waist: 34.5, arms: 15.7 },
                      { date: 'Mar 12, 2025', weight: 182, bodyFat: 16.8, chest: 43, waist: 35, arms: 15.5 },
                      { date: 'Feb 15, 2025', weight: 184, bodyFat: 17.5, chest: 42.5, waist: 35.5, arms: 15.2 },
                      { date: 'Jan 18, 2025', weight: 187, bodyFat: 19.0, chest: 42, waist: 36, arms: 15 },
                    ].map((record) => (
                      <tr key={record.date} className="border-b">
                        <td className="py-3 px-4">{record.date}</td>
                        <td className="text-right py-3 px-4">{record.weight} lbs</td>
                        <td className="text-right py-3 px-4">{record.bodyFat}%</td>
                        <td className="text-right py-3 px-4">{record.chest}"</td>
                        <td className="text-right py-3 px-4">{record.waist}"</td>
                        <td className="text-right py-3 px-4">{record.arms}"</td>
                        <td className="text-right py-3 px-4">
                          <button className="text-gray-500 hover:text-fitness-primary text-sm">Edit</button>
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
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Strength Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={strengthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="bench" name="Bench Press" stroke="#8884d8" />
                    <Line type="monotone" dataKey="squat" name="Squat" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="deadlift" name="Deadlift" stroke="#ffc658" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Bench Press</h3>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">195</span>
                  <span className="text-sm text-gray-500 mb-1">lbs</span>
                </div>
                <div className="text-sm text-green-600 flex items-center mt-1">
                  <span>+30 lbs</span>
                  <span className="text-xs text-gray-500 ml-1">since Jan</span>
                </div>
                <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-sm">Log New PR</button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Squat</h3>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">265</span>
                  <span className="text-sm text-gray-500 mb-1">lbs</span>
                </div>
                <div className="text-sm text-green-600 flex items-center mt-1">
                  <span>+40 lbs</span>
                  <span className="text-xs text-gray-500 ml-1">since Jan</span>
                </div>
                <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-sm">Log New PR</button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Deadlift</h3>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold">335</span>
                  <span className="text-sm text-gray-500 mb-1">lbs</span>
                </div>
                <div className="text-sm text-green-600 flex items-center mt-1">
                  <span>+60 lbs</span>
                  <span className="text-xs text-gray-500 ml-1">since Jan</span>
                </div>
                <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-sm">Log New PR</button>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Personal Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { exercise: 'Bench Press', weight: 195, date: 'May 2, 2025', increase: 10 },
                  { exercise: 'Squat', weight: 265, date: 'Apr 28, 2025', increase: 10 },
                  { exercise: 'Deadlift', weight: 335, date: 'Apr 23, 2025', increase: 20 },
                  { exercise: 'Overhead Press', weight: 135, date: 'Apr 15, 2025', increase: 5 },
                  { exercise: 'Barbell Row', weight: 175, date: 'Apr 9, 2025', increase: 10 },
                ].map((record) => (
                  <div key={record.exercise} className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{record.exercise}</h4>
                      <p className="text-sm text-gray-500">{record.date}</p>
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
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Progress Photos</h2>
              <button className="bg-fitness-primary text-white px-4 py-2 rounded-lg text-sm">
                Upload New Photo
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['January', 'March', 'May'].map((month) => (
                <Card key={month}>
                  <CardContent className="p-0">
                    <div className="h-60 bg-gray-200 flex items-center justify-center text-gray-400">
                      Photo Placeholder
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{month} 2025</h3>
                      <p className="text-sm text-gray-500">Weight: {month === 'January' ? '187' : month === 'March' ? '182' : '176'} lbs</p>
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
