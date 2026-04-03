import { CheckCircle, AlertTriangle, Compass, ArrowRight } from 'lucide-react';

const INSIGHTS = [
  "Your storytelling posts perform 2.1x better than your average. This is your strongest content type.",
  "Posts with personal confession hooks generate 3.2x more engagement than question-based hooks.",
  "Your single thought format accounts for 100% of your top-performing posts.",
];

const MISTAKES = [
  "You post educational content 37% of the time, but it only makes up 0% of your top performers. You're overinvesting in a format that underdelivers.",
  "Your story posts crush it (3.2x engagement), but you only post them 13% of the time. You're leaving your best content on the table.",
  "Your recent posts are becoming repetitive in structure. Audiences notice patterns — mix it up to keep engagement fresh.",
];

const ACTIONS = [
  {
    issue: "Too much educational, not enough story",
    evidence: "Educational posts are 37% of your content but only 0% of top performers. Story posts are just 13% of content but generate 3.2x engagement.",
    action: "Replace 2 of your next 5 educational posts with story content.",
    example: "Instead of 'How to grow on Twitter', try sharing a personal story about a real mistake you made and what it taught you.",
  },
  {
    issue: "Your opening hooks aren't optimized",
    evidence: "Posts with 'personal confession' hooks get 3.2x engagement, but you only use them 13% of the time.",
    action: "Open your next 3 posts with a personal confession hook.",
    example: "Start with something like: 'I almost quit last month. Here's what changed my mind.'",
  },
  {
    issue: "Double down on story",
    evidence: "Your story posts generate 3.2x your average engagement. This is clearly what resonates.",
    action: "Write a story post this week that goes deeper than you're comfortable with.",
    example: "Share something you haven't told your audience yet. The most specific, honest version of a story you can write.",
  },
];

export default function SampleReport() {
  return (
    <section id="sample-report" className="py-24 md:py-32 relative">
      <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-accent/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">Sample Report</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            See what Postera reveals.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            This is a preview of a real strategy report. Every insight is backed by evidence from your own content.
          </p>
        </div>

        {/* Mock report shell */}
        <div className="glass rounded-2xl p-6 md:p-8 space-y-10">
          {/* Report header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
            <div>
              <p className="text-text-muted text-xs font-medium">Strategy report for</p>
              <p className="text-2xl font-bold text-text-primary">@sample_creator</p>
              <p className="text-text-secondary text-sm mt-1">Twitter/X · 30 posts · Avg engagement: 1,358</p>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success-soft border border-success-border text-success text-xs font-medium self-start">
              <CheckCircle className="w-3.5 h-3.5" />
              High Confidence
            </span>
          </div>

          {/* ── What's Working ── */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-success-soft flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-success" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">What's Working</h3>
            </div>
            <div className="space-y-2.5">
              {INSIGHTS.map((text, i) => (
                <div key={i} className="rounded-xl bg-success-soft border border-success-border p-4 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 shrink-0" />
                  <p className="text-sm text-text-primary leading-relaxed font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── What's Hurting ── */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-danger-soft flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-danger" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">What's Hurting You</h3>
            </div>
            <div className="space-y-2.5">
              {MISTAKES.map((text, i) => (
                <div key={i} className="rounded-xl bg-danger-soft border border-danger-border p-4 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-danger mt-2 shrink-0" />
                  <p className="text-sm text-text-primary leading-relaxed font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── What To Do Next ── */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-info-soft flex items-center justify-center">
                <Compass className="w-4 h-4 text-info" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">What To Do Next</h3>
            </div>
            <div className="space-y-4">
              {ACTIONS.map((action, i) => (
                <div key={i} className="rounded-xl border border-border bg-bg-card p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-6 h-6 rounded-md bg-accent-soft flex items-center justify-center">
                      <span className="text-accent text-xs font-bold">{i + 1}</span>
                    </div>
                    <h4 className="text-text-primary font-semibold text-sm">{action.issue}</h4>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed mb-3 pl-8">{action.evidence}</p>
                  <div className="bg-info-soft border border-info-border rounded-lg p-3 ml-8 mb-2">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-info mt-0.5 shrink-0" />
                      <p className="text-text-primary text-sm font-medium">{action.action}</p>
                    </div>
                  </div>
                  <p className="text-text-muted text-xs italic pl-8">e.g. "{action.example}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
