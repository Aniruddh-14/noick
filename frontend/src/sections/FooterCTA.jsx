import { Activity, ChevronRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer id="faq" className="section-padding bg-[#0D0F0E] border-t border-white/[0.03] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-10 relative z-10">
        
        {/* Core CTA - Left-Aligned */}
        <div className="max-w-[620px] mb-32">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#006D3C] mb-8">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight mb-12">
            Stop guessing what to post.
            <br /><i className="italic font-heading text-[#E5E7EB]">Start growing today.</i>
          </h2>
          <a
            href="#analyze"
            className="pill-button pill-button-primary px-10 py-4 text-sm font-bold"
          >
            Analyze My Content <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Global Footer - Clean & Structured */}
        <div className="pt-20 border-t border-white/[0.03] flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#006D3C] flex items-center justify-center shadow-lg shadow-[#006D3C]/10">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-extrabold text-white tracking-widest text-lg uppercase">Postera</span>
            </div>
            <p className="text-[#4B5563] text-[13px] font-medium leading-relaxed max-w-[280px]">
              The AI content strategy engine for professional creators and digital brands.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 md:gap-24">
            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40">Product</h4>
              <nav className="flex flex-col gap-4 text-[13px] font-medium text-[#9CA3AF]">
                <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
                <a href="#platforms" className="hover:text-white transition-colors">Platforms</a>
                <a href="#sample-report" className="hover:text-white transition-colors">Samples</a>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40">Connect</h4>
              <nav className="flex flex-col gap-4 text-[13px] font-medium text-[#9CA3AF]">
                <a href="mailto:hello@postera.ai" className="hover:text-white transition-colors">Contact</a>
                <a href="https://twitter.com/postera" className="hover:text-white transition-colors">Twitter / X</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-20 flex items-center justify-between">
          <p className="text-[#4B5563] text-[11px] font-bold uppercase tracking-widest">© 2026 AI Content Strategy Engine</p>
          <div className="flex gap-8 text-[#4B5563] text-[11px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
