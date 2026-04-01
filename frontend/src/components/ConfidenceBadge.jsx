import { Shield, AlertTriangle, Zap } from 'lucide-react';

export default function ConfidenceBadge({ confidence }) {
  const config = {
    high: { icon: Shield, color: "text-success", bg: "bg-success-soft", border: "border-success-border", label: "High Confidence" },
    medium: { icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20", label: "Moderate Confidence" },
    low: { icon: AlertTriangle, color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20", label: "Early Signal" },
  };

  const c = config[confidence.level] || config.medium;
  const Icon = c.icon;

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${c.bg} ${c.border} ${c.color}`}>
      <Icon className="w-3.5 h-3.5" />
      {c.label}
    </div>
  );
}
