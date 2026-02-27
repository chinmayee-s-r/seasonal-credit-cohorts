import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

// --- DEMO DATA ---
const revenueData = [
  { month: "Mar", revenue: 7.2 },
  { month: "Apr", revenue: 6.5 },
  { month: "May", revenue: 6.8 },
  { month: "Jun", revenue: 7.0 },
  { month: "Jul", revenue: 8.2 },
  { month: "Aug", revenue: 9.5 },
  { month: "Sep", revenue: 11.0 },
  { month: "Oct", revenue: 18.6 },
  { month: "Nov", revenue: 16.2 },
  { month: "Dec", revenue: 10.5 },
  { month: "Jan", revenue: 7.0 },
  { month: "Feb", revenue: 6.8 },
];

const inventoryVsRevenue = [
  { month: "Mar", inventory: 8, revenue: 7.2 },
  { month: "Apr", inventory: 7, revenue: 6.5 },
  { month: "May", inventory: 9, revenue: 6.8 },
  { month: "Jun", inventory: 11, revenue: 7.0 },
  { month: "Jul", inventory: 16, revenue: 8.2 },
  { month: "Aug", inventory: 20, revenue: 9.5 },
  { month: "Sep", inventory: 22, revenue: 11.0 },
  { month: "Oct", inventory: 14, revenue: 18.6 },
  { month: "Nov", inventory: 10, revenue: 16.2 },
  { month: "Dec", inventory: 8, revenue: 10.5 },
  { month: "Jan", inventory: 7, revenue: 7.0 },
  { month: "Feb", inventory: 7, revenue: 6.8 },
];

const gstData = [
  { name: "Filed", value: 85 },
  { name: "Missed", value: 15 },
];

const riskBands = ["A", "B+", "B", "C"];
const activeRisk = "B+";

// --- GAUGE COMPONENT ---
const ScoreGauge = ({ score, max = 100, label, color, description }: {
  score: number; max?: number; label: string; color: string; description: string;
}) => {
  const pct = (score / max) * 100;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="140" className="mb-3">
        <circle cx="70" cy="70" r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="10" />
        <circle
          cx="70" cy="70" r={radius} fill="none"
          stroke={color} strokeWidth="10"
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 70 70)"
          className="transition-all duration-700"
        />
        <text x="70" y="66" textAnchor="middle" className="fill-foreground text-2xl font-bold font-display" fontSize="26">{score}</text>
        <text x="70" y="86" textAnchor="middle" className="fill-muted-foreground" fontSize="12">/ {max}</text>
      </svg>
      <span className="text-sm font-semibold text-foreground">{label}</span>
      <p className="text-xs text-muted-foreground text-center mt-1 max-w-[220px]">{description}</p>
    </div>
  );
};

// --- STAT BLOCK ---
const StatBlock = ({ label, value }: { label: string; value: string }) => (
  <div className="p-4 rounded-lg bg-secondary/40 border border-border">
    <span className="text-xs text-muted-foreground block mb-1">{label}</span>
    <span className="text-lg font-display font-bold text-foreground">{value}</span>
  </div>
);

// --- SECTION WRAPPER ---
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="card-elevated mb-6">
    <h3 className="font-display font-semibold text-foreground text-base mb-5 tracking-tight">{title}</h3>
    {children}
  </div>
);

const MemberAnalytics = () => {
  const peakColor = "hsl(220, 55%, 15%)";
  const normalColor = "hsl(220, 55%, 70%)";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-display font-bold text-foreground">Standardized Financial Summary</h1>
          <p className="text-sm text-muted-foreground mt-1">
            This is the structured financial extract lenders review when evaluating your profile.
          </p>
        </div>

        {/* SECTION 1 — Revenue Intelligence */}
        <Section title="Revenue Intelligence">
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">Monthly Revenue Trend</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData} barCategoryGap="20%">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,91%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(220,10%,46%)" }} />
                  <YAxis tick={{ fontSize: 12, fill: "hsl(220,10%,46%)" }} unit="L" />
                  <Tooltip
                    contentStyle={{ borderRadius: 8, border: "1px solid hsl(220,15%,91%)", fontSize: 12 }}
                    formatter={(v: number) => [`₹${v}L`, "Revenue"]}
                  />
                  <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
                    {revenueData.map((entry) => (
                      <Cell
                        key={entry.month}
                        fill={entry.month === "Oct" || entry.month === "Nov" ? peakColor : normalColor}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              <StatBlock label="Average Monthly Revenue" value="₹9.1L" />
              <StatBlock label="Peak Revenue" value="₹18.6L" />
              <StatBlock label="Off-Season Average" value="₹6.8L" />
              <StatBlock label="Peak-to-Offseason Ratio" value="2.9x" />
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center gap-8">
            <ScoreGauge
              score={87}
              label="Seasonality Score"
              color="hsl(220, 55%, 30%)"
              description="Your revenue follows a highly predictable seasonal pattern. This improves lender confidence."
            />
            <div className="flex-1 text-sm text-muted-foreground space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: "hsl(220, 55%, 30%)" }} />
                <span>80+ — Strong Predictability (Deep Blue)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: "hsl(220, 55%, 55%)" }} />
                <span>60–79 — Medium Predictability</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full inline-block bg-muted" />
                <span>Below 60 — Low Predictability</span>
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION 2 — Inventory Intelligence */}
        <Section title="Inventory Intelligence">
          <h4 className="text-sm font-semibold text-foreground mb-3">Inventory Build vs Revenue Correlation</h4>
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={inventoryVsRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,91%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(220,10%,46%)" }} />
                <YAxis tick={{ fontSize: 12, fill: "hsl(220,10%,46%)" }} unit="L" />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(220,15%,91%)", fontSize: 12 }} />
                <Line type="monotone" dataKey="inventory" stroke="hsl(220,55%,15%)" strokeWidth={2} name="Inventory (₹L)" dot={{ r: 3 }} />
                <Line type="monotone" dataKey="revenue" stroke="hsl(38,92%,50%)" strokeWidth={2} name="Revenue (₹L)" dot={{ r: 3 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="p-4 rounded-lg bg-info/5 border border-info/20 text-sm text-foreground mb-6">
            <strong>Insight:</strong> Strong positive correlation between pre-season inventory build and peak sales.
          </div>

          <h4 className="text-sm font-semibold text-foreground mb-3">Inventory Turnover</h4>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-6 bg-secondary rounded-full relative overflow-hidden">
              <div className="h-full rounded-full bg-primary/80 transition-all" style={{ width: "67.5%" }} />
              {/* benchmark marker at 55% (2.2/4*100) */}
              <div className="absolute top-0 h-full border-l-2 border-dashed border-destructive" style={{ left: "55%" }}>
                <span className="absolute -top-5 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap">Median 2.2x</span>
              </div>
            </div>
            <span className="text-lg font-display font-bold text-foreground min-w-[60px]">2.7x</span>
          </div>
        </Section>

        {/* SECTION 3 — Cash Flow Stability */}
        <Section title="Cash Flow Stability">
          <h4 className="text-sm font-semibold text-foreground mb-3">Cash Stress Window</h4>
          <div className="flex gap-1 mb-2">
            {["Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb"].map((m) => (
              <div
                key={m}
                className={`flex-1 h-8 rounded flex items-center justify-center text-[10px] font-medium ${
                  m === "Aug" || m === "Sep"
                    ? "bg-destructive/10 text-destructive border border-destructive/20"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {m}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-6">
            <span className="w-3 h-3 rounded bg-destructive/15 border border-destructive/30 inline-block" />
            Cash Stress Period — OD Utilization: ₹8L
          </div>

          <div className="border-t border-border pt-6 flex justify-center">
            <ScoreGauge
              score={74}
              label="Cash Flow Stability Score"
              color="hsl(220, 55%, 55%)"
              description="Moderate liquidity compression during pre-season months. Structured repayment can reduce pressure."
            />
          </div>
        </Section>

        {/* SECTION 4 — Working Capital Assessment */}
        <Section title="Working Capital Assessment">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <StatBlock label="Estimated Pre-Season Gap" value="₹42L" />
            <StatBlock label="Requested Working Capital" value="₹60L" />
            <StatBlock label="Optional Term Loan" value="₹25L" />
          </div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Funding Gap Visualization</h4>
          <div className="flex h-10 rounded-lg overflow-hidden border border-border">
            <div className="bg-success/20 flex items-center justify-center text-[11px] font-medium text-foreground" style={{ width: "30%" }}>
              Existing Cash Flow
            </div>
            <div className="bg-destructive/15 flex items-center justify-center text-[11px] font-medium text-destructive" style={{ width: "33%" }}>
              Gap — ₹42L
            </div>
            <div className="bg-primary/15 flex items-center justify-center text-[11px] font-medium text-foreground" style={{ width: "37%" }}>
              Requested — ₹60L
            </div>
          </div>
        </Section>

        {/* SECTION 5 — Compliance Snapshot */}
        <Section title="Compliance Snapshot">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={gstData} dataKey="value" cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={2}>
                    <Cell fill="hsl(220, 55%, 30%)" />
                    <Cell fill="hsl(220, 15%, 91%)" />
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(220,15%,91%)", fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-3">
              <StatBlock label="GST Filing Regularity" value="85%" />
              <StatBlock label="GST Status" value="Active" />
              <StatBlock label="Avg GST Paid (Peak)" value="₹3L" />
              <StatBlock label="Compliance Score" value="85 / 100" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">Consistent GST compliance increases underwriting eligibility.</p>
        </Section>

        {/* SECTION 6 — Risk Classification */}
        <Section title="Risk Classification">
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl font-display font-bold text-foreground">{activeRisk}</span>
          </div>
          <div className="flex gap-2 mb-6">
            {riskBands.map((band) => (
              <div
                key={band}
                className={`flex-1 py-3 rounded-lg text-center text-sm font-semibold transition-all ${
                  band === activeRisk
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {band}
              </div>
            ))}
          </div>
          <ul className="space-y-2 text-sm text-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
              High seasonality predictability
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-warning flex-shrink-0" />
              Moderate liquidity stress
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
              Strong inventory-revenue linkage
            </li>
          </ul>
        </Section>
      </div>
      <Footer />
    </div>
  );
};

export default MemberAnalytics;
