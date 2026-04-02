import { Link2, Cpu, Lightbulb, ChevronRight } from 'lucide-react';

const STEPS = [
  {
    icon: Link2,
    title: "Connect your content",
    desc: "Enter your handle on Twitter, Instagram, LinkedIn, or YouTube. We pull your posts and start analyzing.",
    bg: "bg-[#006D3C]/[0.1]",
    iconColor: "text-[#006D3C]",
  },
  {
    icon: Cpu,
    title: "Postra analyzes your patterns",
    desc: "Our engine classifies your content by type, tone, hook, and format — then scores what actually drives engagement.",
    bg: "bg-[#006D3C]/[0.1]",
    iconColor: "text-[#006D3C]",
  },
  {
    icon: Lightbulb,
    title: "Get personalized strategy",
    desc: "Receive a report with evidence-backed insights and clear next steps tailored to your content style.",
    bg: "bg-[#006D3C]/[0.1]",
    iconColor: "text-[#006D3C]",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-[#0D0F0E]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-[700px] mx-auto">
          <p className="text-[#006D3C] text-sm font-black uppercase tracking-widest mb-4">The Process</p>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white leading-tight">
            From raw data to a <i className="italic font-heading">winning strategy</i> in seconds.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="pill-card p-10 text-center transition-all hover:border-[#006D3C]/30 hover:shadow-2xl hover:shadow-[#006D3C]/5 hover:-translate-y-1">
                <div className="flex justify-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${step.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-4">{step.title}</h3>
                <p className="text-[#9CA3AF] text-base leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
