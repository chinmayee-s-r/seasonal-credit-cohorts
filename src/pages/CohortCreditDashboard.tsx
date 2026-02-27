import Header from "@/components/Header";
import { Link } from "react-router-dom";
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

// --- DATA ---
const seasonalityRevenue = [
  { type: "Off-Season Avg", value: 6.8 },
  { type: "Peak Avg", value: 17.8 },
];

const heatmapMonths = [
  { month: "Mar", intensity: 0.3 },
  { month: "Apr", intensity: 0.25 },
  { month: "May", intensity: 0.3 },
  { month: "Jun", intensity: 0.35 },
  { month: "Jul", intensity: 0.5 },
  { month: "Aug", intensity: 0.6 },
  { month: "Sep", intensity: 0.7 },
  { month: "Oct", intensity: 1.0 },
  { month: "Nov", intensity: 0.95 },
  { month: "Dec", intensity: 0.55 },
  { month: "Jan", intensity: 0.3 },
  { month: "Feb", intensity: 0.28 },
];

const riskPieData = [
  { name: "Band A", value: 30 },
  { name: "Band B", value: 50 },
  { name: "Band C", value: 20 },
];
const riskColors = ["hsl(220, 55%, 25%)", "hsl(220, 55%, 50%)", "hsl(220, 55%, 75%)"];

const repaymentTimeline = [
  { phase: "Months 1–4", label: "Reduced EMI", pct: 60 },
  { phase: "Months 5–10", label: "Standard EMI", pct: 100 },
  { phase: "Months 11–14", label: "Higher EMI (Peak)", pct: 140 },
  { phase: "Months 15–18", label: "Taper EMI", pct: 80 },
];

const smeList = [
  { name: "Rajesh Light House Traders", ticket: "₹52L", risk: "B+", seasonality: 87, compliance: 85 },
  { name: "Sharma Decoratives", ticket: "₹48L", risk: "B", seasonality: 74, compliance: 78 },
  { name: "Gupta Festive Supplies", ticket: "₹55L", risk: "A", seasonality: 91, compliance: 92 },
  { name: "Delhi Diwali Traders", ticket: "₹60L", risk: "A", seasonality: 89, compliance: 88 },
  { name: "Priya Light Emporium", ticket: "₹45L", risk: "B+", seasonality: 82, compliance: 80 },
  { name: "Northern Glow Pvt Ltd", ticket: "₹58L", risk: "B", seasonality: 70, compliance: 75 },
  { name: "Festival King Traders", ticket: "₹50L", risk: "A", seasonality: 93, compliance: 90 },
  { name: "Kapoor Seasonal Goods", ticket: "₹42L", risk: "C", seasonality: 58, compliance: 65 },
  { name: "Arora Retail Solutions", ticket: "₹56L", risk: "B+", seasonality: 80, compliance: 82 },
  { name: "Metro Festive Hub", ticket: "₹54L", risk: "B", seasonality: 76, compliance: 79 },
];

// --- Gauge Component ---
const ScoreGauge = ({ score, max = 100, label, color }: {
  score: number; max?: number; label: string; color: string;
}) => {
  const pct = (score / max) * 100;
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;
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

const CohortCreditDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-display font-bold text-foreground">Delhi Festive Retail Cohort 2026</h1>
          <p className="text-sm text-muted-foreground mt-1">Decorative Lighting & Seasonal Retail | Delhi NCR</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <StatBlock label="Cohort Size" value="10 SMEs" />
            <StatBlock label="Total Capital Demand" value="₹5.2 Cr" />
            <StatBlock label="Average Ticket Size" value="₹52L" />
            <StatBlock label="Tenure" value="18 Months" />
          </div>
        </div>

        {/* SECTION 1 — Seasonality Intelligence */}
        <Section title="Seasonality Intelligence">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-semibold text-foreground mb-3">Revenue Pattern</h4>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={seasonalityRevenue} barCategoryGap="30%">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,91%)" />
                    <XAxis dataKey="type" tick={{ fontSize: 11, fill: "hsl(220,10%,46%)" }} />
                    <YAxis tick={{ fontSize: 11, fill: "hsl(220,10%,46%)" }} unit="L" />
                    <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(220,15%,91%)", fontSize: 12 }}
                      formatter={(v: number) => [`₹${v}L`, "Revenue"]} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      <Cell fill="hsl(220, 55%, 70%)" />
                      <Cell fill="hsl(220, 55%, 15%)" />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Average Revenue Spike: <strong className="text-foreground">2.6x</strong></p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-foreground mb-3">Seasonality Alignment Heatmap</h4>
              <div className="grid grid-cols-12 gap-1 mb-4">
                {heatmapMonths.map((m) => (
                  <div key={m.month} className="flex flex-col items-center gap-1">
                    <div className="w-full aspect-square rounded" style={{
                      backgroundColor: `hsl(220, 55%, ${Math.round(90 - m.intensity * 65)}%)`,
                    }} />
                    <span className="text-[9px] text-muted-foreground">{m.month}</span>
                  </div>
                ))}
              </div>
              <ScoreGauge score={84} label="Cohort Seasonality Score" color="hsl(220, 55%, 30%)" />
            </div>
          </div>
        </Section>

        {/* SECTION 2 — Risk Distribution */}
        <Section title="Risk Distribution">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={riskPieData} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={65} paddingAngle={2}>
                    {riskPieData.map((_, i) => <Cell key={i} fill={riskColors[i]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(220,15%,91%)", fontSize: 12 }}
                    formatter={(v: number) => [`${v}%`]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-6 text-sm">
                {riskPieData.map((d, i) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ background: riskColors[i] }} />
                    <span className="text-muted-foreground">{d.name}: <strong className="text-foreground">{d.value}%</strong></span>
                  </div>
                ))}
              </div>
              <StatBlock label="Weighted Risk Score" value="72 / 100" />
              <p className="text-xs text-muted-foreground">Risk classification based on seasonality clarity and cash flow behavior — not traditional bureau score.</p>
            </div>
          </div>
        </Section>

        {/* SECTION 3 — Cash Flow Stress Analysis */}
        <Section title="Cash Flow Stress Analysis">
          <div className="flex gap-1 mb-3">
            {["Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb"].map((m) => (
              <div key={m} className={`flex-1 h-8 rounded flex items-center justify-center text-[10px] font-medium ${
                m === "Aug" || m === "Sep"
                  ? "bg-destructive/10 text-destructive border border-destructive/20"
                  : "bg-secondary text-muted-foreground"
              }`}>{m}</div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <StatBlock label="Avg Pre-Season WC Gap" value="₹41L" />
            <StatBlock label="Avg OD Usage During Stress" value="₹9.5L" />
          </div>
          <div className="p-3 rounded-lg bg-info/5 border border-info/20 text-xs text-foreground">
            <strong>Observation:</strong> Cash stress is structural and cyclical, not erratic.
          </div>
        </Section>

        {/* SECTION 4 — Compliance & Stability */}
        <Section title="Compliance & Stability">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <StatBlock label="GST Compliance Rate" value="88%" />
            <StatBlock label="Filing Regularity" value="High" />
            <StatBlock label="Inventory Turnover (Avg)" value="2.5x" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Predictability:</span>
            <div className="flex-1 h-5 bg-secondary rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-primary/70" style={{ width: "85%" }} />
            </div>
            <span className="text-xs font-semibold text-foreground">High</span>
          </div>
        </Section>

        {/* SECTION 5 — Recommended Lending Structure */}
        <Section title="Recommended Lending Structure">
          <div className="space-y-2 mb-5">
            {repaymentTimeline.map((p) => (
              <div key={p.phase} className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-24 shrink-0">{p.phase}</span>
                <div className="flex-1 h-6 bg-secondary rounded overflow-hidden">
                  <div className="h-full rounded bg-primary/60 flex items-center px-2 text-[10px] font-medium text-primary-foreground"
                    style={{ width: `${Math.min(p.pct, 100)}%` }}>
                    {p.label}
                  </div>
                </div>
                <span className="text-xs font-semibold text-foreground w-10 text-right">{p.pct}%</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <StatBlock label="Flat EMI Default Risk Index" value="100" />
            <StatBlock label="Step-Up EMI Default Risk Index" value="72" />
          </div>
          <p className="text-xs text-muted-foreground">Estimated Default Reduction: <strong className="text-foreground">22–28%</strong></p>
        </Section>

        {/* SECTION 6 — SME List */}
        <Section title="SME Drill-Down">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 text-xs font-semibold text-muted-foreground">SME Name</th>
                  <th className="text-left py-2 px-3 text-xs font-semibold text-muted-foreground">Ticket Size</th>
                  <th className="text-left py-2 px-3 text-xs font-semibold text-muted-foreground">Risk Band</th>
                  <th className="text-left py-2 px-3 text-xs font-semibold text-muted-foreground">Seasonality</th>
                  <th className="text-left py-2 px-3 text-xs font-semibold text-muted-foreground">Compliance</th>
                  <th className="text-right py-2 px-3 text-xs font-semibold text-muted-foreground"></th>
                </tr>
              </thead>
              <tbody>
                {smeList.map((sme, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                    <td className="py-3 px-3 font-medium text-foreground">{sme.name}</td>
                    <td className="py-3 px-3 text-muted-foreground">{sme.ticket}</td>
                    <td className="py-3 px-3">
                      <span className={`badge-status text-[10px] font-semibold ${
                        sme.risk === "A" ? "bg-success/10 text-success" :
                        sme.risk === "C" ? "bg-destructive/10 text-destructive" :
                        "bg-primary/10 text-primary"
                      }`}>{sme.risk}</span>
                    </td>
                    <td className="py-3 px-3 text-muted-foreground">{sme.seasonality}/100</td>
                    <td className="py-3 px-3 text-muted-foreground">{sme.compliance}%</td>
                    <td className="py-3 px-3 text-right">
                      {sme.name === "Rajesh Light House Traders" ? (
                        <Link to="/partner/cohorts/delhi-festive-2026/sme/rajesh" className="text-xs font-semibold text-primary hover:underline">
                          View Profile →
                        </Link>
                      ) : (
                        <span className="text-xs text-muted-foreground">View Profile →</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default CohortCreditDashboard;
