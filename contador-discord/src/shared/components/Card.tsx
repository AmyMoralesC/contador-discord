import { FC, ReactNode } from 'react';

type CardType = 'top-contadores' | 'promesas' | 'top-caqueados';

interface CardProps {
  type: CardType;
  title: string;
  subtitle: string;
  children: ReactNode;
}

const CrownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="#FBC208" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
    <path d="M5 20h14" />
  </svg>
);

const TargetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="#FBC208" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const PoopIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="#FBC208" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c0 0-3.5 2.5-3.5 6 0 1.2.4 2.2.9 3C8.4 12.5 7 13.7 7 15.5 7 18 9 20 12 20s5-2 5-4.5c0-1.8-1.4-3-2.4-3.5.5-.8.9-1.8.9-3C15.5 4.5 12 2 12 2z" />
    <path d="M9 20c0 .8 1.3 1.5 3 1.5s3-.7 3-1.5" />
  </svg>
);

const iconMap: Record<CardType, ReactNode> = {
  'top-contadores': <CrownIcon />,
  'promesas': <TargetIcon />,
  'top-caqueados': <PoopIcon />,
};

export const Card: FC<CardProps> = ({ type, title, subtitle, children }) => {
  return (
    <div className="bg-white/4 border border-amber-400/20 rounded-2xl overflow-hidden backdrop-blur-md hover:bg-white/6 transition-colors">

      {/* Traffic lights + title + icon */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-amber-400/10">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.75 h-2.75 rounded-full bg-[#ED6158]" />
            <div className="w-2.75 h-2.75 rounded-full bg-[#FCC02E]" />
            <div className="w-2.75 h-2.75 rounded-full bg-[#5FC038]" />
          </div>
          <span
            className="text-white/70 text-[11px] tracking-[1px] uppercase"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            {title}
          </span>
        </div>
        <div className="opacity-80">{iconMap[type]}</div>
      </div>

      {/* Subtitle */}
      <div className="px-4 py-2 border-b border-white/4">
        <p
          className="text-white/40 text-[11px] tracking-[0.5px]"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {subtitle}
        </p>
      </div>

      {/* Content */}
      <div>{children}</div>
    </div>
  );
};
