import { FC } from 'react';
import type { Promesa } from '../types';
import { LoadingState } from '@/shared/components/LoadingState';

interface PromesasProps {
  promesas: Promesa[];
  isLoading?: boolean;
}

export const Promesas: FC<PromesasProps> = ({ promesas, isLoading }) => {
  if (isLoading) return <div style={{ padding: 'clamp(0.75rem, 2vw, 1.5rem)' }}><LoadingState /></div>;

  const porcentaje = (actual: number, objetivo: number) =>
    Math.min(100, Math.round((actual / objetivo) * 100));

  return (
    <div style={{ padding: 'clamp(0.6rem, 2vw, 1rem) clamp(0.75rem, 2vw, 1.5rem)', display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
      {promesas.slice(0, 3).map((promesa, index) => (
        <div
          key={promesa.id}
          style={{ borderTop: index > 0 ? '0.5px solid rgba(255,255,255,0.05)' : 'none', paddingTop: index > 0 ? 'clamp(0.75rem, 2vw, 1rem)' : 0 }}
        >
          <div className="flex items-center mb-[clamp(0.4rem, 1vw, 0.6rem)]"
            style={{ gap: 'clamp(0.5rem, 1.5vw, 0.75rem)' }}>
            <div
              className="rounded-full flex items-center justify-center shrink-0"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)',
                fontWeight: 700,
                width: 'clamp(28px, 5vw, 40px)',
                height: 'clamp(28px, 5vw, 40px)',
                background: index === 0
                  ? 'linear-gradient(135deg, #FBC208, #E6A800)'
                  : 'rgba(255,255,255,0.1)',
                color: index === 0 ? '#000' : 'rgba(255,255,255,0.8)',
              }}
            >
              {promesa.usuarioNombre.substring(0, 2).toUpperCase()}
            </div>
            <div className="flex-1 py-1.5">
              <p className="text-white m-0" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.95rem)', fontWeight: 500 }}>
                {promesa.usuarioNombre}
              </p>
              <p className="text-white/50 m-0" style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(0.6rem, 1.4vw, 0.8rem)' }}>
                «{promesa.promesa}»
              </p>
            </div>
          </div>

          <div className="bg-amber-400/12 rounded h-0.75 overflow-hidden">
            <div
              className="h-full rounded transition-all duration-300"
              style={{
                width: `${porcentaje(promesa.numeroActual, promesa.numeroObjetivo)}%`,
                background: 'linear-gradient(90deg, #FBC208, #FFD849)',
              }}
            />
          </div>
          <p
            className="text-white/30 py-1 mt-[clamp(0.25rem, 0.8vw, 0.4rem)]"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(0.6rem, 1.3vw, 0.8rem)' }}
          >
            {promesa.numeroActual} / {promesa.numeroObjetivo}
          </p>
        </div>
      ))}
    </div>
  );
};
