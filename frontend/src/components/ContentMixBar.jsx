/**
 * ContentMixBar — visual category distribution.
 */

const CATEGORY_COLORS = {
  educational: "#3b82f6",
  personal_story: "#f59e0b",
  opinion: "#ef4444",
  motivational: "#8b5cf6",
  entertaining: "#ec4899",
  contrarian: "#f97316",
  authority_building: "#06b6d4",
  promotional: "#6b7280",
  listicle: "#14b8a6",
};

export default function ContentMixBar({ contentMix }) {
  if (!contentMix || contentMix.length === 0) return null;

  return (
    <div className="fade-in">
      {/* Stacked bar */}
      <div className="flex h-3 rounded-full overflow-hidden mb-4 bg-bg-elevated">
        {contentMix.map((item) => (
          <div
            key={item.name}
            style={{
              width: `${item.percentage}%`,
              backgroundColor: CATEGORY_COLORS[item.name] || "#6b7280",
            }}
            className="transition-all"
            title={`${item.name}: ${item.percentage}%`}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {contentMix.map((item) => (
          <div key={item.name} className="flex items-center gap-2 text-sm">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: CATEGORY_COLORS[item.name] || "#6b7280" }}
            />
            <span className="text-text-secondary capitalize">
              {item.name.replace(/_/g, " ")}
            </span>
            <span className="text-text-muted">
              {item.percentage}%
            </span>
            <span className={`text-xs font-medium ${item.multiplier >= 1.3 ? 'text-success' : item.multiplier <= 0.7 ? 'text-danger' : 'text-text-muted'}`}>
              {item.multiplier}x
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
