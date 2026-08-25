import { ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-sm font-mono text-muted-foreground">
          © {currentYear} Faith Kimongo. Designed with precision.
        </div>
        
        <div className="text-xs font-mono text-muted-foreground/50">
          Built with React & Tailwind
        </div>

        <a 
          href="#top" 
          className="p-2 border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </a>
        
      </div>
    </footer>
  );
}
