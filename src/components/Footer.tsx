import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-card mt-auto">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-bold text-foreground">
            <BookOpen className="h-5 w-5 text-primary" />
            WebDev Guide
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            A structured learning platform for aspiring web developers. Start from scratch, build with confidence.
          </p>
        </div>
        <div className="flex gap-12 text-sm">
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Learn</h4>
            <Link to="/roadmap" className="block text-muted-foreground hover:text-primary transition-colors">Roadmap</Link>
            <Link to="/topics" className="block text-muted-foreground hover:text-primary transition-colors">Topics</Link>
            <Link to="/resources" className="block text-muted-foreground hover:text-primary transition-colors">Resources</Link>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Company</h4>
            <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">About</Link>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} WebDev Guide. Built for learners.
      </div>
    </div>
  </footer>
);

export default Footer;
