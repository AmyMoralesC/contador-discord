import { FC } from 'react';

interface UltimoContadorProps {
  nombre: string;
  isLoading?: boolean;
}

export const UltimoContador: FC<UltimoContadorProps> = ({ nombre, isLoading }) => {
  return (
    <div className="text-center mb-[clamp(3rem,8vh,4rem)]">
      <p
        className="text-white/50 uppercase"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 'clamp(0.7rem, 1.8vw, 0.95rem)',
          letterSpacing: 'clamp(1px, 0.2vw, 2px)',
        }}
      >
        Último usuario en contar:{' '}
        <span className="text-amber-400 font-bold">
          {isLoading ? '-' : nombre}
        </span>
      </p>
    </div>
  );
};
