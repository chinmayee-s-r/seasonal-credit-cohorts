import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const initialRole = searchParams.get("role") || "member";
  const [role, setRole] = useState<"member" | "partner">(initialRole as "member" | "partner");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(role, email || (role === "member" ? "member@demo.com" : "partner@demo.com"));
    if (role === "member") {
      navigate("/member/profile");
    } else {
      navigate("/partner/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-display font-bold text-foreground mb-2">Sign in to Clustr</h1>
            <p className="text-sm text-muted-foreground">Access your seasonal lending platform</p>
          </div>

          {/* Role Toggle */}
          <div className="flex bg-secondary rounded-lg p-1 mb-8">
            <button
              onClick={() => setRole("member")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-medium transition-all ${
                role === "member" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              <Building2 className="w-4 h-4" />
              Member
            </button>
            <button
              onClick={() => setRole("partner")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-medium transition-all ${
                role === "partner" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              Partner
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === "member" ? "business@example.com" : "partner@nbfc.com"}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {role === "member" ? "Continue as Member" : "Continue as Partner"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Demo mode — no real authentication required. Click continue to proceed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
