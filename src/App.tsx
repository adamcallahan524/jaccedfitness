
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WaitlistProvider } from "./context/WaitlistContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import WorkoutsPage from "./pages/WorkoutsPage";
import NutritionPage from "./pages/NutritionPage";
import ProgressPage from "./pages/ProgressPage";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import GymManagerDashboard from "./pages/GymManagerDashboard";
import AITrainerPage from "./pages/AITrainerPage";
import GymCheckInPage from "./pages/GymCheckInPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WaitlistProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/workouts" element={<WorkoutsPage />} />
            <Route path="/dashboard/nutrition" element={<NutritionPage />} />
            <Route path="/dashboard/progress" element={<ProgressPage />} />
            <Route path="/dashboard/ai-trainer" element={<AITrainerPage />} />
            <Route path="/dashboard/gym-check-in" element={<GymCheckInPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/gym-manager" element={<GymManagerDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </WaitlistProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
