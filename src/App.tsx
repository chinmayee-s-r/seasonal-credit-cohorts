import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import MemberOnboarding from "./pages/MemberOnboarding";
import MemberDashboard from "./pages/MemberDashboard";
import CohortDiscovery from "./pages/CohortDiscovery";
import LenderOffers from "./pages/LenderOffers";
import EMISimulator from "./pages/EMISimulator";
import PartnerDashboard from "./pages/PartnerDashboard";
import AnalyticsPage from "./pages/AnalyticsPage";
import TechArchitecture from "./pages/TechArchitecture";
import BusinessModel from "./pages/BusinessModel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/member/onboarding" element={<MemberOnboarding />} />
          <Route path="/member/dashboard" element={<MemberDashboard />} />
          <Route path="/cohorts" element={<CohortDiscovery />} />
          <Route path="/offers" element={<LenderOffers />} />
          <Route path="/emi-simulator" element={<EMISimulator />} />
          <Route path="/partner/dashboard" element={<PartnerDashboard />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/how-it-works" element={<TechArchitecture />} />
          <Route path="/business-model" element={<BusinessModel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
