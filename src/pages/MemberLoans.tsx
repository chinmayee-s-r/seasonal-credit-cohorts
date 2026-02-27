import Header from "@/components/Header";
import { IndianRupee, CheckCircle2, Clock, Calendar } from "lucide-react";

const activeLoans = [
  {
    id: "LN-2026-001",
    amount: "₹52,00,000",
    lender: "Seasonal Capital NBFC",
    status: "Disbursed",
    disbursedDate: "15 Jan 2026",
    nextEMI: "₹3,12,000 on 15 Mar 2026",
    remaining: "₹46,80,000",
  },
];

const repaymentSchedule = [
  { month: "Mar 2026", amount: "₹3,12,000", status: "Upcoming" },
  { month: "Apr 2026", amount: "₹3,12,000", status: "Upcoming" },
  { month: "May 2026", amount: "₹1,56,000", status: "Upcoming" },
  { month: "Jun 2026", amount: "₹1,56,000", status: "Upcoming" },
  { month: "Jul 2026", amount: "₹3,12,000", status: "Upcoming" },
  { month: "Aug 2026", amount: "₹3,12,000", status: "Upcoming" },
];

const MemberLoans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        <h1 className="text-2xl font-display font-bold text-foreground mb-1">Loans</h1>
        <p className="text-sm text-muted-foreground mb-8">Track your active loans and repayment schedule.</p>

        {/* Active Loans */}
        {activeLoans.map((loan) => (
          <div key={loan.id} className="card-elevated mb-6">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-muted-foreground">{loan.id}</span>
                  <span className="badge-status bg-success/10 text-success text-[10px] font-semibold">{loan.status}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">{loan.amount}</h3>
                <p className="text-sm text-muted-foreground">{loan.lender}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Outstanding</p>
                <p className="text-lg font-display font-bold text-foreground">{loan.remaining}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-secondary/50 rounded-lg px-4 py-3">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <div>
                  <p className="text-xs text-muted-foreground">Disbursed</p>
                  <p className="text-sm font-medium text-foreground">{loan.disbursedDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-secondary/50 rounded-lg px-4 py-3">
                <Clock className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Next EMI</p>
                  <p className="text-sm font-medium text-foreground">{loan.nextEMI}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Repayment Schedule */}
        <div className="mt-8">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-muted-foreground" />
            Upcoming EMI Timeline
          </h2>
          <div className="space-y-3">
            {repaymentSchedule.map((item) => (
              <div key={item.month} className="card-institutional flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-foreground">{item.month}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-display font-bold text-foreground">{item.amount}</span>
                  <span className="text-[10px] font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberLoans;
