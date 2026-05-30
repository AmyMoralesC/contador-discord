import { FC } from 'react';

export const ErrorState: FC = () => {
  return (
    <div className="text-center py-12">
      <p className="text-red-400 text-lg mb-4">Error al cargar los datos</p>
      <p className="text-gray-400 text-sm">Intenta refrescar la página</p>
    </div>
  );
};
