import { Link2, Cpu, Lightbulb, ChevronRight } from 'lucide-react';

const STEPS = [
  {
    icon: Link2,
    title: "Connect your content",
    desc: "Enter your handle on Twitter, Instagram, LinkedIn, or YouTube. We pull your posts and start analyzing.",
    color: "#00C16A",
  },
  {
    icon: Cpu,
    title: "Analyze your patterns",
    desc: "Our engine classifies your content by type, tone, hook, and format — then scores what actually drives engagement.",
    color: "#3B82F6",
  },
  {
    icon: Lightbulb,
    title: "Get personalized strategy",
    desc: "Receive a report with evidence-backed insights and clear next steps tailored to your personal content style.",
    color: "#00C16A",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-[#0D0F0E] border-t border-white/[0.03]">
      <div className="max-w-[1240px] mx-auto px-10">
        {/* Header - Left-Aligned */}
        <div className="max-w-[620px] mb-24">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#006D3C] mb-6">The Process</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight mb-8">
            From raw data to a <i className="italic font-heading text-[#E5E7EB]">winning strategy</i> in seconds.
          </h2>
          <p className="text-lg text-[#9CA3AF] opacity-80 leading-relaxed">
            Stop guessing what to post. Use AI to understand your audience and optimize your content mix.
          </p>
        </div>

        {/* Cards - Balanced Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="pill-card text-left transition-all hover:bg-white/[0.04]">
                <div className="flex flex-col items-start gap-10 h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center">
                    <Icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold font-heading text-white mb-6 tracking-tight uppercase">{step.title}</h3>
                    <p className="text-[15px] text-[#9CA3AF] leading-relaxed font-body">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
