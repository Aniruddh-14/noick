import { Activity, Sparkles, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-16 md:pt-24 lg:pt-32 min-h-screen flex items-center bg-[#0D0F0E]">
      {/* Background radial glow */}
      <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-[#006D3C]/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-[#006D3C]/[0.03] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 w-full relative z-10 text-center">
        {/* Core copy */}
        <div className="max-w-[800px] mx-auto mb-16">
          <h1 className="fade-in font-heading text-4xl sm:text-5xl md:text-[4.75rem] font-extrabold leading-[1.05] tracking-tight text-white mb-8">
            Postra learns how <i className="font-heading italic">YOU</i> create—
            <br />and tells you what to do next.
          </h1>
          <p className="fade-in stagger-1 text-lg md:text-xl text-[#9CA3AF] leading-relaxed mb-10 max-w-[620px] mx-auto">
            Analyze your content across Twitter, Instagram, LinkedIn, and YouTube.
            Postra finds your patterns, understands your style, and gives you a
            personalized strategy to grow faster.
          </p>

          <div className="fade-in stagger-2 flex flex-wrap justify-center gap-4">
            <a
              href="#home"
              className="pill-button bg-[#006D3C] hover:bg-[#008D4C] text-white flex items-center gap-2 px-8 py-4 text-base font-semibold transition-all hover:scale-[1.02]"
            >
              Analyze My Content <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#sample-report"
              className="pill-button bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.08] text-white px-8 py-4 text-base font-semibold transition-all"
            >
              See Sample Report
            </a>
          </div>
        </div>

        {/* Mock dashboard - centralized and high-quality */}
        <div className="fade-in stagger-3 max-w-[860px] mx-auto float-anim mb-16">
          <div className="pill-card p-8 border border-white/[0.1] shadow-2xl relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.05]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#006D3C] flex items-center justify-center shadow-lg shadow-[#006D3C]/30">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-lg font-extrabold font-heading">Postra</span>
              </div>
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-[#E4405F]/80 border-2 border-[#151515]" title="Instagram" />
                <div className="w-7 h-7 rounded-full bg-[#1DA1F2]/80 border-2 border-[#151515]" title="Twitter" />
                <div className="w-7 h-7 rounded-full bg-[#0A66C2]/80 border-2 border-[#151515]" title="LinkedIn" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Left column - Insights */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[#00C16A] text-xs font-black uppercase tracking-widest">High Confidence</span>
                  <p className="text-[#E5E7EB] text-base font-medium">"Story storytelling posts get <span className="text-white font-bold">2.3k more interaction</span> than your average."</p>
                </div>
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <span className="text-rose-500 text-xs font-black uppercase tracking-widest">Underperforming</span>
                  <p className="text-[#9CA3AF] text-sm">"Too many educational posts with low interaction. Reducing these will boost your organic reach."</p>
                </div>
              </div>

              {/* Right column - Next Step */}
              <div className="bg-white/[0.03] rounded-3xl p-6 border border-white/[0.05]">
                <h3 className="text-white font-bold text-base mb-4 font-heading">Next Strategic Move</h3>
                <div className="flex items-start gap-3 text-[#E5E7EB]">
                  <div className="w-6 h-6 rounded-full bg-[#006D3C]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#00C16A] font-bold text-xs">1</span>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Shift 2 out of your next 5 posts to <span className="text-[#00C16A] font-bold">storytelling</span> to maximize engagement depth.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-[#006D3C] w-[65%] rounded-full shadow-[0_0_10px_rgba(0,109,60,0.5)]" />
                  </div>
                  <p className="text-[#6B7280] text-[11px] mt-2 font-medium">Confidence Level: 84.3%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
