import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { Building2, FileCheck, Shield, Edit } from "lucide-react";

const documents = [
  { name: "GST Filing – Q3 2025", status: "Verified", date: "12 Dec 2025" },
  { name: "Bank Statement – Sep 2025", status: "Verified", date: "05 Oct 2025" },
  { name: "ITR – FY 2024-25", status: "Pending", date: "18 Jan 2026" },
  { name: "Business Registration", status: "Verified", date: "01 Aug 2024" },
];

const MemberProfile = () => {
  const { email } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-10">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground mb-1">Profile</h1>
            <p className="text-sm text-muted-foreground">Manage your business details and compliance.</p>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity">
            <Edit className="w-4 h-4" />
            Edit Information
          </button>
        </div>

        {/* Business Details */}
        <div className="card-elevated mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-lg font-display font-semibold text-foreground">Business Details</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Business Name", value: "Rajesh Light House Traders" },
              { label: "Email", value: email || "business@example.com" },
              { label: "Industry", value: "Decorative Lighting" },
              { label: "Location", value: "Chandni Chowk, Delhi" },
              { label: "Annual Revenue", value: "₹1.1 Cr" },
              { label: "Years in Operation", value: "8 years" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Score */}
        <div className="card-elevated mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-success" />
            </div>
            <div>
              <h2 className="text-lg font-display font-semibold text-foreground">Compliance Score</h2>
              <p className="text-xs text-muted-foreground">Based on document completeness and verification status</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-3xl font-display font-bold text-foreground">85%</div>
            <div className="flex-1">
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div className="bg-success h-2.5 rounded-full" style={{ width: "85%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Uploaded Documents */}
        <div className="card-elevated">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-muted-foreground" />
            </div>
            <h2 className="text-lg font-display font-semibold text-foreground">Uploaded Documents</h2>
          </div>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.name} className="flex items-center justify-between bg-secondary/30 rounded-lg px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">{doc.date}</p>
                </div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  doc.status === "Verified" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                }`}>
                  {doc.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
