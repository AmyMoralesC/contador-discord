import { FC } from 'react';
import type { Error as ErrorStats } from '../types';
import { LoadingState } from '@/shared/components/LoadingState';

interface TopCaqueadosProps {
  errores: ErrorStats[];
  isLoading?: boolean;
}

export const TopCaqueados: FC<TopCaqueadosProps> = ({ errores, isLoading }) => {
  if (isLoading) return <LoadingState />;

  return (
    <div className="space-y-2">
      {errores.slice(0, 5).map((error, index) => (
        <div key={error.id} className="flex items-center justify-between p-2 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-gray-500 min-w-5">
              #{index + 1}
            </span>
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold bg-gray-600 text-white">
              {error.usuarioNombre.substring(0, 2).toUpperCase()}
            </div>
            <p className="text-white text-sm">{error.usuarioNombre}</p>
          </div>
          <span className="font-semibold text-sm text-red-400">
            {error.cantidad} errores
          </span>
        </div>
      ))}
    </div>
  );
};
