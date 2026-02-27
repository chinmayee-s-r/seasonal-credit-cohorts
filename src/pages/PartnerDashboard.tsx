import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, Users, IndianRupee, BarChart3, Calendar, Shield, Activity } from "lucide-react";

const cohorts = [
  { name: "Delhi Festive Retail 2026", demand: "₹5 Cr", tickets: "₹50L avg", risk: "Low-Medium", irr: "16.2%", status: "Open" },
  { name: "Mumbai Wedding Season 2026", demand: "₹8 Cr", tickets: "₹57L avg", risk: "Medium", irr: "17.1%", status: "Open" },
  { name: "Jaipur Tourism 2026", demand: "₹3.5 Cr", tickets: "₹32L avg", risk: "Low", irr: "15.8%", status: "Closing Soon" },
];

const heatmapData = [
  { month: "Jan", intensity: 3 }, { month: "Feb", intensity: 3 }, { month: "Mar", intensity: 2 },
  { month: "Apr", intensity: 2 }, { month: "May", intensity: 1 }, { month: "Jun", intensity: 1 },
  { month: "Jul", intensity: 2 }, { month: "Aug", intensity: 4 }, { month: "Sep", intensity: 5 },
  { month: "Oct", intensity: 9 }, { month: "Nov", intensity: 10 }, { month: "Dec", intensity: 7 },
];

const PartnerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-display font-bold text-foreground">Partner Dashboard</h1>
          <p className="text-sm text-muted-foreground">Seasonal Capital NBFC</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Cohorts", value: "3", icon: Users },
            { label: "Total Demand", value: "₹16.5 Cr", icon: IndianRupee },
            { label: "Avg Ticket", value: "₹46L", icon: BarChart3 },
            { label: "Expected IRR", value: "16.4%", icon: TrendingUp },
          ].map((stat) => (
            <div key={stat.label} className="card-institutional">
              <stat.icon className="w-4 h-4 text-muted-foreground mb-2" />
              <span className="text-xs text-muted-foreground block">{stat.label}</span>
              <span className="text-xl font-display font-bold text-foreground">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Seasonality Heatmap */}
        <div className="card-elevated mb-8">
          <h3 className="font-display font-semibold text-foreground mb-4">Seasonality Demand Heatmap</h3>
          <div className="flex gap-1.5">
            {heatmapData.map((d) => (
              <div key={d.month} className="flex-1 text-center">
                <div
                  className="rounded-md mb-2 mx-auto"
                  style={{
                    height: "60px",
                    backgroundColor: `hsl(220, 55%, ${90 - d.intensity * 7}%)`,
                  }}
                />
                <span className="text-[10px] text-muted-foreground">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Cohorts */}
        <div className="mb-8">
          <h3 className="font-display font-semibold text-foreground mb-4">Active Cohorts</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  {["Cohort", "Capital Demand", "Avg Ticket", "Risk Band", "Expected IRR", "Status"].map((h) => (
                    <th key={h} className="text-left py-3 px-4 font-medium text-muted-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {cohorts.map((c) => (
                  <tr key={c.name}>
                    <td className="py-3 px-4 font-semibold text-foreground">{c.name}</td>
                    <td className="py-3 px-4 text-foreground">{c.demand}</td>
                    <td className="py-3 px-4 text-foreground">{c.tickets}</td>
                    <td className="py-3 px-4"><span className="badge-status bg-info/10 text-info">{c.risk}</span></td>
                    <td className="py-3 px-4 font-semibold text-foreground">{c.irr}</td>
                    <td className="py-3 px-4"><span className={`badge-status ${c.status === "Open" ? "bg-success/10 text-success" : "bg-accent/10 text-accent-foreground"}`}>{c.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bidding Section */}
        <div className="card-prominent">
          <h3 className="font-display font-semibold text-foreground mb-4">Place a Bid</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Interest Rate</label>
              <input defaultValue="14.5%" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Repayment Structure</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all">
                <option>Moratorium + Step-up</option>
                <option>Revenue-linked</option>
                <option>Standard EMI</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Min GST Compliance</label>
              <input defaultValue="85%" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all" />
            </div>
          </div>
          <button className="mt-4 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Submit Bid
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PartnerDashboard;
