
import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardMobileNav from '@/components/dashboard/DashboardMobileNav';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { Barcode, Check, MapPin, Search } from 'lucide-react';

const GymCheckInPage = () => {
  const [checkInDialogOpen, setCheckInDialogOpen] = useState(false);
  const [selectedGym, setSelectedGym] = useState<string | null>(null);
  
  const userBarcodes = [
    { id: 1, gymName: "PowerFit Gym", barcode: "JF-USER-12345", status: "Active" },
    { id: 2, gymName: "Iron Strength", barcode: "JF-USER-67890", status: "Active" },
    { id: 3, gymName: "FitZone Studio", barcode: "JF-USER-24680", status: "Expired" },
  ];
  
  const nearbyGyms = [
    { id: 1, name: "PowerFit Gym", address: "123 Fitness Ave, Muscleton", distance: "0.8 miles" },
    { id: 2, name: "Iron Strength", address: "456 Pump Street, Gainsville", distance: "1.2 miles" },
    { id: 3, name: "FitZone Studio", address: "789 Cardio Lane, Sweatville", distance: "1.5 miles" },
    { id: 4, name: "Flex Factory", address: "101 Protein Road, Liftington", distance: "2.3 miles" },
  ];

  const handleCheckIn = (gymName: string) => {
    setSelectedGym(gymName);
    setCheckInDialogOpen(true);
  };

  const confirmCheckIn = () => {
    setCheckInDialogOpen(false);
    toast({
      title: "Checked in successfully!",
      description: `You have checked in at ${selectedGym}. Enjoy your workout!`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 pb-16 md:pb-0">
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-1">Gym Check-In Portal</h1>
              <p className="text-gray-600">Manage your gym memberships and check into partner gyms</p>
            </div>
            
            <Tabs defaultValue="barcodes" className="space-y-6">
              <TabsList>
                <TabsTrigger value="barcodes">My Gym Barcodes</TabsTrigger>
                <TabsTrigger value="nearby">Nearby Gyms</TabsTrigger>
              </TabsList>
              
              <TabsContent value="barcodes" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userBarcodes.map((barcode) => (
                    <Card key={barcode.id} className={barcode.status === "Expired" ? "opacity-70" : ""}>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center justify-between">
                          {barcode.gymName}
                          {barcode.status === "Active" ? (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                          ) : (
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Expired</span>
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col items-center">
                          <div className="bg-white p-4 rounded-lg border w-full flex justify-center mb-4">
                            <Barcode size={120} />
                          </div>
                          <p className="text-center font-mono mb-4">{barcode.barcode}</p>
                          <Button 
                            onClick={() => handleCheckIn(barcode.gymName)}
                            className="w-full"
                            disabled={barcode.status === "Expired"}
                          >
                            {barcode.status === "Active" ? "Check In Now" : "Renew Membership"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="nearby" className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Input placeholder="Search for gyms near you..." className="flex-1" />
                  <Button>
                    <Search className="mr-2 h-4 w-4" /> Search
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {nearbyGyms.map((gym) => (
                    <Card key={gym.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-lg">{gym.name}</h3>
                            <div className="flex items-center text-gray-500 text-sm mt-1">
                              <MapPin size={14} className="mr-1" />
                              <span>{gym.address}</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">{gym.distance} away</p>
                          </div>
                          <Button 
                            variant="outline" 
                            className="bg-fitness-primary text-white hover:bg-fitness-primary/90 border-none"
                            onClick={() => handleCheckIn(gym.name)}
                          >
                            Check In
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <Dialog open={checkInDialogOpen} onOpenChange={setCheckInDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Check in to {selectedGym}</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p className="mb-6">Are you sure you want to check in at {selectedGym}?</p>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setCheckInDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={confirmCheckIn} className="bg-fitness-primary">
                    <Check className="mr-2 h-4 w-4" /> Confirm Check-In
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </main>
      </div>
      <DashboardMobileNav />
    </div>
  );
};

export default GymCheckInPage;
