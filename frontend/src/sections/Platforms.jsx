import { TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '../components/BrandIcons';
import { ChevronRight } from 'lucide-react';

const PLATFORMS = [
  {
    icon: TwitterIcon, name: "Twitter / X", color: "#1DA1F2",
    bg: "from-sky-500/10 to-transparent",
    features: ["Short post & thread analysis", "Hook style classification", "Engagement pattern scoring", "Posting cadence insights"],
  },
  {
    icon: InstagramIcon, name: "Instagram", color: "#E4405F",
    bg: "from-pink-500/10 to-transparent",
    features: ["Caption style analysis", "Carousel text extraction", "Reel caption patterns", "Content mix analysis"],
  },
  {
    icon: LinkedinIcon, name: "LinkedIn", color: "#0A66C2",
    bg: "from-blue-600/10 to-transparent",
    features: ["Thought leadership scoring", "Authority-building analysis", "Audience response trends", "Professional tone detection"],
  },
  {
    icon: YoutubeIcon, name: "YouTube", color: "#FF0000",
    bg: "from-red-500/10 to-transparent",
    features: ["Title pattern analysis", "Description optimization", "Transcript-based insights", "Topic clustering"],
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="section-padding bg-[#0D0F0E] border-t border-white/[0.03]">
      <div className="max-w-[1240px] mx-auto px-10">
        {/* Header - Left-Aligned */}
        <div className="max-w-[620px] mb-24">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#006D3C] mb-6">Supported Platforms</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight mb-8">
            Multi-platform <i className="italic font-heading text-[#E5E7EB]">intelligence</i>.
          </h2>
          <p className="text-lg text-[#9CA3AF] opacity-80 leading-relaxed">
            Postra understands the nuances of each network. No more guessing what to post.
          </p>
        </div>

        {/* 4 Cards - Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLATFORMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="pill-card p-10 group transition-all hover:bg-white/[0.04] text-left">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.bg} flex items-center justify-center mb-10 transition-transform group-hover:scale-105`}>
                  <Icon className="w-6 h-6" style={{ color: p.color }} />
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-8 tracking-tight uppercase">{p.name}</h3>
                <ul className="space-y-4 mb-2">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#9CA3AF] leading-snug group-hover:text-[#E5E7EB] transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#006D3C] mt-[6px] shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
