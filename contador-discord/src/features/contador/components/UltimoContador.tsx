import { FC } from 'react';

interface UltimoContadorProps {
  nombre: string;
  isLoading?: boolean;
}

export const UltimoContador: FC<UltimoContadorProps> = ({ nombre, isLoading }) => {
  return (
    <div className="text-center mb-16">
      <p className="text-white text-base tracking-wide">
        Último usuario en contar:{' '}
        <span className="text-amber-400 font-semibold">
          {isLoading ? '-' : nombre}
        </span>
      </p>
    </div>
  );
};
