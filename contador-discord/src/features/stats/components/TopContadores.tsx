import { FC } from 'react';
import type { Usuario } from '../types';
import { LoadingState } from '@/shared/components/LoadingState';

interface TopContadoresProps {
  usuarios: Usuario[];
  isLoading?: boolean;
}

export const TopContadores: FC<TopContadoresProps> = ({ usuarios, isLoading }) => {
  if (isLoading) return <div style={{ padding: 'clamp(0.75rem, 2vw, 1.5rem)' }}><LoadingState /></div>;

  return (
    <div style={{ padding: 'clamp(0.5rem, 1.5vw, 0.75rem) 0' }}>
      {usuarios.slice(0, 5).map((usuario, index) => (
        <div
          key={usuario.id}
          className={`flex items-center transition-colors hover:bg-amber-400/4 ${
            index === 0 ? 'bg-amber-400/6' : ''
          }`}
          style={{ gap: 'clamp(0.5rem, 1.5vw, 0.75rem)', padding: 'clamp(0.5rem, 1.5vw, 0.75rem)' }}
        >
          <span
            className="font-bold shrink-0"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)',
              minWidth: 'clamp(20px, 5vw, 30px)',
              color: index === 0 ? '#FBC208' : 'rgba(171,171,171,0.5)',
            }}
          >
            #{index + 1}
          </span>

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
            {usuario.nombre.substring(0, 2).toUpperCase()}
          </div>

          <span
            className="text-white flex-1"
            style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.95rem)' }}
          >
            {usuario.nombre}
          </span>

          <span
            className="font-bold shrink-0"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)',
              color: index === 0 ? '#FBC208' : 'rgba(255,255,255,0.8)',
            }}
          >
            {usuario.contador} pts
          </span>
        </div>
      ))}
    </div>
  );
};
