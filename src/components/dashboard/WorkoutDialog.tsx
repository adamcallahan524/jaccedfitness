
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dumbbell, Clock, CalendarCheck } from 'lucide-react';

const WorkoutViewDialog = ({ open, onOpenChange, workout = null }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{workout ? workout.name : 'Workout Plan'}</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="details">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="exercises">Exercises</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details">
            <div className="space-y-4">
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                  <Dumbbell size={16} />
                  <span className="text-sm font-medium">Strength</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                  <Clock size={16} />
                  <span className="text-sm font-medium">45 minutes</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                  <CalendarCheck size={16} />
                  <span className="text-sm font-medium">3x per week</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Description</h4>
                <p className="text-sm text-gray-600">
                  A comprehensive upper body workout focusing on building strength in the chest, back, shoulders, and arms.
                  This workout is designed to increase muscle mass and improve functional strength.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Goals</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Strength Gain</span>
                    <div className="w-36 bg-gray-200 h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Muscle Building</span>
                    <div className="w-36 bg-gray-200 h-2 rounded-full">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Endurance</span>
                    <div className="w-36 bg-gray-200 h-2 rounded-full">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="exercises">
            <div className="space-y-4">
              {[
                { name: 'Bench Press', sets: 4, reps: '8-10', rest: '90 sec' },
                { name: 'Pull Ups', sets: 3, reps: '8-12', rest: '60 sec' },
                { name: 'Shoulder Press', sets: 3, reps: '10-12', rest: '60 sec' },
                { name: 'Bicep Curls', sets: 3, reps: '12-15', rest: '45 sec' },
                { name: 'Tricep Extensions', sets: 3, reps: '12-15', rest: '45 sec' }
              ].map((exercise, index) => (
                <div key={index} className="flex items-center border rounded-lg p-3 bg-gray-50 gap-4">
                  <div className="h-8 w-8 rounded-full bg-fitness-primary/20 flex items-center justify-center text-fitness-primary font-medium">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{exercise.name}</h4>
                    <div className="flex gap-4 mt-1 text-sm text-gray-600">
                      <span>{exercise.sets} sets</span>
                      <span>{exercise.reps} reps</span>
                      <span>{exercise.rest} rest</span>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">Edit</Button>
                </div>
              ))}
              <Button className="w-full" variant="outline">Add Exercise</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <div className="space-y-4">
              <div className="border rounded-lg divide-y">
                {[
                  { date: 'May 7, 2025', completed: true, note: 'Increased weight on bench press' },
                  { date: 'May 5, 2025', completed: true, note: 'Felt strong today' },
                  { date: 'May 2, 2025', completed: false, note: 'Skipped due to shoulder pain' },
                  { date: 'April 30, 2025', completed: true, note: 'Added extra set on bicep curls' }
                ].map((session, index) => (
                  <div key={index} className="p-3 flex justify-between items-center">
                    <div>
                      <div className="font-medium">{session.date}</div>
                      <div className="text-sm text-gray-600">{session.note}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      session.completed 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {session.completed ? 'Completed' : 'Missed'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="sm:flex-1">Start Workout</Button>
          <Button className="sm:flex-1">Modify Workout</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WorkoutViewDialog;
