import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, TrendingUp, Dumbbell, Calendar, Heart } from 'lucide-react';
import { useWaitlist } from '../../context/WaitlistContext';

const DashboardOverview = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Good afternoon, Alex!</h1>
        <p className="text-gray-600">Here's your fitness overview for today</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-fitness-primary/10 flex items-center justify-center">
              <Dumbbell className="h-6 w-6 text-fitness-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Workouts Completed</p>
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" /> 
                +3 from last week
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-fitness-accent/10 flex items-center justify-center">
              <Activity className="h-6 w-6 text-fitness-accent" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Calories Burned</p>
              <p className="text-2xl font-bold">8,254</p>
              <p className="text-xs text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" /> 
                +12% improvement
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-fitness-highlight/10 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-fitness-highlight" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Streak</p>
              <p className="text-2xl font-bold">14 days</p>
              <p className="text-xs text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" /> 
                +5 days from last month
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <Heart className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Current Goal</p>
              <p className="text-2xl font-bold">75%</p>
              <div className="w-full mt-1">
                <Progress value={75} className="h-1" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold mb-4">Today's Workout Plan</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 border rounded-lg">
                <div className="h-12 w-12 bg-fitness-muted rounded-lg flex items-center justify-center text-fitness-primary font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Barbell Squats</h4>
                  <p className="text-sm text-gray-500">4 sets × 12 reps</p>
                </div>
                <button 
                  className="px-4 py-2 rounded-lg bg-fitness-primary text-white text-sm"
                  onClick={openWaitlist}
                >
                  Start
                </button>
              </div>
              <div className="flex items-center gap-4 p-3 border rounded-lg">
                <div className="h-12 w-12 bg-fitness-muted rounded-lg flex items-center justify-center text-fitness-primary font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Bench Press</h4>
                  <p className="text-sm text-gray-500">3 sets × 10 reps</p>
                </div>
                <button 
                  className="px-4 py-2 rounded-lg bg-fitness-primary text-white text-sm"
                  onClick={openWaitlist}
                >
                  Start
                </button>
              </div>
              <div className="flex items-center gap-4 p-3 border rounded-lg">
                <div className="h-12 w-12 bg-fitness-muted rounded-lg flex items-center justify-center text-fitness-primary font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Deadlifts</h4>
                  <p className="text-sm text-gray-500">4 sets × 8 reps</p>
                </div>
                <button 
                  className="px-4 py-2 rounded-lg bg-fitness-primary text-white text-sm"
                  onClick={openWaitlist}
                >
                  Start
                </button>
              </div>
              <div className="flex items-center gap-4 p-3 border rounded-lg">
                <div className="h-12 w-12 bg-fitness-muted rounded-lg flex items-center justify-center text-fitness-primary font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Pull-ups</h4>
                  <p className="text-sm text-gray-500">3 sets × to failure</p>
                </div>
                <button 
                  className="px-4 py-2 rounded-lg bg-fitness-primary text-white text-sm"
                  onClick={openWaitlist}
                >
                  Start
                </button>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button 
                className="text-fitness-primary hover:text-fitness-secondary underline text-sm"
                onClick={openWaitlist}
              >
                View full workout plan →
              </button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-bold mb-4">Nutrition Summary</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Protein</span>
                  <span className="text-sm font-medium">130g / 150g</span>
                </div>
                <Progress value={86} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Carbs</span>
                  <span className="text-sm font-medium">210g / 250g</span>
                </div>
                <Progress value={84} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Fat</span>
                  <span className="text-sm font-medium">45g / 55g</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Calories</span>
                  <span className="text-sm font-medium">1820 / 2200</span>
                </div>
                <Progress value={83} className="h-2" />
              </div>
            </div>
            
            <div className="mt-6">
              <button 
                className="w-full py-2 rounded-lg border border-fitness-primary text-fitness-primary hover:bg-fitness-primary/5 text-sm"
                onClick={openWaitlist}
              >
                Log meal
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <h2 className="text-lg font-bold mb-4">Nearby Gyms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-0">
              <div className="h-40 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Fitness Center" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">PowerFit Gym</h3>
                <p className="text-sm text-gray-500 mb-2">0.8 miles away</p>
                <button 
                  className="w-full py-2 rounded-lg bg-fitness-primary text-white text-sm"
                  onClick={openWaitlist}
                >
                  View Details
                </button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0">
              <div className="h-40 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Fitness Center" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Iron Strength</h3>
                <p className="text-sm text-gray-500 mb-2">1.2 miles away</p>
                <button 
                  className="w-full py-2 rounded-lg bg-fitness-primary text-white text-sm"
                  onClick={openWaitlist}
                >
                  View Details
                </button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0">
              <div className="h-40 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Fitness Center" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">FitZone Studio</h3>
                <p className="text-sm text-gray-500 mb-2">1.5 miles away</p>
                <button 
                  className="w-full py-2 rounded-lg bg-fitness-primary text-white text-sm"
                  onClick={openWaitlist}
                >
                  View Details
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
