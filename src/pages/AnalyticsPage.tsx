import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, CheckCircle2, BarChart3, Clock } from "lucide-react";

const metrics = [
  { label: "On-time Repayment", value: "94.2%", change: "+2.1%", icon: CheckCircle2 },
  { label: "Cohort Performance Index", value: "8.7/10", change: "+0.4", icon: BarChart3 },
  { label: "Pre-season Disbursement", value: "₹42 Cr", change: "+18%", icon: TrendingUp },
  { label: "OD Utilization Reduction", value: "31%", change: "-12pp", icon: Clock },
];

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-display font-bold text-foreground">Platform Analytics</h1>
          <p className="text-sm text-muted-foreground">Aggregate performance metrics across all cohorts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((m) => (
            <div key={m.label} className="card-elevated">
              <m.icon className="w-5 h-5 text-muted-foreground mb-3" />
              <span className="text-xs text-muted-foreground block mb-1">{m.label}</span>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-display font-bold text-foreground">{m.value}</span>
                <span className="text-xs font-semibold text-success mb-1">{m.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Credit Profile Batch */}
        <div className="card-elevated mb-8">
          <h3 className="font-display font-semibold text-foreground mb-4">Credit Profile Batch Logic</h3>
          <p className="text-sm text-muted-foreground mb-4">Each cohort forms a Credit Profile Batch. No SME-specific data is shared with lenders.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Aggregated Capital Demand", value: "₹16.5 Cr" },
              { label: "Weighted Seasonality Index", value: "0.82" },
              { label: "Risk Distribution Score", value: "B+" },
              { label: "Avg GST Compliance", value: "91%" },
              { label: "Inventory Turnover Ratio", value: "4.2x" },
              { label: "Revenue Volatility", value: "Moderate" },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-lg bg-secondary/50">
                <span className="text-xs text-muted-foreground block mb-1">{item.label}</span>
                <span className="text-lg font-display font-bold text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Data: Rajesh */}
        <div className="card-prominent">
          <span className="badge-status bg-info/10 text-info text-[10px] font-semibold mb-3 inline-block">Demo Profile</span>
          <h3 className="font-display font-bold text-foreground text-lg mb-1">Rajesh Light House Traders</h3>
          <p className="text-sm text-muted-foreground mb-4">Chandni Chowk, Delhi — Festive & Decorative Lighting</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Working Capital Need", value: "₹60L" },
              { label: "Optional Term Loan", value: "₹25L" },
              { label: "Peak Monthly Sales", value: "₹18.6L" },
              { label: "Inventory Peak", value: "₹22L" },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-lg bg-background border border-border">
                <span className="text-xs text-muted-foreground block mb-1">{item.label}</span>
                <span className="text-lg font-display font-bold text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">OD utilization spikes during August due to pre-season inventory stocking.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnalyticsPage;
