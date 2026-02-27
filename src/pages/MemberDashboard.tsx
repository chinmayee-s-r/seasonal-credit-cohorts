import { Link } from "react-router-dom";
import { ArrowRight, AlertCircle, TrendingUp, Calendar, BarChart3, IndianRupee } from "lucide-react";
import Header from "@/components/Header";

const insights = [
  { label: "Peak Months", value: "October – November", icon: Calendar },
  { label: "Off-Season", value: "March – June", icon: Calendar },
  { label: "Seasonality Strength", value: "High", icon: TrendingUp },
  { label: "Peak to Off-Season Ratio", value: "2.9x", icon: BarChart3 },
  { label: "Cash Crunch Risk", value: "Aug – Sep", icon: AlertCircle },
  { label: "Working Capital Gap", value: "₹42L", icon: IndianRupee },
];

const MemberDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-display font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Rajesh Light House Traders</p>
        </div>

        {/* Next Step Card */}
        <div className="card-prominent mb-8 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-semibold text-foreground mb-1">Your Next Step</h3>
            <p className="text-sm text-muted-foreground">
              Your profile is 78% complete. Upload latest GST filing to unlock better offers.
            </p>
            <div className="mt-3 w-full bg-secondary rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }} />
            </div>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="mb-8">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">Seasonal Insights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {insights.map((item) => (
              <div key={item.label} className="card-institutional">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
                <span className="text-lg font-display font-bold text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cohort Recommendation */}
        <div className="card-elevated border-primary/10 border-2">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <span className="badge-status bg-success/10 text-success text-[10px] font-semibold mb-3 inline-block">Recommended Cohort</span>
              <h3 className="text-xl font-display font-bold text-foreground mb-1">Delhi Festive Retail Cohort 2026</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Matches your seasonal cycle and loan requirement. 8 of 10 members joined.
              </p>
            </div>
            <Link
              to="/cohorts"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              View Cohorts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <Link to="/offers" className="card-institutional hover:border-primary/20 transition-all group">
            <h4 className="font-semibold text-foreground text-sm mb-1">Approved Offers</h4>
            <p className="text-xs text-muted-foreground">View approved loan offers</p>
          </Link>
          <Link to="/emi-simulator" className="card-institutional hover:border-primary/20 transition-all group">
            <h4 className="font-semibold text-foreground text-sm mb-1">EMI Simulator</h4>
            <p className="text-xs text-muted-foreground">Compare repayment structures</p>
          </Link>
          <Link to="/cohorts" className="card-institutional hover:border-primary/20 transition-all group">
            <h4 className="font-semibold text-foreground text-sm mb-1">Cohort Discovery</h4>
            <p className="text-xs text-muted-foreground">Browse matching cohorts</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
