import { FC } from 'react';
import type { Promesa } from '../types';
import { LoadingState } from '@/shared/components/LoadingState';

interface PromesasProps {
  promesas: Promesa[];
  isLoading?: boolean;
}

export const Promesas: FC<PromesasProps> = ({ promesas, isLoading }) => {
  if (isLoading) return <LoadingState />;

  const porcentaje = (actual: number, objetivo: number) =>
    Math.round((actual / objetivo) * 100);

  return (
    <div className="space-y-3">
      {promesas.slice(0, 3).map((promesa) => (
        <div key={promesa.id} className="p-2 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold bg-linear-to-br from-amber-400 to-amber-600 text-black">
              {promesa.usuarioNombre.substring(0, 2).toUpperCase()}
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">{promesa.usuarioNombre}</p>
              <p className="text-gray-400 text-xs">«{promesa.promesa}»</p>
            </div>
          </div>
          <div className="bg-amber-400/15 rounded-full h-1 overflow-hidden">
            <div
              className="bg-amber-400 h-full transition-all duration-300"
              style={{ width: `${porcentaje(promesa.numeroActual, promesa.numeroObjetivo)}%` }}
            />
          </div>
          <p className="text-gray-500 text-xs mt-1">
            {promesa.numeroActual} / {promesa.numeroObjetivo}
          </p>
        </div>
      ))}
    </div>
  );
};
