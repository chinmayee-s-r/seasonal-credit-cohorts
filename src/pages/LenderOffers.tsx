import { useState } from "react";
import { CheckCircle2, ArrowRight, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const offers = [
  {
    partner: "Seasonal Capital NBFC",
    verified: true,
    rate: "14.5%",
    tenure: "18 months",
    fee: "1.5%",
    disbursement: "7 business days",
    structure: "Moratorium until September",
    bestMatch: true,
  },
  {
    partner: "FlexFin India",
    verified: true,
    rate: "15.2%",
    tenure: "18 months",
    fee: "1.75%",
    disbursement: "5 business days",
    structure: "Step-up EMI post October",
    bestMatch: false,
  },
  {
    partner: "PeakLend Financial",
    verified: true,
    rate: "16.0%",
    tenure: "24 months",
    fee: "1.25%",
    disbursement: "10 business days",
    structure: "Revenue-linked EMI (capped floor EMI)",
    bestMatch: false,
  },
];

const LenderOffers = () => {
  const [viewMode, setViewMode] = useState<"cards" | "compare">("cards");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Lender Offers</h1>
            <p className="text-sm text-muted-foreground">Delhi Festive Retail Cohort 2026</p>
          </div>
          <div className="flex bg-secondary rounded-lg p-1">
            <button
              onClick={() => setViewMode("cards")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${viewMode === "cards" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"}`}
            >Cards</button>
            <button
              onClick={() => setViewMode("compare")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${viewMode === "compare" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"}`}
            >Compare</button>
          </div>
        </div>

        {viewMode === "cards" ? (
          <div className="space-y-4">
            {offers.map((offer) => (
              <div key={offer.partner} className={`card-elevated ${offer.bestMatch ? "border-2 border-primary/15" : ""}`}>
                {offer.bestMatch && (
                  <span className="badge-status bg-success/10 text-success text-[10px] font-semibold mb-3 inline-block">
                    Best Match Based on Your Sales Pattern
                  </span>
                )}
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-foreground">{offer.partner}</h3>
                      {offer.verified && <Shield className="w-4 h-4 text-success" />}
                    </div>
                    <p className="text-xs text-muted-foreground">Verified NBFC</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-display font-bold text-foreground">{offer.rate}</span>
                    <p className="text-xs text-muted-foreground">per annum</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-border">
                  <div><span className="text-xs text-muted-foreground block">Tenure</span><span className="text-sm font-semibold text-foreground">{offer.tenure}</span></div>
                  <div><span className="text-xs text-muted-foreground block">Processing Fee</span><span className="text-sm font-semibold text-foreground">{offer.fee}</span></div>
                  <div><span className="text-xs text-muted-foreground block">Disbursement</span><span className="text-sm font-semibold text-foreground">{offer.disbursement}</span></div>
                  <div><span className="text-xs text-muted-foreground block">Repayment</span><span className="text-sm font-semibold text-foreground">{offer.structure}</span></div>
                </div>
                <div className="mt-4 flex items-center justify-end">
                  <Link to="/emi-simulator" className="flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                    Simulate EMI <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Parameter</th>
                  {offers.map((o) => (
                    <th key={o.partner} className="text-left py-3 px-4 font-semibold text-foreground">{o.partner}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { label: "Interest Rate", key: "rate" },
                  { label: "Tenure", key: "tenure" },
                  { label: "Processing Fee", key: "fee" },
                  { label: "Disbursement", key: "disbursement" },
                  { label: "Repayment", key: "structure" },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="py-3 px-4 text-muted-foreground">{row.label}</td>
                    {offers.map((o) => (
                      <td key={o.partner} className="py-3 px-4 font-medium text-foreground">
                        {(o as any)[row.key]}
                        {row.key === "rate" && o.bestMatch && <CheckCircle2 className="w-3.5 h-3.5 text-success inline ml-2" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LenderOffers;
