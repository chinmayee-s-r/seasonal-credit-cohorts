import { Link } from "react-router-dom";
import { ArrowRight, Users, BarChart3, Calendar, Shield, FileCheck, Building2, TrendingUp, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const steps = [
  {
    icon: Users,
    number: "01",
    title: "Join a seasonal business group",
    description: "Get matched with businesses sharing similar seasonal patterns — without exposing your data.",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Compare lender offers",
    description: "Receive structured bids from verified NBFCs competing to serve your cohort.",
  },
  {
    icon: Calendar,
    number: "03",
    title: "Choose repayment that fits your sales",
    description: "Select flexible EMI structures — moratorium, step-up, or revenue-linked.",
  },
];

const trustPoints = [
  { icon: Shield, text: "No peer visibility of your data" },
  { icon: Users, text: "No joint liability" },
  { icon: FileCheck, text: "Loan signed directly with lender" },
  { icon: Calendar, text: "Flexible EMI based on seasonality" },
  { icon: Building2, text: "Fully compliant with Indian lending regulations" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="section-container pt-10 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-4">
            Be ready for the busy season without cash pressure.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Get working capital before demand rises and repay when business is strong.
          </p>
          <p className="text-base text-muted-foreground/80 font-normal max-w-2xl mx-auto mt-1.5">
            Built for India's seasonal SMEs.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          <Link
            to="/auth?role=member"
            className="card-prominent group hover:border-primary/20 transition-all duration-300 relative"
          >
            <div className="absolute top-4 right-4">
              <span className="badge-status bg-accent/10 text-accent-foreground text-[10px] font-semibold">Recommended</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-2">I Run a Business</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Get working capital before peak season with flexible repayment.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
              Continue as Member
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            to="/auth?role=partner"
            className="card-institutional group hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
              <TrendingUp className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-2">I Provide Loans</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Access structured seasonal demand and bid on grouped SME capital.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground group-hover:text-foreground group-hover:gap-3 transition-all">
              Continue as Partner
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* 3-Step Explainer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="card-institutional group hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground font-display">{step.number}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-secondary/50 py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Built for Seasonal Businesses in India
            </h2>
            <p className="text-muted-foreground">
              Institutional-grade infrastructure with borrower-first design principles.
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-4 bg-background rounded-lg px-5 py-4 border border-border">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
