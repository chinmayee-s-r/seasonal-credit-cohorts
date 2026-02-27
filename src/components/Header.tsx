import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">C</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground tracking-tight">clustr</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/cohorts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cohorts</Link>
          <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
          <Link to="/business-model" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Business Model</Link>
          <Link to="/analytics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Analytics</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/auth?role=member" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
            Sign In
          </Link>
          <Link to="/auth?role=partner" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Partner Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
