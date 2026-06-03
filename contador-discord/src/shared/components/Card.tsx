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
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FBC208" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4c0-1 1-1.5 1.8-2" />
    <path d="M9.5 8C9.5 6.8 10.5 6 12 6C13.5 6 14.5 6.8 14.5 8C14.5 9.2 13.3 10 12 10C10.7 10 9.5 9.2 9.5 8Z" />
    <path d="M7.5 12C7.5 10.2 9.3 9.2 12 9.2C14.7 9.2 16.5 10.2 16.5 12C16.5 13.8 14.7 14.8 12 14.8C9.3 14.8 7.5 13.8 7.5 12Z" />
    <path d="M5.5 17C5.5 14.8 8 13.5 12 13.5C16 13.5 18.5 14.8 18.5 17C18.5 19.2 16 20.5 12 20.5C8 20.5 5.5 19.2 5.5 17Z" />
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
      <div
        className="flex items-center justify-between border-b border-amber-400/10"
        style={{ padding: 'clamp(0.6rem, 1.5vw, 1rem)' }}
      >
        <div className="flex items-center gap-[clamp(0.5rem, 1vw, 0.75rem)]">
          <div className="flex gap-1.5">
            <div className="w-2.75 h-2.75 rounded-full bg-[#ED6158]" />
            <div className="w-2.75 h-2.75 rounded-full bg-[#FCC02E]" />
            <div className="w-2.75 h-2.75 rounded-full bg-[#5FC038]" />
          </div>
          <span
            className="text-white/70 uppercase px-2"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)',
              letterSpacing: 'clamp(0.5px, 0.1vw, 1px)',
            }}
          >
            {title}
          </span>
        </div>
        <div className="opacity-80">{iconMap[type]}</div>
      </div>

      {/* Subtitle */}
      <div
        className="border-b border-white/4"
        style={{ padding: 'clamp(0.4rem, 1vw, 0.6rem) clamp(0.75rem, 2vw, 1rem)' }}
      >
        <p
          className="text-white/40"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 'clamp(0.6rem, 1.3vw, 0.8rem)',
            letterSpacing: 'clamp(0.3px, 0.1vw, 0.5px)',
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Content */}
      <div>{children}</div>
    </div>
  );
};
