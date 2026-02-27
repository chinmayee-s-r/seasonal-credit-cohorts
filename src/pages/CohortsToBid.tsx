import Header from "@/components/Header";
import { Users, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const openCohorts = [
  {
    name: "Delhi Festive Retail Cohort 2026",
    members: 12,
    capitalPool: "₹2.4 Cr",
    seasonalityIndex: "High (2.9x)",
    complianceScore: "82%",
    region: "Delhi NCR",
  },
  {
    name: "Mumbai Wedding Season Cohort",
    members: 8,
    capitalPool: "₹1.8 Cr",
    seasonalityIndex: "Medium (2.1x)",
    complianceScore: "76%",
    region: "Mumbai",
  },
  {
    name: "Jaipur Textile Export Cohort",
    members: 15,
    capitalPool: "₹3.6 Cr",
    seasonalityIndex: "High (3.2x)",
    complianceScore: "88%",
    region: "Rajasthan",
  },
  {
    name: "South India Harvest Finance Cohort",
    members: 10,
    capitalPool: "₹2.0 Cr",
    seasonalityIndex: "Medium (1.8x)",
    complianceScore: "71%",
    region: "Tamil Nadu",
  },
];

const CohortsToBid = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        <h1 className="text-2xl font-display font-bold text-foreground mb-1">Cohorts to Bid</h1>
        <p className="text-sm text-muted-foreground mb-8">Open cohorts available for capital deployment.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {openCohorts.map((cohort) => (
            <div key={cohort.name} className="card-elevated hover:border-primary/20 transition-all cursor-pointer"
              onClick={() => cohort.name === "Delhi Festive Retail Cohort 2026" && navigate("/partner/cohorts/delhi-festive-2026")}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-base font-display font-bold text-foreground mb-1">{cohort.name}</h3>
                  <span className="text-xs text-muted-foreground">{cohort.region}</span>
                </div>
                <span className="badge-status bg-primary/10 text-primary text-[10px] font-semibold">Open</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-muted-foreground" />
                  <div>
                    <p className="text-[10px] text-muted-foreground">Members</p>
                    <p className="text-sm font-semibold text-foreground">{cohort.members}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />
                  <div>
                    <p className="text-[10px] text-muted-foreground">Capital Pool</p>
                    <p className="text-sm font-semibold text-foreground">{cohort.capitalPool}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />
                  <div>
                    <p className="text-[10px] text-muted-foreground">Seasonality</p>
                    <p className="text-sm font-semibold text-foreground">{cohort.seasonalityIndex}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-muted-foreground" />
                  <div>
                    <p className="text-[10px] text-muted-foreground">Compliance</p>
                    <p className="text-sm font-semibold text-foreground">{cohort.complianceScore}</p>
                  </div>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                Place Bid
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CohortsToBid;
