import { Activity, Sparkles, Box, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#0D0F0E] min-h-screen flex items-center overflow-hidden">
      {/* Very subtle background depth, reduced glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-subtle-glow pointer-events-none opacity-40" />
      
      <div className="max-w-[1240px] mx-auto px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
          
          {/* CONTENT (LEFT ALIGNED) */}
          <div className="max-w-[640px] text-left">
            <h1 className="fade-in font-heading text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-tight text-white mb-6 tracking-tight">
              Postra learns how <i className="italic font-heading text-[#00C16A]">YOU</i> create and tells you what to do next.
            </h1>
            
            <p className="fade-in stagger-1 text-lg text-[#9CA3AF] max-w-[520px] leading-relaxed mb-8 opacity-90">
              Analyze your content across Twitter, Instagram, LinkedIn, and YouTube. 
              Find your patterns and get a personalized strategy to grow faster.
            </p>

            <div className="fade-in stagger-2 flex items-center gap-4">
              <a href="#analyze" className="pill-button pill-button-primary px-8 py-3.5">
                Analyze My Content
              </a>
              <a href="#sample-report" className="pill-button pill-button-ghost px-8 py-3.5">
                See Sample Report
              </a>
            </div>
          </div>

          {/* DUAL CARD DASHBOARD (SIMPLIFIED) */}
          <div className="fade-in stagger-3 space-y-6">
            
            {/* Card 1: Insight (Green) */}
            <div className="pill-card border-l-4 border-l-[#00C16A] shadow-xl shadow-black/10 transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#00C16A]/[0.12] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#00C16A]" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#00C16A]">What's Working</span>
              </div>
              <p className="text-white text-lg font-medium leading-normal mb-1">
                Story-based content generates <span className="text-[#00C16A] font-extrabold">2.3x more</span> interaction.
              </p>
            </div>

            {/* Card 2: Next Action (Blue) */}
            <div className="pill-card border-l-4 border-l-[#3B82F6] shadow-xl shadow-black/10 transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/[0.12] flex items-center justify-center">
                  <Box className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3B82F6]">What To Do Next</span>
              </div>
              <p className="text-white text-lg font-medium leading-normal mb-6">
                Shift 2 out of your next 5 uploads to storytelling frameworks.
              </p>
              
              {/* Confidence Bar */}
              <div className="pt-4 border-t border-white/[0.03]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest">Confidence</span>
                  <span className="text-[10px] font-bold text-[#3B82F6]">84.3%</span>
                </div>
                <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                  <div className="h-full bg-[#3B82F6] w-[84%]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
