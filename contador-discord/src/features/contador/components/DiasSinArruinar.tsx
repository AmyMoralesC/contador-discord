import { FC } from 'react';

interface DiasSinArruinarProps {
  dias: number;
  isLoading?: boolean;
}

export const DiasSinArruinar: FC<DiasSinArruinarProps> = ({ dias, isLoading }) => {
  return (
    <div className="text-center mb-[clamp(1.5rem,5vh,2rem)]">
      <p
        className="text-white/60 uppercase"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 'clamp(0.75rem, 2vw, 1rem)',
          letterSpacing: 'clamp(1px, 0.2vw, 2px)',
        }}
      >
        Días sin arruinar el contador:{' '}
        <span className="text-amber-400 font-bold" style={{ fontSize: 'clamp(0.875rem, 2.2vw, 1.125rem)' }}>
          {isLoading ? '-' : dias}
        </span>
      </p>
    </div>
  );
};
