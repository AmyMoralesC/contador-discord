import { FC } from 'react';
import { useContador } from '@/features/contador/hooks/useContador';
import { useStats } from '@/features/stats/hooks/useStats';
import { CounterDisplay } from '@/features/contador/components/CounterDisplay';
import { DiasSinArruinar } from '@/features/contador/components/DiasSinArruinar';
import { UltimoContador } from '@/features/contador/components/UltimoContador';
import { TopContadores } from '@/features/stats/components/TopContadores';
import { TopCaqueados } from '@/features/stats/components/TopCaqueados';
import { Promesas } from '@/features/stats/components/Promesas';
import { Card } from '@/shared/components/Card';
import { ErrorState } from '@/shared/components/ErrorState';

export const Dashboard: FC = () => {
  const contadorQuery = useContador();
  const statsQuery = useStats();

  if (contadorQuery.error || statsQuery.error) return <ErrorState />;

  const contadorData = contadorQuery.data;
  const statsData = statsQuery.data;

  return (
    <div>
      {/* Counter section */}
      <DiasSinArruinar
        dias={contadorData?.diasSinArruinar ?? 0}
        isLoading={contadorQuery.isLoading}
      />
      <CounterDisplay
        numero={contadorData?.numero ?? 0}
        isLoading={contadorQuery.isLoading}
      />
      <UltimoContador
        nombre={contadorData?.ultimoUsuario.nombre ?? '-'}
        isLoading={contadorQuery.isLoading}
      />

      {/* Cards grid */}
      <div className="grid grid-cols-3 gap-5">
        <Card type="top-contadores" title="Top contadores" subtitle="Rankings de más números contados">
          <TopContadores
            usuarios={statsData?.topContadores ?? []}
            isLoading={statsQuery.isLoading}
          />
        </Card>

        <Card type="promesas" title="Promesas" subtitle="Objetivos de contadores">
          <Promesas
            promesas={statsData?.promesas ?? []}
            isLoading={statsQuery.isLoading}
          />
        </Card>

        <Card type="top-caqueados" title="Top caqueados" subtitle="Rankings de más errores">
          <TopCaqueados
            errores={statsData?.topCaqueados ?? []}
            isLoading={statsQuery.isLoading}
          />
        </Card>
      </div>
    </div>
  );
};
