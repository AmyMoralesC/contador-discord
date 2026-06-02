import { FC } from 'react';

interface CounterDisplayProps {
  numero: number;
  isLoading?: boolean;
}

export const CounterDisplay: FC<CounterDisplayProps> = ({ numero, isLoading }) => {
  return (
    <div className="text-center mb-5 relative">

      {/* Breathing rings */}
      <div className="absolute top-1/2 left-1/2 w-56 h-56 rounded-full border border-amber-400/20 animate-breathe pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full pointer-events-none animate-breathe"
        style={{ transform: 'translate(-50%, -50%)', border: '0.5px solid rgba(251,194,8,0.08)', animationDelay: '0.5s' }} />

      {/* Rotating cross lines */}
      <div className="absolute top-1/2 left-1/2 w-64 h-64 pointer-events-none animate-rotate-slow"
        style={{ transform: 'translate(-50%, -50%)' }}>
        <div className="absolute top-1/2 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(251,194,8,0.2), transparent)', transform: 'translateY(-50%)' }} />
        <div className="absolute top-0 bottom-0 left-1/2 w-px"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(251,194,8,0.2), transparent)', transform: 'translateX(-50%)' }} />
      </div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 pointer-events-none animate-rotate-reverse"
        style={{ transform: 'translate(-50%, -50%)' }}>
        <div className="absolute top-1/2 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(251,194,8,0.15), transparent)', transform: 'translateY(-50%) rotate(45deg)' }} />
      </div>

      {/* Number with corner decorations */}
      <div className="relative inline-block px-6 py-4">
        {/* Corners */}
        <div className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 border-amber-400/35 rounded-tl" />
        <div className="absolute top-0 right-0 w-14 h-14 border-t-2 border-r-2 border-amber-400/35 rounded-tr" />
        <div className="absolute bottom-0 left-0 w-14 h-14 border-b-2 border-l-2 border-amber-400/35 rounded-bl" />
        <div className="absolute bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 border-amber-400/35 rounded-br" />

        {/* Outline number */}
        <h1
          className="relative z-10 font-bold leading-none tracking-tighter"
          style={{
            fontSize: 'clamp(80px, 10vw, 140px)',
            color: 'transparent',
            WebkitTextStroke: '2px #FBC208',
            letterSpacing: '-4px',
            fontFamily: "'Space Mono', monospace",
          }}
        >
          {isLoading ? '---' : numero}
        </h1>
      </div>
    </div>
  );
};
