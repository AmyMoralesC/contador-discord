import { FC } from 'react';
import type { Usuario } from '../types';
import { LoadingState } from '@/shared/components/LoadingState';

interface TopContadoresProps {
  usuarios: Usuario[];
  isLoading?: boolean;
}

export const TopContadores: FC<TopContadoresProps> = ({ usuarios, isLoading }) => {
  if (isLoading) return <LoadingState />;

  return (
    <div className="space-y-2">
      {usuarios.slice(0, 5).map((usuario, index) => (
        <div
          key={usuario.id}
          className={`flex items-center justify-between p-2 rounded-lg ${
            index === 0 ? 'bg-amber-400/10' : ''
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`font-bold text-sm min-w-5 ${
                index === 0 ? 'text-amber-400' : 'text-gray-500'
              }`}
            >
              #{index + 1}
            </span>
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                index === 0
                  ? 'bg-linear-to-br from-amber-400 to-amber-600 text-black'
                  : 'bg-gray-600 text-white'
              }`}
            >
              {usuario.nombre.substring(0, 2).toUpperCase()}
            </div>
            <p className="text-white text-sm">{usuario.nombre}</p>
          </div>
          <span
            className={`font-semibold text-sm ${
              index === 0 ? 'text-amber-400' : 'text-white'
            }`}
          >
            {usuario.contador} pts
          </span>
        </div>
      ))}
    </div>
  );
};
