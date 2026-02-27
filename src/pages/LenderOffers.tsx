import { useState } from "react";
import { CheckCircle2, XCircle, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type OfferStatus = "pending" | "accepted" | "declined";

interface Offer {
  id: string;
  lender: string;
  amount: string;
  rate: string;
  structure: string;
  tenure: string;
  status: OfferStatus;
}

const approvedOffers: Offer[] = [
  {
    id: "OFR-001",
    lender: "Seasonal Capital NBFC",
    amount: "₹52,00,000",
    rate: "15.0%",
    structure: "Step-Up EMI",
    tenure: "18 months",
    status: "pending",
  },
  {
    id: "OFR-002",
    lender: "FlexFin India",
    amount: "₹48,00,000",
    rate: "15.2%",
    structure: "Moratorium + Step-Up",
    tenure: "18 months",
    status: "pending",
  },
];

const LenderOffers = () => {
  const [offers, setOffers] = useState(approvedOffers);

  const handleAction = (id: string, action: "accepted" | "declined") => {
    setOffers((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: action } : o))
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-display font-bold text-foreground">Approved Offers</h1>
          <p className="text-sm text-muted-foreground mt-1">Delhi Festive Retail Cohort 2026</p>
        </div>

        {/* Info banner */}
        <div className="p-3 rounded-lg bg-primary/5 border border-primary/15 text-xs text-foreground mb-6 flex items-center gap-2">
          <Info className="w-4 h-4 text-primary shrink-0" />
          Offers are generated after lender capital commitment and eligibility review. Terms are non-negotiable at SME level.
        </div>

        <div className="space-y-4">
          {offers.map((offer) => (
            <div key={offer.id} className="card-elevated">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-foreground">{offer.lender}</h3>
                    {offer.status === "accepted" && (
                      <span className="badge-status bg-success/10 text-success text-[10px] font-semibold">Accepted</span>
                    )}
                    {offer.status === "declined" && (
                      <span className="badge-status bg-destructive/10 text-destructive text-[10px] font-semibold">Declined</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">Verified NBFC · Ref: {offer.id}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-display font-bold text-foreground">{offer.amount}</span>
                  <p className="text-xs text-muted-foreground">sanctioned amount</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-border">
                <div>
                  <span className="text-xs text-muted-foreground block">Interest Rate</span>
                  <span className="text-sm font-semibold text-foreground">{offer.rate}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Repayment Structure</span>
                  <span className="text-sm font-semibold text-foreground">{offer.structure}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Tenure</span>
                  <span className="text-sm font-semibold text-foreground">{offer.tenure}</span>
                </div>
              </div>

              {offer.status === "pending" && (
                <div className="mt-4 flex items-center justify-end gap-3">
                  <button
                    onClick={() => handleAction(offer.id, "declined")}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors"
                  >
                    <XCircle className="w-4 h-4" /> Decline
                  </button>
                  <button
                    onClick={() => handleAction(offer.id, "accepted")}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Accept
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LenderOffers;
