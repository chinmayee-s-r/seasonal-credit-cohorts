import { Link } from "react-router-dom";
import { ArrowRight, Users, MapPin, IndianRupee, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cohorts = [
  {
    name: "Delhi Festive Retail Cohort 2026",
    industry: "Festive & Decorative Retail",
    location: "Delhi NCR",
    target: "₹5 Crore",
    filled: 82,
    members: "9/12",
    closing: "15 Aug 2026",
    emiType: "Step-up EMI aligned to Diwali sales",
    suitability: 92,
  },
  {
    name: "Mumbai Wedding Season Cohort 2026",
    industry: "Wedding Services & Textiles",
    location: "Mumbai",
    target: "₹8 Crore",
    filled: 65,
    members: "7/14",
    closing: "30 Sep 2026",
    emiType: "Revenue-linked EMI (Nov–Feb peak)",
    suitability: 78,
  },
  {
    name: "Jaipur Tourism Cohort 2026",
    industry: "Tourism & Hospitality",
    location: "Rajasthan",
    target: "₹3.5 Crore",
    filled: 90,
    members: "11/12",
    closing: "01 Aug 2026",
    emiType: "Moratorium Jun–Sep, Step-up Oct–Mar",
    suitability: 71,
  },
  {
    name: "Kolkata Durga Puja Artisans 2026",
    industry: "Art & Crafts Manufacturing",
    location: "Kolkata",
    target: "₹2 Crore",
    filled: 50,
    members: "5/10",
    closing: "15 Jul 2026",
    emiType: "Moratorium until September",
    suitability: 65,
  },
];

const CohortDiscovery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-display font-bold text-foreground">Cohort Discovery</h1>
          <p className="text-sm text-muted-foreground">Browse seasonal business cohorts matching your profile. No financial data of other SMEs is visible.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cohorts.map((cohort) => (
            <div key={cohort.name} className="card-elevated hover:border-primary/15 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">{cohort.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{cohort.location}</span>
                    <span>{cohort.industry}</span>
                  </div>
                </div>
                <span className={`badge-status text-[10px] font-semibold ${
                  cohort.suitability >= 85 ? "bg-success/10 text-success" : cohort.suitability >= 70 ? "bg-info/10 text-info" : "bg-muted text-muted-foreground"
                }`}>
                  {cohort.suitability}% match
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <IndianRupee className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-muted-foreground">Target:</span>
                  <span className="font-semibold text-foreground">{cohort.target}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-muted-foreground">Members:</span>
                  <span className="font-semibold text-foreground">{cohort.members}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-muted-foreground">Closes:</span>
                  <span className="font-semibold text-foreground">{cohort.closing}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">Pool filled</span>
                  <span className="font-semibold text-foreground">{cohort.filled}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full transition-all" style={{ width: `${cohort.filled}%` }} />
                </div>
              </div>

              <div className="text-xs text-muted-foreground mb-4 p-3 bg-secondary/50 rounded-lg">
                <span className="font-medium text-foreground">Repayment:</span> {cohort.emiType}
              </div>

              <Link to="/offers" className="flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                View Offers <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CohortDiscovery;
