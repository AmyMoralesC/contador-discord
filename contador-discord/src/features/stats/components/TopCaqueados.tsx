import { FC } from 'react';
import type { Error as ErrorStats } from '../types';
import { LoadingState } from '@/shared/components/LoadingState';

interface TopCaqueadosProps {
  errores: ErrorStats[];
  isLoading?: boolean;
}

const errorColors = ['#FF6B6B', '#FF8888', '#FF9999', '#FFB3B3', '#FFB3B3'];

export const TopCaqueados: FC<TopCaqueadosProps> = ({ errores, isLoading }) => {
  if (isLoading) return <div className="p-4"><LoadingState /></div>;

  return (
    <div className="py-2">
      {errores.slice(0, 5).map((error, index) => (
        <div
          key={error.id}
          className="flex items-center gap-3 px-4 py-2 transition-colors hover:bg-amber-400/4"
        >
          <span
            className="text-xs font-bold min-w-6 text-white/40"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            #{index + 1}
          </span>

          <div
            className="w-7.5 h-7.5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 bg-white/10 text-white/80"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            {error.usuarioNombre.substring(0, 2).toUpperCase()}
          </div>

          <span className="text-white text-[13px] flex-1">{error.usuarioNombre}</span>

          <span
            className="text-xs font-bold"
            style={{
              fontFamily: "'Space Mono', monospace",
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
