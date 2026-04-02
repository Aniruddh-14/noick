import { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const FAQ_ITEMS = [
  { q: "What does Postra do?", a: "Postra is an AI-powered content strategist. It analyzes your existing content to identify what's working, what's hurting your growth, and gives you specific, personalized next steps. It's a strategy engine, not a content generator." },
  { q: "Which platforms does Postra support?", a: "Twitter/X, Instagram, LinkedIn, and YouTube — each with platform-specific, tailored analysis." },
  { q: "Can it work with fewer than 30 posts?", a: "Yes. With 10–29 posts you get early pattern detection with clear confidence notes. With 30+ posts you get full high-confidence analysis." },
  { q: "Does it generate content for me?", a: "No. Postra gives you strategic direction — what types of posts to make, which hooks to use, what to reduce. The creativity is yours." },
  { q: "Is the analysis personalized?", a: "100%. Every insight is based on your content, your patterns, and your engagement data — not generic best practices." },
];

export default function StrategySection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="sample-report" className="section-padding bg-[#0D0F0E]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-[760px] mx-auto">
          <p className="text-[#006D3C] text-sm font-black uppercase tracking-widest mb-4">Sample Report</p>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white leading-tight mb-6">
            Your <i className="italic font-heading">Personalized Strategy</i>.
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-[620px] mx-auto leading-relaxed">
            Every insight is backed by evidence from your own content. No generic advice here.
          </p>
        </div>

        {/* 2-column layout */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          {/* Left - insights text + FAQ */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-extrabold font-heading text-white mb-4">Insights that drive your growth</h3>
              <p className="text-lg text-[#9CA3AF] leading-relaxed mb-8">
                See exactly what's working, what's not, and get clear steps to improve your content performance.
              </p>
            </div>

            <div id="faq" className="space-y-4">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className={`pill-card overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#006D3C]/40 bg-white/[0.08]' : 'hover:border-white/20'}`}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-8 py-5 text-left cursor-pointer"
                    >
                      <span className={`text-base font-bold font-heading ${isOpen ? 'text-white' : 'text-[#9CA3AF]'}`}>{item.q}</span>
                      <ChevronDown className={`w-5 h-5 text-[#4B5563] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-8 pb-6 animate-fade-in">
                        <p className="text-base text-[#9CA3AF] leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - mock report preview */}
          <div className="pill-card p-10 border border-white/10 shadow-2xl space-y-6">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#006D3C] flex items-center justify-center shadow-lg shadow-[#006D3C]/30">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-white text-xl font-extrabold font-heading">Strategy Preview</span>
            </div>

            {/* What's Working */}
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/20">
              <div className="bg-[#00C16A]/[0.12] px-6 py-4 flex items-center justify-between border-b border-[#00C16A]/10">
                <span className="text-[#00C16A] text-sm font-black uppercase tracking-widest">What's Working</span>
                <div className="flex gap-2">
                  <span className="h-[6px] w-12 rounded-full bg-[#00C16A]/50 inline-block" />
                  <span className="h-[6px] w-6 rounded-full bg-rose-500/40 inline-block" />
                </div>
              </div>
              <div className="bg-[#151515] px-6 py-5">
                <p className="flex items-center gap-3 text-base text-[#E5E7EB]">
                  <span className="w-2 h-2 rounded-full bg-[#00C16A] shrink-0" />
                  Story posts perform <span className="text-white font-black">2.3x better</span> than average.
                </p>
              </div>
            </div>

            {/* What's Hurting */}
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/20">
              <div className="bg-rose-500/[0.12] px-6 py-4 flex items-center justify-between border-b border-rose-500/10">
                <span className="text-rose-500 text-sm font-black uppercase tracking-widest">What's Hurting</span>
                <div className="flex gap-2">
                  <span className="h-[6px] w-12 rounded-full bg-rose-500/50 inline-block" />
                  <span className="h-[6px] w-8 rounded-full bg-indigo-400/30 inline-block" />
                </div>
              </div>
              <div className="bg-[#151515] px-6 py-5">
                <p className="flex items-center gap-3 text-base text-[#E5E7EB]">
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                  Educational content is underperforming.
                </p>
              </div>
            </div>

            {/* What To Do Next */}
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/20">
              <div className="bg-[#006D3C]/[0.2] px-6 py-4 border-b border-[#006D3C]/10">
                <span className="text-[#00C16A] text-sm font-black uppercase tracking-widest">What To Do Next</span>
              </div>
              <div className="bg-[#151515] px-6 py-5">
                <p className="flex items-center gap-3 text-base text-[#E5E7EB]">
                  <span className="text-[#00C16A] font-extrabold text-lg">✓</span>
                  Focus 2 of your next 5 posts on <span className="text-white font-black underline decoration-[#006D3C] underline-offset-4">storytelling</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
