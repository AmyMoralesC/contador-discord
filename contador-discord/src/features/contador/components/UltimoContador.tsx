import { FC } from 'react';

interface UltimoContadorProps {
  nombre: string;
  isLoading?: boolean;
}

export const UltimoContador: FC<UltimoContadorProps> = ({ nombre, isLoading }) => {
  return (
    <div className="text-center mb-14">
      <p
        className="text-white/50 text-xs tracking-[2px] uppercase"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        Último usuario en contar:{' '}
        <span className="text-amber-400 font-bold">
          {isLoading ? '-' : nombre}
        </span>
      </p>
    </div>
  );
};
