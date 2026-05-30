import { FC } from 'react';

interface DiasSinArruinarProps {
  dias: number;
  isLoading?: boolean;
}

export const DiasSinArruinar: FC<DiasSinArruinarProps> = ({ dias, isLoading }) => {
  return (
    <div className="text-center mb-12">
      <p className="text-white text-base tracking-wide">
        Días sin arruinar el contador:{' '}
        <span className="text-amber-400 font-semibold text-xl">
          {isLoading ? '-' : dias}
        </span>
      </p>
    </div>
  );
};
