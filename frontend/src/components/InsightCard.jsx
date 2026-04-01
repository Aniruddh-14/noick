export default function InsightCard({ data, variant = "success", index = 0 }) {
  const styles = {
    success: { accent: "bg-success", border: "border-success-border", bg: "bg-success-soft", text: "text-success" },
    danger: { accent: "bg-danger", border: "border-danger-border", bg: "bg-danger-soft", text: "text-danger" },
    info: { accent: "bg-info", border: "border-info-border", bg: "bg-info-soft", text: "text-info" },
  };
  const s = styles[variant] || styles.success;

  // Support both string and object format
  const isObject = typeof data === 'object';
  const insight = isObject ? data.insight : data;
  const evidence = isObject ? data.evidence : null;
  const action = isObject ? data.action : null;

  return (
    <div className={`fade-in stagger-${index + 1} rounded-xl border ${s.border} ${s.bg} p-5 transition-all hover:border-opacity-60`}>
      <div className="flex items-start gap-3">
        <div className={`mt-1.5 w-2 h-2 rounded-full ${s.accent} shrink-0`} />
        <div className="space-y-2">
          <p className="text-text-primary text-[15px] leading-relaxed font-medium">
            {insight}
          </p>
          {evidence && (
            <p className="text-text-muted text-sm leading-relaxed">
              {evidence}
            </p>
          )}
          {action && (
            <p className={`text-sm font-medium ${s.text}`}>
              → {action}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
