import { FC } from 'react';

interface CounterDisplayProps {
  numero: number;
  isLoading?: boolean;
}

export const CounterDisplay: FC<CounterDisplayProps> = ({ numero, isLoading }) => {
  return (
    <div className="text-center mb-[clamp(1.5rem,4vh,2rem)] relative">

      {/* Breathing rings - escaladas responsivamente */}
      <div className="absolute top-1/2 left-1/2 rounded-full border border-amber-400/20 animate-breathe pointer-events-none"
        style={{
          width: 'clamp(200px, 20vw, 280px)',
          height: 'clamp(200px, 20vw, 280px)',
          transform: 'translate(-50%, -50%)',
        }} />
      <div className="absolute top-1/2 left-1/2 rounded-full pointer-events-none animate-breathe"
        style={{
          width: 'clamp(240px, 24vw, 360px)',
          height: 'clamp(240px, 24vw, 360px)',
          border: '0.5px solid rgba(251,194,8,0.08)',
          transform: 'translate(-50%, -50%)',
          animationDelay: '0.5s',
        }} />

      {/* Rotating cross lines */}
      <div className="absolute top-1/2 left-1/2 pointer-events-none animate-rotate-slow"
        style={{
          width: 'clamp(220px, 22vw, 320px)',
          height: 'clamp(220px, 22vw, 320px)',
          transform: 'translate(-50%, -50%)',
        }}>
        <div className="absolute top-1/2 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(251,194,8,0.2), transparent)', transform: 'translateY(-50%)' }} />
        <div className="absolute top-0 bottom-0 left-1/2 w-px"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(251,194,8,0.2), transparent)', transform: 'translateX(-50%)' }} />
      </div>
      <div className="absolute top-1/2 left-1/2 pointer-events-none animate-rotate-reverse"
        style={{
          width: 'clamp(160px, 16vw, 240px)',
          height: 'clamp(160px, 16vw, 240px)',
          transform: 'translate(-50%, -50%)',
        }}>
        <div className="absolute top-1/2 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(251,194,8,0.15), transparent)', transform: 'translateY(-50%) rotate(45deg)' }} />
      </div>

      {/* Number with corner decorations */}
      <div className="relative inline-block"
        style={{
          padding: 'clamp(1rem, 2vw, 1.5rem)',
        }}>
          
        <div className="absolute top-0 left-0 border-t-2 border-l-2 border-amber-400/35 rounded-tl"
          style={{
            width: 'clamp(40px, 5vw, 60px)',
            height: 'clamp(40px, 5vw, 60px)',
          }} />
        <div className="absolute top-0 right-0 border-t-2 border-r-2 border-amber-400/35 rounded-tr"
          style={{
            width: 'clamp(40px, 5vw, 60px)',
            height: 'clamp(40px, 5vw, 60px)',
          }} />
        <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-amber-400/35 rounded-bl"
          style={{
            width: 'clamp(40px, 5vw, 60px)',
            height: 'clamp(40px, 5vw, 60px)',
          }} />
        <div className="absolute bottom-0 right-0 border-b-2 border-r-2 border-amber-400/35 rounded-br"
          style={{
            width: 'clamp(40px, 5vw, 60px)',
            height: 'clamp(40px, 5vw, 60px)',
          }} />

        <h1
          className="relative z-10 font-bold leading-none tracking-tighter"
          style={{
            fontSize: 'clamp(100px, 12vw, 180px)',
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
