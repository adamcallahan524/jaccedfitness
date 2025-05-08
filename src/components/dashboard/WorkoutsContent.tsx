
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Dumbbell } from 'lucide-react';

const WorkoutsContent = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Your Workout Plan</h1>
        <p className="text-gray-600">Customized routines to match your goals</p>
      </div>
      
      <Tabs defaultValue="weekly" className="mb-8">
        <TabsList>
          <TabsTrigger value="weekly">Weekly Plan</TabsTrigger>
          <TabsTrigger value="exercises">My Exercises</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="weekly">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mt-4">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
              <Card key={day} className={index === 0 ? "border-fitness-primary border-2" : ""}>
                <CardHeader className="p-3">
                  <CardTitle className="text-sm font-medium">{day}</CardTitle>
                </CardHeader>
                <CardContent className="p-3">
                  {index === 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 bg-fitness-primary/10 rounded-md">
                        <Dumbbell className="h-4 w-4 text-fitness-primary" />
                        <span className="text-sm font-medium">Upper Body</span>
                      </div>
                      <p className="text-xs text-gray-500">4 exercises • 45 min</p>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 bg-fitness-primary/10 rounded-md">
                        <Dumbbell className="h-4 w-4 text-fitness-primary" />
                        <span className="text-sm font-medium">Lower Body</span>
                      </div>
                      <p className="text-xs text-gray-500">5 exercises • 50 min</p>
                    </div>
                  )}
                  {index === 4 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 bg-fitness-primary/10 rounded-md">
                        <Dumbbell className="h-4 w-4 text-fitness-primary" />
                        <span className="text-sm font-medium">Full Body</span>
                      </div>
                      <p className="text-xs text-gray-500">8 exercises • 60 min</p>
                    </div>
                  )}
                  {(index === 1 || index === 3 || index === 5 || index === 6) && (
                    <div className="h-full flex items-center justify-center py-4">
                      <span className="text-sm text-gray-400">Rest Day</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-4">Today's Workout</h2>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold">Upper Body Strength</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>45 min</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Dumbbell className="h-4 w-4" />
                        <span>High Intensity</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-fitness-primary text-white px-4 py-2 rounded-lg">
                    Start Workout
                  </button>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'Bench Press', sets: '4 sets × 8-10 reps', muscle: 'Chest' },
                    { name: 'Pull-Ups', sets: '3 sets × 8-10 reps', muscle: 'Back' },
                    { name: 'Shoulder Press', sets: '3 sets × 10-12 reps', muscle: 'Shoulders' },
                    { name: 'Bicep Curls', sets: '3 sets × 12 reps', muscle: 'Arms' },
                    { name: 'Tricep Pushdowns', sets: '3 sets × 12 reps', muscle: 'Arms' },
                  ].map((exercise, index) => (
                    <div key={exercise.name} className="flex items-center p-3 border rounded-lg">
                      <div className="h-10 w-10 bg-fitness-muted rounded-lg flex items-center justify-center text-fitness-primary font-bold mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{exercise.name}</h4>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">{exercise.sets}</p>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{exercise.muscle}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="exercises">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {[
              { name: 'Bench Press', muscle: 'Chest', difficulty: 'Intermediate' },
              { name: 'Squats', muscle: 'Legs', difficulty: 'Intermediate' },
              { name: 'Deadlifts', muscle: 'Back', difficulty: 'Advanced' },
              { name: 'Pull-Ups', muscle: 'Back', difficulty: 'Intermediate' },
              { name: 'Shoulder Press', muscle: 'Shoulders', difficulty: 'Intermediate' },
              { name: 'Lunges', muscle: 'Legs', difficulty: 'Beginner' },
              { name: 'Bicep Curls', muscle: 'Arms', difficulty: 'Beginner' },
              { name: 'Plank', muscle: 'Core', difficulty: 'Beginner' },
              { name: 'Tricep Pushdowns', muscle: 'Arms', difficulty: 'Beginner' },
            ].map((exercise) => (
              <Card key={exercise.name}>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-1">{exercise.name}</h3>
                  <div className="flex justify-between">
                    <span className="text-xs bg-fitness-primary/10 text-fitness-primary px-2 py-1 rounded-full">
                      {exercise.muscle}
                    </span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {exercise.difficulty}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <div className="space-y-4 mt-4">
            {[
              { date: 'May 7, 2025', workout: 'Upper Body', duration: '48 min', calories: 320 },
              { date: 'May 5, 2025', workout: 'Lower Body', duration: '52 min', calories: 380 },
              { date: 'May 3, 2025', workout: 'Full Body', duration: '65 min', calories: 450 },
              { date: 'May 1, 2025', workout: 'Upper Body', duration: '45 min', calories: 310 },
            ].map((record) => (
              <Card key={record.date}>
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{record.workout}</h3>
                    <p className="text-sm text-gray-500">{record.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{record.duration}</p>
                    <p className="text-sm text-gray-500">{record.calories} calories</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkoutsContent;
