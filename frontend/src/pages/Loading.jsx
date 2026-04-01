import { Activity } from 'lucide-react';
import { TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '../components/BrandIcons';

const PLATFORM_ICONS = { twitter: TwitterIcon, instagram: InstagramIcon, linkedin: LinkedinIcon, youtube: YoutubeIcon };
const PLATFORM_NAMES = { twitter: "Twitter/X", instagram: "Instagram", linkedin: "LinkedIn", youtube: "YouTube" };

const STEPS = {
  twitter: ["Fetching your recent tweets…", "Classifying content patterns…", "Analyzing hook performance…", "Scoring engagement metrics…", "Building your strategy report…"],
  instagram: ["Scanning your posts and reels…", "Analyzing caption styles…", "Detecting content themes…", "Measuring engagement patterns…", "Generating strategic insights…"],
  linkedin: ["Reading your LinkedIn posts…", "Identifying thought leadership patterns…", "Analyzing authority signals…", "Scoring professional engagement…", "Crafting your strategy report…"],
  youtube: ["Analyzing video titles and descriptions…", "Clustering topic patterns…", "Evaluating thumbnail performance…", "Scoring viewer engagement…", "Building your growth report…"],
};

export default function Loading({ username, platform }) {
  const Icon = PLATFORM_ICONS[platform] || Activity;
  const platName = PLATFORM_NAMES[platform] || "content";
  const steps = STEPS[platform] || STEPS.twitter;

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 relative">
      <div className="absolute top-[30%] left-[40%] w-[30vw] h-[30vw] bg-accent/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center max-w-md relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-2xl bg-accent-soft border border-accent/20 flex items-center justify-center pulse-glow">
            <Icon className="w-10 h-10 text-accent" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Analyzing your {platName} content…
        </h2>
        <p className="text-text-secondary mb-10">
          Studying <span className="font-semibold text-text-primary">@{username}</span>
        </p>

        <div className="w-full h-1 bg-bg-elevated rounded-full overflow-hidden mb-10">
          <div className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full progress-bar" />
        </div>

        <div className="space-y-3 text-left">
          {steps.map((step, i) => (
            <div
              key={i}
              className="fade-in flex items-center gap-3 text-sm text-text-secondary"
              style={{ animationDelay: `${i * 0.6}s`, animationFillMode: 'both' }}
            >
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
              </div>
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
