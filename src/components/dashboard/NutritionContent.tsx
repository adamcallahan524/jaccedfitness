
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const NutritionContent = () => {
  const macroData = [
    { name: 'Protein', value: 130, total: 150, color: '#4ade80' },
    { name: 'Carbs', value: 210, total: 250, color: '#60a5fa' },
    { name: 'Fat', value: 45, total: 55, color: '#f97316' },
  ];

  const weeklyData = [
    { day: 'Mon', calories: 2100, target: 2200 },
    { day: 'Tue', calories: 1950, target: 2200 },
    { day: 'Wed', calories: 2250, target: 2200 },
    { day: 'Thu', calories: 2180, target: 2200 },
    { day: 'Fri', calories: 2300, target: 2200 },
    { day: 'Sat', calories: 2500, target: 2200 },
    { day: 'Sun', calories: 1900, target: 2200 },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Nutrition Tracker</h1>
        <p className="text-gray-600">Monitor your daily intake and macronutrients</p>
      </div>
      
      <Tabs defaultValue="daily" className="mb-8">
        <TabsList>
          <TabsTrigger value="daily">Daily Overview</TabsTrigger>
          <TabsTrigger value="meals">Meal Planner</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>
        
        <TabsContent value="daily">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Today's Nutrition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-8">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Consumed</p>
                    <p className="text-2xl font-bold">1,820</p>
                    <p className="text-sm text-gray-500">calories</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Remaining</p>
                    <p className="text-2xl font-bold">380</p>
                    <p className="text-sm text-gray-500">calories</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Goal</p>
                    <p className="text-2xl font-bold">2,200</p>
                    <p className="text-sm text-gray-500">calories</p>
                  </div>
                </div>
                
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={macroData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {macroData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {macroData.map((macro) => (
                    <div key={macro.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{macro.name}</span>
                        <span className="text-sm text-gray-500">{macro.value}g / {macro.total}g</span>
                      </div>
                      <Progress 
                        value={(macro.value / macro.total) * 100} 
                        className="h-2" 
                        indicatorClassName={`bg-[${macro.color}]`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Water Intake</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-4">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
                    <div 
                      className="absolute inset-0 rounded-full border-4 border-blue-400" 
                      style={{ 
                        clipPath: 'inset(50% 0 0 0)', 
                        transform: 'rotate(-90deg)' 
                      }} 
                    />
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-2xl font-bold">5/8</span>
                      <span className="text-xs text-gray-500">glasses</span>
                    </div>
                  </div>
                  
                  <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Log Water
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-4">Today's Meals</h2>
            <div className="space-y-4">
              {[
                { meal: 'Breakfast', time: '7:30 AM', calories: 420, items: ['Oatmeal with berries', 'Greek yogurt', 'Coffee'] },
                { meal: 'Lunch', time: '12:45 PM', calories: 680, items: ['Grilled chicken salad', 'Whole grain bread', 'Apple'] },
                { meal: 'Snack', time: '3:30 PM', calories: 180, items: ['Protein bar', 'Almonds'] },
                { meal: 'Dinner', time: '7:00 PM', calories: 540, items: ['Salmon', 'Brown rice', 'Steamed vegetables'] },
              ].map((meal) => (
                <Card key={meal.meal}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{meal.meal}</h3>
                        <p className="text-sm text-gray-500">{meal.time}</p>
                        <div className="mt-2">
                          {meal.items.map((item) => (
                            <div key={item} className="text-sm">{item}</div>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold">{meal.calories}</span>
                        <span className="text-sm text-gray-500"> cal</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <button className="w-full py-3 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50">
                + Add Meal
              </button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="meals">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h2 className="text-lg font-bold mb-4">Suggested Meal Plans</h2>
              <div className="space-y-4">
                {[
                  { name: 'High Protein Plan', calories: 2200, description: 'Perfect for muscle building and recovery' },
                  { name: 'Low Carb Plan', calories: 1800, description: 'Ideal for cutting and fat loss phases' },
                  { name: 'Balanced Nutrition', calories: 2000, description: 'Well-rounded plan for general fitness' },
                  { name: 'Vegetarian Power', calories: 1900, description: 'Plant-based nutrition for active lifestyles' },
                ].map((plan) => (
                  <Card key={plan.name}>
                    <CardContent className="p-4">
                      <h3 className="font-bold">{plan.name}</h3>
                      <p className="text-sm text-gray-500">{plan.description}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm">{plan.calories} calories</span>
                        <button className="text-xs bg-fitness-primary text-white px-3 py-1 rounded-full">
                          View Plan
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-bold mb-4">Recommended Recipes</h2>
              <div className="space-y-4">
                {[
                  { name: 'Protein Packed Breakfast Bowl', time: '15 min', calories: 450, difficulty: 'Easy' },
                  { name: 'Grilled Chicken & Quinoa Salad', time: '25 min', calories: 520, difficulty: 'Medium' },
                  { name: 'High Protein Smoothie', time: '5 min', calories: 320, difficulty: 'Easy' },
                  { name: 'Baked Salmon with Vegetables', time: '35 min', calories: 480, difficulty: 'Medium' },
                ].map((recipe) => (
                  <Card key={recipe.name}>
                    <CardContent className="p-0">
                      <div className="h-40 bg-gray-200">
                        {/* Image would go here */}
                        <div className="h-full flex items-center justify-center text-gray-400">Recipe Image</div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold">{recipe.name}</h3>
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                          <span>{recipe.calories} cal</span>
                          <span>{recipe.time}</span>
                          <span>{recipe.difficulty}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="trends">
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Weekly Calorie Intake</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="calories" fill="#8884d8" />
                    <Bar dataKey="target" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-gray-500">Avg. Daily Calories</h3>
                <div className="mt-2 flex items-baseline">
                  <p className="text-2xl font-semibold">2,154</p>
                  <p className="ml-2 text-sm text-green-600">+2.5%</p>
                </div>
                <p className="mt-1 text-xs text-gray-500">Compared to last week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-gray-500">Protein Consistency</h3>
                <div className="mt-2 flex items-baseline">
                  <p className="text-2xl font-semibold">92%</p>
                  <p className="ml-2 text-sm text-green-600">+5%</p>
                </div>
                <p className="mt-1 text-xs text-gray-500">Days hitting protein goal</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h3 className="text-sm font-medium text-gray-500">Water Intake</h3>
                <div className="mt-2 flex items-baseline">
                  <p className="text-2xl font-semibold">2.3L</p>
                  <p className="ml-2 text-sm text-red-600">-0.2L</p>
                </div>
                <p className="mt-1 text-xs text-gray-500">Daily average</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NutritionContent;
