import { CheckCircle, AlertTriangle, Compass, RotateCcw, BarChart3, Layers } from 'lucide-react';
import InsightCard from '../components/InsightCard';
import ActionCard from '../components/ActionCard';
import ConfidenceBadge from '../components/ConfidenceBadge';
import ContentMixBar from '../components/ContentMixBar';

const PLATFORM_NAMES = { twitter: "Twitter/X", instagram: "Instagram", linkedin: "LinkedIn", youtube: "YouTube" };

export default function Report({ data, onReset }) {
  const { summary, confidence, insights, mistakes, actions, content_mix, strongest_themes, strategy_summary } = data;
  const platName = PLATFORM_NAMES[summary.platform] || summary.platform;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* ── Header ── */}
      <div className="fade-in flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-text-muted text-sm font-medium mb-1">Strategy report for</p>
          <h1 className="text-3xl font-bold text-text-primary mb-1">@{summary.username}</h1>
          <p className="text-text-secondary text-sm">
            {platName} · {summary.total_posts} posts analyzed · Avg engagement: {summary.avg_engagement.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <ConfidenceBadge confidence={confidence} />
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-text-muted text-sm font-medium hover:bg-bg-card-hover hover:text-text-secondary transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            New
          </button>
        </div>
      </div>

      {/* Confidence message */}
      {confidence.level !== "high" && (
        <div className="fade-in stagger-1 mb-8 px-4 py-3 rounded-lg bg-yellow-400/5 border border-yellow-400/15 text-yellow-300/80 text-sm">
          {confidence.message}
        </div>
      )}

      {/* ── Strategy Summary ── */}
      {strategy_summary && (
        <div className="fade-in stagger-1 glass-card rounded-xl p-6 mb-10">
          <p className="text-text-secondary text-[15px] leading-relaxed">
            {strategy_summary}
          </p>
        </div>
      )}

      {/* ── Content Mix ── */}
      <section className="mb-10">
        <div className="flex items-center gap-2.5 mb-4">
          <BarChart3 className="w-5 h-5 text-text-muted" />
          <h2 className="text-lg font-bold text-text-primary">Content Mix</h2>
        </div>
        <div className="glass-card rounded-xl p-6">
          <ContentMixBar contentMix={content_mix} />
        </div>
      </section>

      {/* ── Strongest Themes ── */}
      {strongest_themes && strongest_themes.length > 0 && (
        <section className="fade-in mb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <Layers className="w-5 h-5 text-text-muted" />
            <h2 className="text-lg font-bold text-text-primary">Strongest Themes</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {strongest_themes.map((theme, i) => (
              <span key={i} className="px-3 py-1.5 rounded-full bg-accent-soft border border-accent/20 text-accent text-sm font-medium capitalize">
                {theme.replace(/_/g, " ")}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ── What's Working ── */}
      <section className="mb-10">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-lg bg-success-soft flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-success" />
          </div>
          <h2 className="text-xl font-bold text-text-primary">What's Working</h2>
        </div>
        <div className="space-y-3">
          {insights.map((item, i) => (
            <InsightCard key={i} data={item} variant="success" index={i} />
          ))}
        </div>
      </section>

      {/* ── What's Hurting ── */}
      <section className="mb-10">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-lg bg-danger-soft flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-danger" />
          </div>
          <h2 className="text-xl font-bold text-text-primary">What's Hurting You</h2>
        </div>
        <div className="space-y-3">
          {mistakes.map((item, i) => (
            <InsightCard key={i} data={item} variant="danger" index={i} />
          ))}
        </div>
      </section>

      {/* ── What To Do Next ── */}
      <section className="mb-10">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-lg bg-info-soft flex items-center justify-center">
            <Compass className="w-5 h-5 text-info" />
          </div>
          <h2 className="text-xl font-bold text-text-primary">What To Do Next</h2>
        </div>
        <div className="space-y-4">
          {actions.map((action, i) => (
            <ActionCard key={i} {...action} index={i} />
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <div className="text-center pt-8 border-t border-border">
        <p className="text-text-muted text-sm">
          Powered by <span className="gradient-text font-semibold">Postera</span> · AI Content Strategy Engine
        </p>
      </div>
    </div>
  );
}
