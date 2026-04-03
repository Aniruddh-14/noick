import { useState } from 'react';
import { ChevronDown, Sparkles, Activity, Target } from 'lucide-react';

const FAQ_ITEMS = [
  { q: "What does Postera do?", a: "Postera is an AI-powered content strategist. It analyzes your existing content to identify what's working, what's hurting your growth, and gives you specific, personalized next steps." },
  { q: "Which platforms does Postera support?", a: "Twitter/X, Instagram, LinkedIn, and YouTube, each with platform-specific, tailored analysis." },
  { q: "Does it generate content for me?", a: "No. Postera gives you strategic direction — what types of posts to make, which hooks to use, what to reduce. The creativity is yours." },
];

export default function StrategySection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="sample-report" className="section-padding bg-[#0D0F0E] border-t border-white/[0.03]">
      <div className="max-w-[1240px] mx-auto px-10">
        
        {/* Header - Left-Aligned */}
        <div className="max-w-[620px] mb-24">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#006D3C] mb-6">Expert Analysis</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight mb-8">
            Your <i className="italic font-heading text-[#E5E7EB]">Personalized Report</i>.
          </h2>
          <p className="text-lg text-[#9CA3AF] opacity-80 leading-relaxed">
            Every insight is backed by evidence from your own content history. No more general advice.
          </p>
        </div>

        {/* 2-Column Balanced Layout */}
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-20">
          
          {/* Mock Strategy View (Simplified) */}
          <div className="space-y-8">
            <div className="pill-card border-l-4 border-l-[#00C16A] shadow-xl shadow-black/10">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-[#00C16A]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00C16A]">Growth Lever</span>
              </div>
              <p className="text-white text-lg font-medium leading-relaxed">
                Story-based posts generate <span className="text-[#00C16A] font-extrabold underline underline-offset-4 decoration-2">2.3x higher retention</span> than standard listicles.
              </p>
            </div>

            <div className="pill-card border-l-4 border-l-[#EF4444] shadow-xl shadow-black/10">
              <div className="flex items-center gap-2 mb-6">
                <Activity className="w-4 h-4 text-[#EF4444]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#EF4444]">Performance Signal</span>
              </div>
              <p className="text-white text-lg font-medium leading-relaxed">
                Repetitive daily educational hooks are leading to significant audience fatigue and lower organic reach.
              </p>
            </div>

            <div className="pill-card border-l-4 border-l-[#3B82F6] shadow-xl shadow-black/10 bg-[#006D3C]/[0.02]">
               <div className="flex items-center gap-2 mb-6">
                <Target className="w-4 h-4 text-[#3B82F6]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3B82F6]">Action Item</span>
              </div>
               <p className="text-xl text-[#E5E7EB] font-bold leading-relaxed mb-6">
                 Focus 40% of your next 5 uploads on storytelling frameworks.
               </p>
               <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                 <div className="h-full bg-[#3B82F6] w-[84%]" />
               </div>
               <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mt-2">Confidence Level: 84.3%</p>
            </div>
          </div>

          {/* FAQ (Right-aligned / Compact) */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-heading text-white mb-10 tracking-tight uppercase">Questions</h3>
            <div id="faq" className="space-y-3">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className={`rounded-xl overflow-hidden border border-white/[0.03] transition-colors ${isOpen ? 'bg-white/[0.03] border-white/[0.08]' : 'hover:bg-white/[0.01]'}`}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                    >
                      <span className={`text-[15px] font-bold font-heading ${isOpen ? 'text-white' : 'text-[#9CA3AF]'}`}>{item.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#4B5563] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 animate-fade-in">
                        <p className="text-[14px] text-[#9CA3AF] leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
