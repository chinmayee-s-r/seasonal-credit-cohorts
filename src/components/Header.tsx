import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, Settings, User, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  const { isLoggedIn, role, email, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">C</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground tracking-tight">clustr</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {!isLoggedIn && (
            <>
              <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
              <Link to="/business-model" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Business Model</Link>
            </>
          )}

          {isLoggedIn && role === "member" && (
            <>
              <Link to="/member/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/member/analytics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Analytics</Link>
              <Link to="/cohorts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cohorts</Link>
              <Link to="/offers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Approved Offers</Link>
              <Link to="/member/loans" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Loans</Link>
              <Link to="/member/profile" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Profile</Link>
            </>
          )}

          {isLoggedIn && role === "partner" && (
            <>
              <Link to="/partner/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Partner Dashboard</Link>
              <Link to="/partner/cohorts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cohorts to Bid</Link>
              <Link to="/partner/bids" className="text-sm text-muted-foreground hover:text-foreground transition-colors">My Bids</Link>
              <Link to="/partner/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link>
            </>
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {!isLoggedIn && (
            <>
              <Link to="/auth?role=member" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                Sign In
              </Link>
              <Link to="/auth?role=partner" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Partner Login
              </Link>
            </>
          )}

          {isLoggedIn && (
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-xs text-muted-foreground font-medium px-2.5 py-1 rounded-full bg-secondary">
                {role === "member" ? "Member" : "Partner"}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1.5 outline-none">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                      {email ? email[0].toUpperCase() : "U"}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium text-foreground truncate">{email}</p>
                    <p className="text-xs text-muted-foreground capitalize">{role}</p>
                  </div>
                  <DropdownMenuSeparator />
                  {role === "member" && (
                    <DropdownMenuItem onClick={() => navigate("/member/profile")} className="cursor-pointer">
                      <User className="w-4 h-4 mr-2" />
                      Settings
                    </DropdownMenuItem>
                  )}
                  {role === "partner" && (
                    <DropdownMenuItem onClick={() => navigate("/partner/dashboard")} className="cursor-pointer">
                      <Settings className="w-4 h-4 mr-2" />
                      Account
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive focus:text-destructive">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
