import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Upload, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";

const MemberOnboarding = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/member/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-12">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                  s <= step ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                }`}>
                  {s < step ? <CheckCircle2 className="w-4 h-4" /> : s}
                </div>
                <span className="text-xs text-muted-foreground hidden sm:block">
                  {s === 1 ? "Basic Details" : s === 2 ? "Financials" : "Loan Requirement"}
                </span>
                {s < 3 && <div className={`flex-1 h-px ${s < step ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-display font-bold text-foreground mb-1">Basic Details</h2>
              <p className="text-sm text-muted-foreground mb-8">Tell us about your business</p>
              <div className="space-y-4">
                {[
                  { label: "Business Name", placeholder: "Rajesh Light House Traders", defaultValue: "Rajesh Light House Traders" },
                  { label: "GST Number", placeholder: "07AXXPX1234X1ZX", defaultValue: "07AXXPX1234X1ZX" },
                  { label: "PAN", placeholder: "AXXPX1234X", defaultValue: "AXXPX1234X" },
                  { label: "Industry", placeholder: "Festive & Decorative Lighting", defaultValue: "Festive & Decorative Lighting" },
                  { label: "Peak Months", placeholder: "October – November", defaultValue: "October – November" },
                  { label: "Location", placeholder: "Chandni Chowk, Delhi", defaultValue: "Chandni Chowk, Delhi" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                    <input
                      defaultValue={field.defaultValue}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-display font-bold text-foreground mb-1">Financial Upload</h2>
              <p className="text-sm text-muted-foreground mb-8">Upload your business financial documents</p>
              <div className="space-y-4">
                {["Bank Statement (12 months)", "GST Summary", "Inventory Details", "Supplier Credit Terms"].map((doc) => (
                  <div key={doc} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
                    <span className="text-sm font-medium text-foreground">{doc}</span>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary text-muted-foreground text-xs font-medium hover:text-foreground transition-colors">
                      <Upload className="w-3.5 h-3.5" />
                      Upload
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-display font-bold text-foreground mb-1">Loan Requirement</h2>
              <p className="text-sm text-muted-foreground mb-8">Define your capital needs</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Working Capital Required</label>
                  <input defaultValue="₹60,00,000" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Optional Term Loan</label>
                  <input defaultValue="₹25,00,000" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Tenure</label>
                  <input defaultValue="18 months" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Purpose</label>
                  <input defaultValue="Pre-season inventory build" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all" />
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={() => {
                if (step === 3) handleComplete();
                else setStep((s) => s + 1);
              }}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {step === 3 ? "Complete Setup" : "Continue"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberOnboarding;
