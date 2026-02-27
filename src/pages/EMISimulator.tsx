import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const baseData = [
  { month: "Apr", cashFlow: 8, standardEMI: 5, moratoriumEMI: 0, stepUpEMI: 2, revenueEMI: 2.5 },
  { month: "May", cashFlow: 7, standardEMI: 5, moratoriumEMI: 0, stepUpEMI: 2, revenueEMI: 2.2 },
  { month: "Jun", cashFlow: 5, standardEMI: 5, moratoriumEMI: 0, stepUpEMI: 2, revenueEMI: 1.6 },
  { month: "Jul", cashFlow: 6, standardEMI: 5, moratoriumEMI: 0, stepUpEMI: 3, revenueEMI: 1.9 },
  { month: "Aug", cashFlow: 4, standardEMI: 5, moratoriumEMI: 0, stepUpEMI: 3, revenueEMI: 1.3 },
  { month: "Sep", cashFlow: 6, standardEMI: 5, moratoriumEMI: 0, stepUpEMI: 3, revenueEMI: 1.9 },
  { month: "Oct", cashFlow: 18.6, standardEMI: 5, moratoriumEMI: 8, stepUpEMI: 8, revenueEMI: 5.9 },
  { month: "Nov", cashFlow: 16, standardEMI: 5, moratoriumEMI: 8, stepUpEMI: 8, revenueEMI: 5.1 },
  { month: "Dec", cashFlow: 12, standardEMI: 5, moratoriumEMI: 7, stepUpEMI: 6, revenueEMI: 3.8 },
  { month: "Jan", cashFlow: 10, standardEMI: 5, moratoriumEMI: 6, stepUpEMI: 5, revenueEMI: 3.2 },
  { month: "Feb", cashFlow: 9, standardEMI: 5, moratoriumEMI: 6, stepUpEMI: 4, revenueEMI: 2.9 },
  { month: "Mar", cashFlow: 7, standardEMI: 5, moratoriumEMI: 5, stepUpEMI: 3, revenueEMI: 2.2 },
];

const emiTypes = [
  { key: "standardEMI", label: "Standard EMI", description: "Fixed monthly payments regardless of revenue cycle." },
  { key: "moratoriumEMI", label: "Moratorium", description: "No payments April–September. Higher payments during peak season." },
  { key: "stepUpEMI", label: "Step-up", description: "Low payments off-season, increasing as revenue peaks in October–November." },
  { key: "revenueEMI", label: "Revenue-linked", description: "EMI proportional to monthly cash flow with a capped floor." },
];

const EMISimulator = () => {
  const [selectedType, setSelectedType] = useState("moratoriumEMI");

  const chartData = baseData.map((d) => ({
    month: d.month,
    "Cash Flow (₹L)": d.cashFlow,
    "EMI (₹L)": (d as any)[selectedType],
  }));

  const selected = emiTypes.find((t) => t.key === selectedType)!;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-display font-bold text-foreground">EMI Simulator</h1>
          <p className="text-sm text-muted-foreground">Compare repayment structures against your cash flow pattern</p>
        </div>

        {/* Toggle */}
        <div className="flex flex-wrap gap-2 mb-8">
          {emiTypes.map((type) => (
            <button
              key={type.key}
              onClick={() => setSelectedType(type.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedType === type.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Chart */}
        <div className="card-elevated mb-8">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 91%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(220, 10%, 46%)" }} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(220, 10%, 46%)" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(220, 15%, 91%)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="Cash Flow (₹L)" fill="hsl(210, 80%, 52%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="EMI (₹L)" fill="hsl(38, 92%, 50%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Explanation */}
        <div className="card-institutional">
          <h3 className="font-display font-semibold text-foreground mb-2">{selected.label}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{selected.description}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-2">
            Higher repayment during October–November reduces pressure in August–September, aligning your outflows with actual revenue.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EMISimulator;
