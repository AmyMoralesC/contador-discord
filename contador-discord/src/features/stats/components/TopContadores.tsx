import { FC } from 'react';
import type { Usuario } from '../types';
import { LoadingState } from '@/shared/components/LoadingState';

interface TopContadoresProps {
  usuarios: Usuario[];
  isLoading?: boolean;
}

export const TopContadores: FC<TopContadoresProps> = ({ usuarios, isLoading }) => {
  if (isLoading) return <div className="p-4"><LoadingState /></div>;

  return (
    <div className="py-2">
      {usuarios.slice(0, 5).map((usuario, index) => (
        <div
          key={usuario.id}
          className={`flex items-center gap-3 px-4 py-2 transition-colors hover:bg-amber-400/4 ${
            index === 0 ? 'bg-amber-400/6' : ''
          }`}
        >
          <span
            className="text-xs font-bold min-w-6"
            style={{
              fontFamily: "'Space Mono', monospace",
              color: index === 0 ? '#FBC208' : 'rgba(171,171,171,0.5)',
            }}
          >
            #{index + 1}
          </span>

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
            {usuario.nombre.substring(0, 2).toUpperCase()}
          </div>

          <span className="text-white text-[13px] flex-1">{usuario.nombre}</span>

          <span
            className="text-xs font-bold"
            style={{
              fontFamily: "'Space Mono', monospace",
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
