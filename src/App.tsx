import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import MemberOnboarding from "./pages/MemberOnboarding";
import MemberDashboard from "./pages/MemberDashboard";
import MemberLoans from "./pages/MemberLoans";
import MemberProfile from "./pages/MemberProfile";
import CohortDiscovery from "./pages/CohortDiscovery";
import LenderOffers from "./pages/LenderOffers";
import EMISimulator from "./pages/EMISimulator";
import PartnerDashboard from "./pages/PartnerDashboard";
import CohortsToBid from "./pages/CohortsToBid";
import MyBids from "./pages/MyBids";
import AnalyticsPage from "./pages/AnalyticsPage";
import MemberAnalytics from "./pages/MemberAnalytics";
import TechArchitecture from "./pages/TechArchitecture";
import BusinessModel from "./pages/BusinessModel";
import CohortCreditDashboard from "./pages/CohortCreditDashboard";
import SMECreditProfile from "./pages/SMECreditProfile";
import PartnerPortfolio from "./pages/PartnerPortfolio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/member/onboarding" element={<MemberOnboarding />} />
            <Route path="/member/dashboard" element={<MemberDashboard />} />
            <Route path="/member/loans" element={<MemberLoans />} />
            <Route path="/member/profile" element={<MemberProfile />} />
            <Route path="/member/analytics" element={<MemberAnalytics />} />
            <Route path="/cohorts" element={<CohortDiscovery />} />
            <Route path="/offers" element={<LenderOffers />} />
            <Route path="/emi-simulator" element={<EMISimulator />} />
            <Route path="/partner/dashboard" element={<PartnerDashboard />} />
            <Route path="/partner/cohorts" element={<CohortsToBid />} />
            <Route path="/partner/cohorts/delhi-festive-2026" element={<CohortCreditDashboard />} />
            <Route path="/partner/cohorts/delhi-festive-2026/sme/rajesh" element={<SMECreditProfile />} />
            <Route path="/partner/portfolio" element={<PartnerPortfolio />} />
            <Route path="/partner/bids" element={<MyBids />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/how-it-works" element={<TechArchitecture />} />
            <Route path="/business-model" element={<BusinessModel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
