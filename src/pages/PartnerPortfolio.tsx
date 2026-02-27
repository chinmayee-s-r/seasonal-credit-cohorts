import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, Layers, Percent, ShieldCheck, Target } from "lucide-react";

const BLUE_SHADES = ["#1e3a5f", "#2563eb", "#60a5fa"];

const kpiCards = [
  { label: "Total Active Exposure", value: "₹8.7 Cr", icon: TrendingUp },
  { label: "Active SMEs", value: "34", icon: Users },
  { label: "Active Cohorts", value: "4", icon: Layers },
  { label: "Weighted Avg Yield", value: "15.0%", icon: Percent },
  { label: "Weighted Risk Score", value: "74", icon: ShieldCheck },
  { label: "Portfolio IRR (Projected)", value: "16.8%", icon: Target },
];

const cohortExposure = [
  { name: "Delhi Festive Retail Cohort 2026", year: "2026", committed: "₹3.5 Cr", deployed: "₹3.1 Cr", outstanding: "₹2.8 Cr", yield: "15.4%", delinquency: "2.1%" },
  { name: "Mumbai Wedding Supply Cohort 2025", year: "2025", committed: "₹2.8 Cr", deployed: "₹2.6 Cr", outstanding: "₹1.4 Cr", yield: "14.8%", delinquency: "3.2%" },
  { name: "Jaipur Tourism Retail Cohort 2025", year: "2025", committed: "₹1.5 Cr", deployed: "₹1.3 Cr", outstanding: "₹0.6 Cr", yield: "15.1%", delinquency: "1.8%" },
  { name: "Chennai Harvest Agri Cohort 2024", year: "2024", committed: "₹2.2 Cr", deployed: "₹2.0 Cr", outstanding: "₹0.2 Cr", yield: "14.5%", delinquency: "4.1%" },
];

const riskPieData = [
  { name: "Band A", value: 35, color: BLUE_SHADES[0] },
  { name: "Band B", value: 45, color: BLUE_SHADES[1] },
  { name: "Band C", value: 20, color: BLUE_SHADES[2] },
];

const capitalAllocation = [
  { name: "Portfolio", allocated: 8.7, repaid: 4.2, outstanding: 4.5 },
];

const vintageData = [
  { name: "Delhi Festive Retail Cohort 2026", year: "2026", deployed: "₹3.1 Cr", onTime: "94%", dpd30: "4.2%", dpd60: "1.5%", lossRate: "0.3%" },
  { name: "Mumbai Wedding Supply Cohort 2025", year: "2025", deployed: "₹2.6 Cr", onTime: "91%", dpd30: "5.8%", dpd60: "2.4%", lossRate: "0.8%" },
  { name: "Jaipur Tourism Retail Cohort 2025", year: "2025", deployed: "₹1.3 Cr", onTime: "96%", dpd30: "2.8%", dpd60: "0.9%", lossRate: "0.1%" },
  { name: "Chennai Harvest Agri Cohort 2024", year: "2024", deployed: "₹2.0 Cr", onTime: "88%", dpd30: "7.1%", dpd60: "3.5%", lossRate: "1.4%" },
];

const repaymentTrend = [
  { month: "Jan", rate: 92 }, { month: "Feb", rate: 93 }, { month: "Mar", rate: 91 },
  { month: "Apr", rate: 94 }, { month: "May", rate: 93 }, { month: "Jun", rate: 95 },
  { month: "Jul", rate: 90 }, { month: "Aug", rate: 87 }, { month: "Sep", rate: 86 },
  { month: "Oct", rate: 96 }, { month: "Nov", rate: 97 }, { month: "Dec", rate: 95 },
];

const defaultComparison = [
  { type: "Flat EMI Cohorts", rate: 8.2 },
  { type: "Step-Up EMI Cohorts", rate: 5.6 },
];

const seasonalHeatmap = [
  { month: "Mar", stress: 20, repayment: 92 }, { month: "Apr", stress: 25, repayment: 94 },
  { month: "May", stress: 30, repayment: 93 }, { month: "Jun", stress: 35, repayment: 95 },
  { month: "Jul", stress: 55, repayment: 90 }, { month: "Aug", stress: 85, repayment: 87 },
  { month: "Sep", stress: 80, repayment: 86 }, { month: "Oct", stress: 15, repayment: 96 },
  { month: "Nov", stress: 10, repayment: 97 }, { month: "Dec", stress: 20, repayment: 95 },
  { month: "Jan", stress: 25, repayment: 92 }, { month: "Feb", stress: 22, repayment: 93 },
];

const getStressColor = (stress: number) => {
  if (stress >= 70) return "bg-red-500/80";
  if (stress >= 50) return "bg-orange-400/70";
  if (stress >= 30) return "bg-yellow-300/60";
  return "bg-blue-100/60";
};

const PartnerPortfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-8 space-y-10">
        {/* Page Header */}
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">Partner Portfolio Overview</h1>
          <p className="text-sm text-muted-foreground mt-1">Performance and exposure across active and past seasonal cohorts.</p>
        </div>

        {/* Section 1 — Current Exposure Snapshot */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Current Exposure Snapshot</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {kpiCards.map((kpi) => (
              <Card key={kpi.label} className="p-4 space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <kpi.icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{kpi.label}</span>
                </div>
                <p className="text-xl font-bold text-foreground">{kpi.value}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 2 — Active Lending Breakdown */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Active Lending Breakdown</h2>

          {/* Cohort Exposure Table */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Cohort Exposure</h3>
            <div className="border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30">
                    <TableHead>Cohort Name</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Capital Committed</TableHead>
                    <TableHead>Capital Deployed</TableHead>
                    <TableHead>Outstanding</TableHead>
                    <TableHead>Weighted Yield</TableHead>
                    <TableHead>Delinquency %</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cohortExposure.map((c) => (
                    <TableRow key={c.name} className="cursor-pointer hover:bg-muted/30">
                      <TableCell className="font-medium text-foreground">{c.name}</TableCell>
                      <TableCell>{c.year}</TableCell>
                      <TableCell>{c.committed}</TableCell>
                      <TableCell>{c.deployed}</TableCell>
                      <TableCell>{c.outstanding}</TableCell>
                      <TableCell>{c.yield}</TableCell>
                      <TableCell>{c.delinquency}</TableCell>
                      <TableCell>
                        <span className="text-xs text-primary font-medium cursor-pointer hover:underline">View Details</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Risk Pie + Capital Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Risk Distribution Pie */}
            <Card className="p-5">
              <h3 className="text-sm font-semibold text-foreground mb-4">Risk Distribution — Active Portfolio</h3>
              <div className="h-52">
                <ChartContainer config={{ bandA: { label: "Band A", color: BLUE_SHADES[0] }, bandB: { label: "Band B", color: BLUE_SHADES[1] }, bandC: { label: "Band C", color: BLUE_SHADES[2] } }} className="h-full">
                  <PieChart>
                    <Pie data={riskPieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={2}>
                      {riskPieData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ChartContainer>
              </div>
              <div className="flex justify-center gap-5 mt-3">
                {riskPieData.map((b) => (
                  <div key={b.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: b.color }} />
                    {b.name}: {b.value}%
                  </div>
                ))}
              </div>
            </Card>

            {/* Capital Allocation Bar */}
            <Card className="p-5">
              <h3 className="text-sm font-semibold text-foreground mb-4">Capital Allocation</h3>
              <div className="h-52">
                <ChartContainer config={{ allocated: { label: "Deployed", color: BLUE_SHADES[0] }, repaid: { label: "Repaid", color: BLUE_SHADES[1] }, outstanding: { label: "Outstanding", color: BLUE_SHADES[2] } }} className="h-full">
                  <BarChart data={capitalAllocation} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" domain={[0, 10]} tickFormatter={(v) => `₹${v} Cr`} />
                    <YAxis type="category" dataKey="name" hide />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="repaid" stackId="a" fill={BLUE_SHADES[1]} radius={[4, 0, 0, 4]} />
                    <Bar dataKey="outstanding" stackId="a" fill={BLUE_SHADES[2]} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ChartContainer>
              </div>
              <div className="flex justify-center gap-5 mt-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: BLUE_SHADES[1] }} />Repaid: ₹4.2 Cr</div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: BLUE_SHADES[2] }} />Outstanding: ₹4.5 Cr</div>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 3 — Repayment Performance */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Repayment &amp; Vintage Performance</h2>

          {/* Vintage Table */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Cohort Vintage Analysis</h3>
            <div className="border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30">
                    <TableHead>Cohort Name</TableHead>
                    <TableHead>Vintage Year</TableHead>
                    <TableHead>Capital Deployed</TableHead>
                    <TableHead>On-Time %</TableHead>
                    <TableHead>30+ DPD %</TableHead>
                    <TableHead>60+ DPD %</TableHead>
                    <TableHead>Loss Rate %</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vintageData.map((v) => (
                    <TableRow key={v.name}>
                      <TableCell className="font-medium text-foreground">{v.name}</TableCell>
                      <TableCell>{v.year}</TableCell>
                      <TableCell>{v.deployed}</TableCell>
                      <TableCell className="text-emerald-600 font-medium">{v.onTime}</TableCell>
                      <TableCell>{v.dpd30}</TableCell>
                      <TableCell>{v.dpd60}</TableCell>
                      <TableCell className="text-destructive font-medium">{v.lossRate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Repayment Trend Line */}
            <Card className="p-5">
              <h3 className="text-sm font-semibold text-foreground mb-4">On-Time Repayment Trend</h3>
              <div className="h-56">
                <ChartContainer config={{ rate: { label: "Repayment %", color: BLUE_SHADES[1] } }} className="h-full">
                  <LineChart data={repaymentTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                    <YAxis domain={[80, 100]} tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="rate" stroke={BLUE_SHADES[1]} strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                </ChartContainer>
              </div>
            </Card>

            {/* Default Rate Comparison */}
            <Card className="p-5">
              <h3 className="text-sm font-semibold text-foreground mb-4">Default Rate Comparison</h3>
              <div className="h-56">
                <ChartContainer config={{ rate: { label: "Default Rate %", color: BLUE_SHADES[0] } }} className="h-full">
                  <BarChart data={defaultComparison}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" tick={{ fontSize: 10 }} />
                    <YAxis domain={[0, 12]} tick={{ fontSize: 11 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
                      {defaultComparison.map((_, i) => (
                        <Cell key={i} fill={BLUE_SHADES[i]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">Average Default Reduction: <span className="font-semibold text-foreground">31.7%</span></p>
            </Card>
          </div>
        </section>

        {/* Section 4 — Seasonal Performance Insight */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Seasonal Performance Insight</h2>
          <Card className="p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4">Seasonal Cash Stress Map</h3>
            <div className="grid grid-cols-12 gap-1.5 mb-4">
              {seasonalHeatmap.map((m) => (
                <div key={m.month} className="text-center">
                  <div className={`h-14 rounded ${getStressColor(m.stress)} flex items-center justify-center`}>
                    <span className="text-[10px] font-semibold text-foreground/80">{m.stress}%</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground mt-1 block">{m.month}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-red-500/80" /> High Stress</span>
              <span className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-orange-400/70" /> Moderate</span>
              <span className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-yellow-300/60" /> Mild</span>
              <span className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-blue-100/60" /> Low</span>
            </div>
            <div className="bg-muted/30 border border-border rounded-lg p-3">
              <p className="text-xs text-muted-foreground italic">"Structured repayment aligned to peak cycles improved collection efficiency."</p>
            </div>
          </Card>
        </section>

        {/* Section 5 — Thin-File Performance */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Thin-File SME Segment Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 space-y-1">
              <span className="text-xs text-muted-foreground font-medium">Thin-File Share of Portfolio</span>
              <p className="text-xl font-bold text-foreground">42%</p>
            </Card>
            <Card className="p-4 space-y-1">
              <span className="text-xs text-muted-foreground font-medium">On-Time Repayment (Thin-File)</span>
              <p className="text-xl font-bold text-emerald-600">91.3%</p>
            </Card>
            <Card className="p-4 space-y-1">
              <span className="text-xs text-muted-foreground font-medium">Default Rate vs Prime SMEs</span>
              <p className="text-xl font-bold text-foreground">+0.8%</p>
              <p className="text-[10px] text-muted-foreground">Marginal delta demonstrates inclusion viability</p>
            </Card>
          </div>
        </section>

        {/* Section 6 — Portfolio Analytics Summary */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Portfolio Analytics Summary</h2>
          <Card className="p-5">
            <ul className="space-y-3">
              {[
                "Seasonality-aligned EMI reduced stress defaults by 28%",
                "Cohort underwriting reduced underwriting time by 45%",
                "Capital deployment efficiency improved by 33%",
                "Thin-file inclusion expanded addressable market by 42% with marginal risk delta",
              ].map((insight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {insight}
                </li>
              ))}
            </ul>
          </Card>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PartnerPortfolio;
