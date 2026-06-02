import { FC } from 'react';
import type { Promesa } from '../types';
import { LoadingState } from '@/shared/components/LoadingState';

interface PromesasProps {
  promesas: Promesa[];
  isLoading?: boolean;
}

export const Promesas: FC<PromesasProps> = ({ promesas, isLoading }) => {
  if (isLoading) return <div className="p-4"><LoadingState /></div>;

  const porcentaje = (actual: number, objetivo: number) =>
    Math.min(100, Math.round((actual / objetivo) * 100));

  return (
    <div className="px-4 py-3 flex flex-col gap-4">
      {promesas.slice(0, 3).map((promesa, index) => (
        <div
          key={promesa.id}
          className={index > 0 ? 'border-t border-white/5 pt-4' : ''}
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-7.5 h-7.5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
              style={{
                fontFamily: "'Space Mono', monospace",
                background: index === 0
                  ? 'linear-gradient(135deg, #FBC208, #E6A800)'
                  : 'rgba(255,255,255,0.1)',
                color: index === 0 ? '#000' : 'rgba(255,255,255,0.8)',
              }}
            >
              {promesa.usuarioNombre.substring(0, 2).toUpperCase()}
            </div>
            <div className="flex-1">
              <p className="text-white text-[13px] font-medium m-0">
                {promesa.usuarioNombre}
              </p>
              <p
                className="text-white/50 text-[11px] m-0"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                «{promesa.promesa}»
              </p>
            </div>
          </div>

          <div className="bg-amber-400/12 rounded h-3 overflow-hidden">
            <div
              className="h-full rounded transition-all duration-300"
              style={{
                width: `${porcentaje(promesa.numeroActual, promesa.numeroObjetivo)}%`,
                background: 'linear-gradient(90deg, #FBC208, #FFD849)',
              }}
            />
          </div>
          <p
            className="text-white/30 text-[10px] mt-1"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            {promesa.numeroActual} / {promesa.numeroObjetivo}
          </p>
        </div>
      ))}
    </div>
  );
};
