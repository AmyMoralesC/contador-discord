import { FC } from 'react';

interface DiasSinArruinarProps {
  dias: number;
  isLoading?: boolean;
}

export const DiasSinArruinar: FC<DiasSinArruinarProps> = ({ dias, isLoading }) => {
  return (
    <div className="text-center mb-6">
      <p
        className="text-white/60 text-xs tracking-[2px] uppercase"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        Días sin arruinar el contador:{' '}
        <span className="text-amber-400 font-bold text-sm">
          {isLoading ? '-' : dias}
        </span>
      </p>
    </div>
  );
};
