import { TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from './BrandIcons';

const PLATFORMS = [
  { id: "twitter", name: "Twitter / X", icon: TwitterIcon, color: "#1DA1F2", placeholder: "@your_handle" },
  { id: "instagram", name: "Instagram", icon: InstagramIcon, color: "#E4405F", placeholder: "@your_username" },
  { id: "linkedin", name: "LinkedIn", icon: LinkedinIcon, color: "#0A66C2", placeholder: "your-name" },
  { id: "youtube", name: "YouTube", icon: YoutubeIcon, color: "#FF0000", placeholder: "channel name" },
];

export default function PlatformSelector({ selected, onSelect }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {PLATFORMS.map((p) => {
        const Icon = p.icon;
        const isActive = selected === p.id;
        return (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className={`relative flex flex-col items-center gap-2.5 p-5 rounded-xl border transition-all cursor-pointer
              ${isActive
                ? 'border-accent bg-accent-soft shadow-lg shadow-accent-glow'
                : 'border-border bg-bg-card hover:border-border-light hover:bg-bg-card-hover'
              }`}
          >
            <Icon
              className="w-6 h-6"
              style={{ color: isActive ? p.color : '#71717a' }}
            />
            <span className={`text-sm font-medium ${isActive ? 'text-text-primary' : 'text-text-muted'}`}>
              {p.name}
            </span>
            {isActive && (
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent shadow-md shadow-accent-glow" />
            )}
          </button>
        );
      })}
    </div>
  );
}

export { PLATFORMS };
