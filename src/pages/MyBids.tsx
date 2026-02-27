import Header from "@/components/Header";
import { Clock, CheckCircle2, XCircle } from "lucide-react";

const bids = [
  {
    cohort: "Delhi Festive Retail Cohort 2026",
    amount: "₹3.5 Cr",
    interestRate: "15.4%",
    repaymentType: "Step-Up EMI",
    status: "Selected",
    submittedDate: "20 Jan 2026",
  },
  {
    cohort: "Mumbai Wedding Supply Cohort 2025",
    amount: "₹2.8 Cr",
    interestRate: "14.8%",
    repaymentType: "Moratorium + Step-Up",
    status: "Selected",
    submittedDate: "15 Nov 2024",
  },
  {
    cohort: "Jaipur Tourism Retail Cohort 2025",
    amount: "₹1.5 Cr",
    interestRate: "15.1%",
    repaymentType: "Step-Up EMI",
    status: "Selected",
    submittedDate: "10 Nov 2024",
  },
  {
    cohort: "Chennai Harvest Agri Cohort 2024",
    amount: "₹2.2 Cr",
    interestRate: "14.5%",
    repaymentType: "Revenue-Linked",
    status: "Selected",
    submittedDate: "18 Jun 2024",
  },
];

const statusConfig = {
  Selected: { icon: CheckCircle2, color: "bg-success/10 text-success" },
  Pending: { icon: Clock, color: "bg-warning/10 text-warning" },
  Rejected: { icon: XCircle, color: "bg-destructive/10 text-destructive" },
};

const MyBids = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        <h1 className="text-2xl font-display font-bold text-foreground mb-1">My Bids</h1>
        <p className="text-sm text-muted-foreground mb-8">Track all submitted bids and their status.</p>

        <div className="space-y-4">
          {bids.map((bid) => {
            const config = statusConfig[bid.status as keyof typeof statusConfig];
            const StatusIcon = config.icon;
            return (
              <div key={bid.cohort} className="card-elevated">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="text-base font-display font-bold text-foreground mb-1">{bid.cohort}</h3>
                    <p className="text-xs text-muted-foreground">Submitted {bid.submittedDate}</p>
                  </div>
                  <span className={`flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${config.color}`}>
                    <StatusIcon className="w-3.5 h-3.5" />
                    {bid.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[10px] text-muted-foreground mb-0.5">Bid Amount</p>
                    <p className="text-sm font-display font-bold text-foreground">{bid.amount}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground mb-0.5">Interest Rate</p>
                    <p className="text-sm font-display font-bold text-foreground">{bid.interestRate}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground mb-0.5">Repayment</p>
                    <p className="text-sm font-display font-bold text-foreground">{bid.repaymentType}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyBids;
