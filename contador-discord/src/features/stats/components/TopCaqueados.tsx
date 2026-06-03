import { FC } from 'react';
import type { Error as ErrorStats } from '../types';
import { LoadingState } from '@/shared/components/LoadingState';

interface TopCaqueadosProps {
  errores: ErrorStats[];
  isLoading?: boolean;
}

const errorColors = ['#FF6B6B', '#FF8888', '#FF9999', '#FFB3B3', '#FFB3B3'];

export const TopCaqueados: FC<TopCaqueadosProps> = ({ errores, isLoading }) => {
  if (isLoading) return <div style={{ padding: 'clamp(0.75rem, 2vw, 1.5rem)' }}><LoadingState /></div>;

  return (
    <div style={{ padding: 'clamp(0.5rem, 1.5vw, 0.75rem) 0' }}>
      {errores.slice(0, 5).map((error, index) => (
        <div
          key={error.id}
          className="flex items-center transition-colors hover:bg-amber-400/4"
          style={{ gap: 'clamp(0.5rem, 1.5vw, 0.75rem)', padding: 'clamp(0.5rem, 1.5vw, 0.75rem)' }}
        >
          <span
            className="font-bold shrink-0 text-white/40"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)',
              minWidth: 'clamp(20px, 5vw, 30px)',
            }}
          >
            #{index + 1}
          </span>

          <div
            className="rounded-full flex items-center justify-center shrink-0 bg-white/10 text-white/80"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)',
              fontWeight: 700,
              width: 'clamp(28px, 5vw, 40px)',
              height: 'clamp(28px, 5vw, 40px)',
            }}
          >
            {error.usuarioNombre.substring(0, 2).toUpperCase()}
          </div>

          <span
            className="text-white flex-1"
            style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.95rem)' }}
          >
            {error.usuarioNombre}
          </span>

          <span
            className="font-bold shrink-0"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)',
              color: errorColors[index] ?? '#FFB3B3',
            }}
          >
            {error.cantidad} errores
          </span>
        </div>
      ))}
    </div>
  );
};
