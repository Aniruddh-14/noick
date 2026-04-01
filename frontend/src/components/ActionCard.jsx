import { ArrowRight } from 'lucide-react';

export default function ActionCard({ issue, evidence, action, example, index = 0 }) {
  return (
    <div className={`fade-in stagger-${index + 1} rounded-xl border border-border bg-bg-card p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent-glow/5 transition-all`}>
      {/* Issue */}
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-7 h-7 rounded-lg bg-accent-soft flex items-center justify-center">
          <span className="text-accent text-xs font-bold">{index + 1}</span>
        </div>
        <h4 className="text-text-primary font-semibold text-[15px]">{issue}</h4>
      </div>

      {/* Evidence */}
      <p className="text-text-muted text-sm leading-relaxed mb-4 pl-9">
        {evidence}
      </p>

      {/* Action */}
      <div className="bg-info-soft border border-info-border rounded-lg p-4 mb-3 ml-9">
        <div className="flex items-start gap-2">
          <ArrowRight className="w-4 h-4 text-info mt-0.5 shrink-0" />
          <p className="text-text-primary text-sm font-medium leading-relaxed">
            {action}
          </p>
        </div>
      </div>

      {/* Example */}
      {example && (
        <p className="text-text-muted text-sm italic pl-9">
          e.g. "{example}"
        </p>
      )}
    </div>
  );
}
