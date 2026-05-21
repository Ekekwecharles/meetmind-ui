import { Search } from "lucide-react";

interface HelpHeroProps {
  onSearch: (value: string) => void;
}

export function HelpHero({ onSearch }: HelpHeroProps) {
  return (
    <section className="w-full bg-white pt-16 pb-8">
      <div className="max-w-[930px] mx-auto px-6 md:px-8">
        <div className="relative flex items-center justify-center min-h-[70px] max-w-md mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center">
            Help & Support
          </h1>
          {/* Decorative Figma SVG element */}
          <div className="absolute top-[-10px] right-[-50px] md:right-[-60px] pointer-events-none select-none">
            <svg width="65" height="60" viewBox="0 0 110 100" fill="none">
              <rect
                x="10"
                y="20"
                width="50"
                height="62"
                rx="5"
                stroke="#94a3b8"
                strokeWidth="1.8"
                fill="none"
              />
              <rect
                x="18"
                y="13"
                width="50"
                height="62"
                rx="5"
                stroke="#94a3b8"
                strokeWidth="1.8"
                fill="none"
              />
              <line
                x1="26"
                y1="34"
                x2="56"
                y2="34"
                stroke="#94a3b8"
                strokeWidth="1.4"
              />
              <line
                x1="26"
                y1="42"
                x2="56"
                y2="42"
                stroke="#94a3b8"
                strokeWidth="1.4"
              />
              <line
                x1="26"
                y1="50"
                x2="46"
                y2="50"
                stroke="#94a3b8"
                strokeWidth="1.4"
              />
              <path
                d="M88 18 L90 12 L92 18 L98 20 L92 22 L90 28 L88 22 L82 20 Z"
                stroke="#94a3b8"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M76 8 L77 5 L78 8 L81 9 L78 10 L77 13 L76 10 L73 9 Z"
                stroke="#94a3b8"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="relative mt-8 max-w-full">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8] pointer-events-none"
            size={16}
          />
          <input
            type="text"
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search for help articles, guides, and FAQs..."
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-[#E1E3E4] bg-[#F8FAFC]/50 text-[#0F172A] placeholder:text-[#94a3b8] text-sm focus:outline-none focus:border-[#1a6b6b] transition-
          />
        </div>
      </div>
    </section>
  );
}
