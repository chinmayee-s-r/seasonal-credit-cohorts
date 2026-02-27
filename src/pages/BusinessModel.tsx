import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IndianRupee, BarChart3, Users, Shield } from "lucide-react";

const revenueStreams = [
  {
    icon: IndianRupee,
    title: "Platform Facilitation Fee",
    description: "1–2% fee from lender on successful loan disbursement through cohort matching.",
    tag: "Primary Revenue",
  },
  {
    icon: BarChart3,
    title: "Member Subscription",
    description: "Subscription tier for borrowers to build standardized financial documentation, provide business analytics and visibility to top tier lenders.",
    tag: "Recurring Revenue",
  },
  {
    icon: Users,
    title: "Cohort Creation Fee",
    description: "Fee for trade associations and industry bodies to create custom cohorts for their member base.",
    tag: "B2B Revenue",
  },
];

const BusinessModel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h1 className="text-2xl font-display font-bold text-foreground">Business Model</h1>
            <p className="text-sm text-muted-foreground">Revenue architecture designed for sustainable, regulation-compliant growth</p>
          </div>

          <div className="space-y-4">
            {revenueStreams.map((stream) => (
              <div key={stream.title} className="card-elevated">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <stream.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-semibold text-foreground">{stream.title}</h3>
                      <span className="badge-status bg-secondary text-muted-foreground text-[10px]">{stream.tag}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stream.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessModel;
