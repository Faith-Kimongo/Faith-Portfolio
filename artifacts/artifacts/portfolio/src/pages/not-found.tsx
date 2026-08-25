import { Route, useLocation } from "wouter";

export default function NotFound() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="w-full max-w-md mx-auto px-4 text-center">
        <h1 className="text-4xl font-serif font-bold mb-4">404</h1>
        <p className="text-sm text-muted-foreground font-mono mb-8">
          System fault: Route {location} not found.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center border border-border px-6 py-2 text-sm font-mono hover:bg-foreground hover:text-background transition-colors"
        >
          Return to root
        </a>
      </div>
    </div>
  );
}