import { useState, useEffect } from 'react';
import { Activity, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0D0F0E]/80 backdrop-blur-md border-b border-white/[0.03]' : 'bg-transparent'
    }`}>
      <div className="max-w-[1240px] mx-auto px-10 h-16 md:h-20 flex items-center justify-between transition-all">
        {/* LOGO (LEFT) */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#006D3C] flex items-center justify-center shadow-lg shadow-[#006D3C]/10 transition-transform group-hover:scale-105">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <span className="font-heading font-extrabold text-[#FFFFFF] tracking-tight text-lg uppercase transition-opacity opacity-90 group-hover:opacity-100">Postera</span>
        </a>

        {/* NAV & CTA (RIGHT) */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-[#9CA3AF] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <a
            href="mailto:hello@postera.ai"
            className="pill-button pill-button-primary"
          >
            Contact
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#9CA3AF] hover:text-white"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D0F0E] border-t border-white/[0.05] animate-fade-in">
          <div className="px-10 py-10 space-y-8 text-left">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-xl font-bold font-heading text-[#9CA3AF] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
