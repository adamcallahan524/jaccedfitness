
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Plus, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWaitlist } from '../../context/WaitlistContext';

const NutritionContent = () => {
  const { openWaitlist } = useWaitlist();
  
  // Daily nutrition data
  const nutritionData = {
    calories: {
      goal: 2200,
      consumed: 1820,
      percentage: 83
    },
    protein: {
      goal: 150,
      consumed: 130,
      percentage: 86
    },
    carbs: {
      goal: 250,
      consumed: 210,
      percentage: 84
    },
    fat: {
      goal: 55,
      consumed: 45,
      percentage: 82
    }
  };
  
  // This week's meal plan
  const mealPlan = [
    {
      day: "Monday",
      meals: [
        { type: "Breakfast", name: "Protein Oatmeal", calories: 320, complete: true },
        { type: "Lunch", name: "Chicken Salad", calories: 450, complete: true },
        { type: "Dinner", name: "Salmon with Veggies", calories: 520, complete: false }
      ]
    },
    {
      day: "Tuesday",
      meals: [
        { type: "Breakfast", name: "Greek Yogurt & Berries", calories: 280, complete: false },
        { type: "Lunch", name: "Turkey Wrap", calories: 420, complete: false },
        { type: "Dinner", name: "Stir Fry Tofu", calories: 480, complete: false }
      ]
    }
  ];
  
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Nutrition Tracking</h1>
        <p className="text-gray-600">Monitor your meals and track your macros</p>
      </div>
      
      <Tabs defaultValue="today">
        <TabsList className="mb-4">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="meal-plan">Meal Plan</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="today" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Daily Summary Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold flex items-center justify-between">
                  <span>Daily Summary</span>
                  <span className="text-sm font-normal text-gray-500">May 8, 2025</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium">Calories</span>
                      <span className="text-sm">{nutritionData.calories.consumed} / {nutritionData.calories.goal}</span>
                    </div>
                    <Progress value={nutritionData.calories.percentage} className="h-2.5" />
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>{nutritionData.calories.goal - nutritionData.calories.consumed} calories remaining</span>
                      <span>{nutritionData.calories.percentage}%</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs font-medium">Protein</span>
                        <span className="text-xs">{nutritionData.protein.consumed}g</span>
                      </div>
                      <Progress value={nutritionData.protein.percentage} className="h-2" />
                      <div className="mt-1 text-[10px] text-gray-500">
                        <span>Goal: {nutritionData.protein.goal}g</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs font-medium">Carbs</span>
                        <span className="text-xs">{nutritionData.carbs.consumed}g</span>
                      </div>
                      <Progress value={nutritionData.carbs.percentage} className="h-2" />
                      <div className="mt-1 text-[10px] text-gray-500">
                        <span>Goal: {nutritionData.carbs.goal}g</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs font-medium">Fat</span>
                        <span className="text-xs">{nutritionData.fat.consumed}g</span>
                      </div>
                      <Progress value={nutritionData.fat.percentage} className="h-2" />
                      <div className="mt-1 text-[10px] text-gray-500">
                        <span>Goal: {nutritionData.fat.goal}g</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full" onClick={openWaitlist}>
                    <Plus className="h-4 w-4 mr-2" /> Log Food
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Today's Meals Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold">Today's Meals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                          <Utensils className="h-4 w-4 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Breakfast</p>
                          <p className="text-xs text-gray-500">7:30 AM</p>
                        </div>
                      </div>
                      <div className="text-sm">320 kcal</div>
                    </div>
                    <p className="text-sm">Protein Oatmeal with Berries</p>
                    <div className="flex justify-between text-xs mt-2 text-gray-500">
                      <span>Protein: 22g</span>
                      <span>Carbs: 42g</span>
                      <span>Fat: 8g</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <Utensils className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Lunch</p>
                          <p className="text-xs text-gray-500">12:15 PM</p>
                        </div>
                      </div>
                      <div className="text-sm">450 kcal</div>
                    </div>
                    <p className="text-sm">Grilled Chicken Salad</p>
                    <div className="flex justify-between text-xs mt-2 text-gray-500">
                      <span>Protein: 35g</span>
                      <span>Carbs: 25g</span>
                      <span>Fat: 15g</span>
                    </div>
                  </div>
                  
                  <div className="p-3 border border-dashed rounded-lg flex items-center justify-center">
                    <Button variant="ghost" className="w-full" onClick={openWaitlist}>
                      <Plus className="h-4 w-4 mr-2" /> Add Meal
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="meal-plan">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold flex items-center justify-between">
                <span>Weekly Meal Plan</span>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>May 8-14</span>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mealPlan.map((day, index) => (
                  <div key={index}>
                    <h3 className="font-medium mb-3">{day.day}</h3>
                    <div className="space-y-3">
                      {day.meals.map((meal, mealIndex) => (
                        <div 
                          key={mealIndex} 
                          className={`p-3 rounded-lg flex items-center justify-between cursor-pointer ${
                            meal.complete ? 'bg-gray-50' : 'border'
                          }`}
                          onClick={openWaitlist}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                              meal.type === 'Breakfast' ? 'bg-amber-100' :
                              meal.type === 'Lunch' ? 'bg-green-100' : 'bg-blue-100'
                            }`}>
                              <Utensils className={`h-5 w-5 ${
                                meal.type === 'Breakfast' ? 'text-amber-600' :
                                meal.type === 'Lunch' ? 'text-green-600' : 'text-blue-600'
                              }`} />
                            </div>
                            <div>
                              <p className="font-medium">{meal.name}</p>
                              <p className="text-xs text-gray-500">{meal.type} • {meal.calories} kcal</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" onClick={(e) => {
                            e.stopPropagation();
                            openWaitlist();
                          }}>
                            {meal.complete ? 'Logged' : 'Log'}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">Nutrition History</h3>
                <p className="text-gray-500 mb-4">View your past meals and nutrition data</p>
                <Button onClick={openWaitlist}>View History</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NutritionContent;
