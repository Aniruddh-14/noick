import { Activity, ChevronRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer id="faq" className="section-padding bg-[#0D0F0E] border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#006D3C]/[0.08] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center">
        {/* Core CTA */}
        <div className="max-w-[700px] mx-auto mb-32">
          <p className="text-[#006D3C] text-sm font-black uppercase tracking-widest mb-6">Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white leading-tight mb-12">
            Stop guessing what to post.
            <br /><i className="italic font-heading">Start growing.</i>
          </h2>
          <a
            href="#home"
            className="pill-button bg-[#006D3C] hover:bg-[#008D4C] text-white flex items-center justify-center gap-2 max-w-[280px] mx-auto px-8 py-5 text-lg font-black transition-all hover:scale-[1.05] shadow-2xl shadow-[#006D3C]/30"
          >
            Analyze My Content <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Bottom Footer Info */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#006D3C] flex items-center justify-center shadow-lg shadow-[#006D3C]/20">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <span className="font-heading font-extrabold text-white tracking-tighter text-lg uppercase">Postra</span>
            <span className="text-[#4B5563] text-sm hidden md:inline ml-2">© 2026 AI Content Strategy Engine</span>
          </div>

          <nav className="flex items-center gap-8 text-[#9CA3AF] text-sm font-bold tracking-tight">
            <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
            <a href="#platforms" className="hover:text-white transition-colors">Platforms</a>
            <a href="mailto:hello@postra.ai" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <p className="text-[#4B5563] text-xs font-medium">Strategy, not guesses.</p>
        </div>
      </div>
    </footer>
  );
}
