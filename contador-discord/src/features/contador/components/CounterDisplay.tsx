import { FC } from 'react';

interface CounterDisplayProps {
  numero: number;
  isLoading?: boolean;
}

export const CounterDisplay: FC<CounterDisplayProps> = ({ numero, isLoading }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-8xl font-bold text-amber-400 animate-pulse">
        {isLoading ? '-' : numero}
      </h1>
    </div>
  );
};
