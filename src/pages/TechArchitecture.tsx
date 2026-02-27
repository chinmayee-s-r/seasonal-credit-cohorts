import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Server, Database, Brain, FileSearch, Shield, Cloud, ArrowRight } from "lucide-react";

const layers = [
  { icon: Server, label: "Frontend", tech: "React / Next.js", desc: "Responsive SPA with institutional-grade UI components" },
  { icon: Database, label: "Backend", tech: "Node.js", desc: "RESTful APIs with structured data pipelines" },
  { icon: Database, label: "Database", tech: "PostgreSQL", desc: "Relational storage for cohort, profile, and lending data" },
  { icon: Brain, label: "Risk Engine", tech: "Python-based", desc: "Cash flow analysis, seasonality detection, risk scoring" },
  { icon: FileSearch, label: "Bank Statement Parsing", tech: "OCR + ML extraction", desc: "Automated categorization from uploaded bank statements" },
  { icon: Shield, label: "Credit Scoring", tech: "Alternative data engine", desc: "GST compliance, inventory patterns, supplier credit signals" },
  { icon: Cloud, label: "Hosting", tech: "AWS", desc: "Auto-scaling infrastructure with SOC 2 compliance path" },
];

const TechArchitecture = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        <div className="mb-10">
          <h1 className="text-2xl font-display font-bold text-foreground">How It Works – Technical Architecture</h1>
          <p className="text-sm text-muted-foreground">System design overview for evaluation</p>
        </div>

        {/* Flow Diagram */}
        <div className="space-y-3 max-w-3xl mx-auto mb-12">
          {layers.map((layer, i) => (
            <div key={layer.label} className="animate-fade-in" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="card-institutional flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <layer.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-semibold text-foreground text-sm">{layer.label}</span>
                    <span className="text-xs text-muted-foreground px-2 py-0.5 bg-secondary rounded">{layer.tech}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{layer.desc}</p>
                </div>
              </div>
              {i < layers.length - 1 && (
                <div className="flex justify-center my-1">
                  <ArrowRight className="w-4 h-4 text-border rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Data Flow */}
        <div className="card-elevated max-w-3xl mx-auto">
          <h3 className="font-display font-semibold text-foreground mb-4">System Flow</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p><span className="font-semibold text-foreground">1.</span> SME submits profile → Bank statements parsed via OCR+ML</p>
            <p><span className="font-semibold text-foreground">2.</span> Seasonality engine calculates peak/off-peak ratio and cash crunch risk</p>
            <p><span className="font-semibold text-foreground">3.</span> Profile matched to optimal cohort based on industry, geography, and cycle</p>
            <p><span className="font-semibold text-foreground">4.</span> Cohort aggregated into Credit Profile Batch (no individual data exposed)</p>
            <p><span className="font-semibold text-foreground">5.</span> Partners receive batch metrics and submit structured bids</p>
            <p><span className="font-semibold text-foreground">6.</span> SME selects offer → Direct loan agreement with lender</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TechArchitecture;
