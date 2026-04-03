import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const QUESTIONS = [
  {
    q: "What does Postera do?",
    a: "Postera is an AI-powered content strategist. It analyzes your existing content across multiple platforms to identify what's working, what's hurting your growth, and gives you specific, personalized recommendations for what to do next. It's not a content generator — it's a strategy engine.",
  },
  {
    q: "Which platforms does Postera support?",
    a: "Postera currently supports Twitter/X, Instagram, LinkedIn, and YouTube. Each platform gets a tailored analysis — from tweet hooks and thread patterns on Twitter to video title clustering and transcript analysis on YouTube.",
  },
  {
    q: "Can it work with fewer than 30 posts?",
    a: "Yes. If you have 30+ posts, Postera runs a full high-confidence analysis. With 10-29 posts, you'll get early pattern detection with a note about improving accuracy with more data. Even with fewer than 10 posts, Postera generates an early signal report — it never blocks you.",
  },
  {
    q: "Does it generate content for me?",
    a: "No. Postera is deliberately NOT a content generator. It analyzes your content and gives you strategic direction — what types of posts to make more of, which hooks to use, and what to stop doing. The creativity stays with you.",
  },
  {
    q: "Is the analysis personalized?",
    a: "100%. Every insight is based on YOUR content, YOUR patterns, and YOUR engagement data. Postera doesn't give generic advice like 'post consistently.' It tells you things like 'your story posts perform 3.2x better, but you only post them 13% of the time — increase that.'",
  },
  {
    q: "How is this different from analytics dashboards?",
    a: "Analytics tools show you numbers. Postera tells you what to do with them. It connects patterns across your content types, hooks, tones, and formats to produce strategic recommendations, not just charts.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Questions? Answered.
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? 'border-accent/30 bg-accent-soft/30'
                    : 'border-border bg-bg-card hover:border-border-light'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className={`font-semibold text-[15px] pr-4 transition-colors ${isOpen ? 'text-text-primary' : 'text-text-secondary'}`}>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
