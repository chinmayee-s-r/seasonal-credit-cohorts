import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">C</span>
              </div>
              <span className="font-display font-bold text-xl">clustr</span>
            </div>
            <p className="text-primary-foreground/70 text-sm max-w-md leading-relaxed">
              CLUSTERING enables structured seasonal lending without joint liability. Prepare for the season. Pay when you sell.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground/90">Platform</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">About</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">How It Works</Link></li>
              <li><Link to="/business-model" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Business Model</Link></li>
              <li><Link to="/analytics" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Analytics</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground/90">Legal</h4>
            <ul className="space-y-2.5">
              <li><Link to="/compliance" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Compliance</Link></li>
              <li><Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Privacy</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-xs text-primary-foreground/40">© 2026 Clustr Technologies Pvt. Ltd. All rights reserved. Registered in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
