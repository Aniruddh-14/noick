import { Activity } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-border bg-bg/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center shadow-lg shadow-accent-glow">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-text-primary">
            Postra
          </span>
        </div>
        <span className="text-xs text-text-muted font-medium tracking-wide uppercase">
          Strategy, not guesses.
        </span>
      </div>
    </nav>
  );
}
