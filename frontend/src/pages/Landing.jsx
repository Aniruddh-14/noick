import { useState } from 'react';
import { ArrowRight, Sparkles, Eye } from 'lucide-react';
import PlatformSelector, { PLATFORMS } from '../components/PlatformSelector';

export default function Landing({ onAnalyze, onSampleReport }) {
  const [platform, setPlatform] = useState("twitter");

  const activePlatform = PLATFORMS.find(p => p.id === platform);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim() || "demo_creator";
    onAnalyze(username, platform);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 relative">
      {/* Ambient background glow */}
      <div className="absolute top-[-20%] left-[30%] w-[40vw] h-[40vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[20%] w-[30vw] h-[30vw] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Badge */}
        <div className="fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft border border-accent/20 text-accent text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          Multi-platform AI content strategy
        </div>

        {/* Headline */}
        <h1 className="fade-in stagger-1 text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-6">
          Postra learns how{' '}
          <span className="gradient-text">YOU</span> create — and tells you what to do next.
        </h1>

        {/* Subheadline */}
        <p className="fade-in stagger-2 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
          Analyze your content across Twitter, Instagram, LinkedIn, and YouTube. Postra finds your patterns, understands your style, and gives you personalized strategy to grow faster.
        </p>

        {/* Platform Selector */}
        <div className="fade-in stagger-3 mb-8">
          <p className="text-text-muted text-sm font-medium mb-3">Select your platform</p>
          <PlatformSelector selected={platform} onSelect={setPlatform} />
        </div>

        {/* Input + CTA */}
        <form onSubmit={handleSubmit} className="fade-in stagger-4 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
          <input
            name="username"
            type="text"
            placeholder={activePlatform?.placeholder || "@username"}
            className="flex-1 px-5 py-3.5 rounded-xl border border-border bg-bg-card text-text-primary placeholder-text-muted text-base focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
          />
          <button
            type="submit"
            className="px-7 py-3.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold text-base transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg shadow-accent-glow pulse-glow"
          >
            Analyze My Content
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Secondary CTA */}
        <button
          onClick={onSampleReport}
          className="fade-in stagger-5 inline-flex items-center gap-2 text-text-muted hover:text-text-secondary text-sm font-medium transition-colors cursor-pointer"
        >
          <Eye className="w-4 h-4" />
          See Sample Report
        </button>
      </div>
    </div>
  );
}
