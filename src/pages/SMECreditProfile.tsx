import { useState } from "react";
import Header from "@/components/Header";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

// --- Reuse Rajesh demo data from MemberAnalytics ---
const revenueData = [
  { month: "Mar", revenue: 7.2 }, { month: "Apr", revenue: 6.5 },
  { month: "May", revenue: 6.8 }, { month: "Jun", revenue: 7.0 },
  { month: "Jul", revenue: 8.2 }, { month: "Aug", revenue: 9.5 },
  { month: "Sep", revenue: 11.0 }, { month: "Oct", revenue: 18.6 },
  { month: "Nov", revenue: 16.2 }, { month: "Dec", revenue: 10.5 },
  { month: "Jan", revenue: 7.0 }, { month: "Feb", revenue: 6.8 },
];
const inventoryVsRevenue = [
  { month: "Mar", inventory: 8, revenue: 7.2 }, { month: "Apr", inventory: 7, revenue: 6.5 },
  { month: "May", inventory: 9, revenue: 6.8 }, { month: "Jun", inventory: 11, revenue: 7.0 },
  { month: "Jul", inventory: 16, revenue: 8.2 }, { month: "Aug", inventory: 20, revenue: 9.5 },
  { month: "Sep", inventory: 22, revenue: 11.0 }, { month: "Oct", inventory: 14, revenue: 18.6 },
  { month: "Nov", inventory: 10, revenue: 16.2 }, { month: "Dec", inventory: 8, revenue: 10.5 },
  { month: "Jan", inventory: 7, revenue: 7.0 }, { month: "Feb", inventory: 7, revenue: 6.8 },
];
const gstData = [
  { name: "Filed", value: 85 }, { name: "Missed", value: 15 },
];
const riskBands = ["A", "B+", "B", "C"];
const activeRisk = "B+";

const peakColor = "hsl(220, 55%, 15%)";
const normalColor = "hsl(220, 55%, 70%)";

const ScoreGauge = ({ score, max = 100, label, color, description }: {
  score: number; max?: number; label: string; color: string; description?: string;
}) => {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - ((score / max) * 100 / 100) * circumference;
  return (
    <div className="flex flex-col items-center">
      <svg width="120" height="120" className="mb-2">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="9" />
        <circle cx="60" cy="60" r={radius} fill="none" stroke={color} strokeWidth="9"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          transform="rotate(-90 60 60)" className="transition-all duration-700" />
        <text x="60" y="58" textAnchor="middle" className="fill-foreground font-bold font-display" fontSize="22">{score}</text>
        <text x="60" y="76" textAnchor="middle" className="fill-muted-foreground" fontSize="11">/ {max}</text>
      </svg>
      <span className="text-xs font-semibold text-foreground">{label}</span>
      {description && <p className="text-[10px] text-muted-foreground text-center mt-1 max-w-[200px]">{description}</p>}
    </div>
  );
};

const StatBlock = ({ label, value }: { label: string; value: string }) => (
  <div className="p-3 rounded-lg bg-secondary/40 border border-border">
    <span className="text-[10px] text-muted-foreground block mb-0.5">{label}</span>
    <span className="text-sm font-display font-bold text-foreground">{value}</span>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="card-elevated mb-6">
    <h3 className="font-display font-semibold text-foreground text-sm mb-4 tracking-tight">{title}</h3>
    {children}
  </div>
);

const SMECreditProfile = () => {
  const [interestRate, setInterestRate] = useState("14.5");
  const [processingFee, setProcessingFee] = useState("1.5");
  const [repaymentStructure, setRepaymentStructure] = useState("step-up");
  const [minCompliance, setMinCompliance] = useState("75");

  const irr = (parseFloat(interestRate || "0") * 0.85 + parseFloat(processingFee || "0") * 1.2).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Standardized Underwriting Extract</p>
          <h1 className="text-2xl font-display font-bold text-foreground">SME Credit Profile — Rajesh Light House Traders</h1>
          <p className="text-sm text-muted-foreground mt-1">Decorative Lighting | Delhi NCR | Ticket Size: ₹52L</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Revenue Intelligence */}
            <Section title="Revenue Intelligence">
              <div className="h-56 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData} barCategoryGap="20%">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,91%)" />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(220,10%,46%)" }} />
                    <YAxis tick={{ fontSize: 11, fill: "hsl(220,10%,46%)" }} unit="L" />
                    <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(220,15%,91%)", fontSize: 12 }}
                      formatter={(v: number) => [`₹${v}L`, "Revenue"]} />
                    <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
                      {revenueData.map((e) => (
                        <Cell key={e.month} fill={e.month === "Oct" || e.month === "Nov" ? peakColor : normalColor} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                <StatBlock label="Avg Monthly Revenue" value="₹9.1L" />
                <StatBlock label="Peak Revenue" value="₹18.6L" />
                <StatBlock label="Off-Season Avg" value="₹6.8L" />
                <StatBlock label="Peak Ratio" value="2.9x" />
              </div>
              <div className="border-t border-border pt-5 flex justify-center">
                <ScoreGauge score={87} label="Seasonality Score" color="hsl(220, 55%, 30%)"
                  description="Highly predictable seasonal pattern improves lender confidence." />
              </div>
            </Section>

            {/* Inventory Intelligence */}
            <Section title="Inventory Intelligence">
              <div className="h-52 mb-3">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={inventoryVsRevenue}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,91%)" />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(220,10%,46%)" }} />
                    <YAxis tick={{ fontSize: 11, fill: "hsl(220,10%,46%)" }} unit="L" />
                    <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(220,15%,91%)", fontSize: 12 }} />
                    <Line type="monotone" dataKey="inventory" stroke="hsl(220,55%,15%)" strokeWidth={2} name="Inventory (₹L)" dot={{ r: 2 }} />
                    <Line type="monotone" dataKey="revenue" stroke="hsl(38,92%,50%)" strokeWidth={2} name="Revenue (₹L)" dot={{ r: 2 }} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="p-3 rounded-lg bg-info/5 border border-info/20 text-xs text-foreground mb-4">
                <strong>Insight:</strong> Strong positive correlation between pre-season inventory build and peak sales.
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">Inventory Turnover:</span>
                <div className="flex-1 h-5 bg-secondary rounded-full overflow-hidden relative">
                  <div className="h-full rounded-full bg-primary/80" style={{ width: "67.5%" }} />
                  <div className="absolute top-0 h-full border-l-2 border-dashed border-destructive" style={{ left: "55%" }} />
                </div>
                <span className="text-sm font-bold text-foreground">2.7x</span>
              </div>
            </Section>

            {/* Cash Flow Stability */}
            <Section title="Cash Flow Stability">
              <div className="flex gap-1 mb-3">
                {["Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb"].map((m) => (
                  <div key={m} className={`flex-1 h-7 rounded flex items-center justify-center text-[9px] font-medium ${
                    m === "Aug" || m === "Sep"
                      ? "bg-destructive/10 text-destructive border border-destructive/20"
                      : "bg-secondary text-muted-foreground"
                  }`}>{m}</div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mb-4">OD Utilization: ₹8L during stress window</p>
              <div className="flex justify-center">
                <ScoreGauge score={74} label="Cash Flow Stability" color="hsl(220, 55%, 55%)"
                  description="Moderate liquidity compression during pre-season months." />
              </div>
            </Section>

            {/* Working Capital Assessment */}
            <Section title="Working Capital Assessment">
              <div className="grid grid-cols-3 gap-3 mb-4">
                <StatBlock label="Pre-Season Gap" value="₹42L" />
                <StatBlock label="Requested WC" value="₹60L" />
                <StatBlock label="Optional Term Loan" value="₹25L" />
              </div>
              <div className="flex h-8 rounded-lg overflow-hidden border border-border">
                <div className="bg-success/20 flex items-center justify-center text-[10px] font-medium text-foreground" style={{ width: "30%" }}>
                  Existing Cash
                </div>
                <div className="bg-destructive/15 flex items-center justify-center text-[10px] font-medium text-destructive" style={{ width: "33%" }}>
                  Gap ₹42L
                </div>
                <div className="bg-primary/15 flex items-center justify-center text-[10px] font-medium text-foreground" style={{ width: "37%" }}>
                  Requested ₹60L
                </div>
              </div>
            </Section>

            {/* Compliance Snapshot */}
            <Section title="Compliance Snapshot">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-40 h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={gstData} dataKey="value" cx="50%" cy="50%" innerRadius={38} outerRadius={58} paddingAngle={2}>
                        <Cell fill="hsl(220, 55%, 30%)" />
                        <Cell fill="hsl(220, 15%, 91%)" />
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-3">
                  <StatBlock label="GST Filing" value="85%" />
                  <StatBlock label="GST Status" value="Active" />
                  <StatBlock label="Avg GST (Peak)" value="₹3L" />
                  <StatBlock label="Compliance Score" value="85/100" />
                </div>
              </div>
            </Section>

            {/* Risk Classification */}
            <Section title="Risk Classification">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-display font-bold text-foreground">{activeRisk}</span>
              </div>
              <div className="flex gap-2 mb-4">
                {riskBands.map((band) => (
                  <div key={band} className={`flex-1 py-2.5 rounded-lg text-center text-xs font-semibold ${
                    band === activeRisk ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-muted-foreground"
                  }`}>{band}</div>
                ))}
              </div>
              <ul className="space-y-1.5 text-xs text-foreground">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-success" />High seasonality predictability</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-warning" />Moderate liquidity stress</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-success" />Strong inventory-revenue linkage</li>
              </ul>
            </Section>

            {/* Confidentiality Notice */}
            <div className="p-4 rounded-lg border border-border bg-secondary/30 text-xs text-muted-foreground">
              🔒 This extract is standardized and anonymized for underwriting efficiency. Raw documents are accessible only post sanction under NDA.
            </div>
          </div>

          {/* Right-Side Bid Panel */}
          <div className="lg:w-80 shrink-0">
            <div className="card-elevated lg:sticky lg:top-6">
              <h3 className="font-display font-semibold text-foreground text-sm mb-4">Place Bid</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground block mb-1">Interest Rate (%)</label>
                  <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1">Processing Fee (%)</label>
                  <input type="number" step="0.1" value={processingFee} onChange={(e) => setProcessingFee(e.target.value)}
                    className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1">Repayment Structure</label>
                  <select value={repaymentStructure} onChange={(e) => setRepaymentStructure(e.target.value)}
                    className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="step-up">Step-Up EMI</option>
                    <option value="flat">Flat EMI</option>
                    <option value="moratorium">Moratorium + EMI</option>
                    <option value="revenue-linked">Revenue-Linked</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground block mb-1">Min Compliance Required</label>
                  <input type="number" value={minCompliance} onChange={(e) => setMinCompliance(e.target.value)}
                    className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Expected IRR</p>
                  <p className="text-2xl font-display font-bold text-foreground">{irr}%</p>
                </div>

                <button className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                  Submit Bid
                </button>
                <button className="w-full border border-border text-foreground py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
                  Save Draft
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMECreditProfile;
