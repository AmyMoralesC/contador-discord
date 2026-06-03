import type { ContadorData } from '@/features/contador/types';
import type { StatsData } from '@/features/stats/types';

export const mockContadorData: ContadorData = {
  numero: 261,
  diasSinArruinar: 10,
  ultimoUsuario: {
    nombre: 'Aryx',
    id: 'user-001',
  },
};

export const mockStatsData: StatsData = {
  topContadores: [
    { id: '1', nombre: 'DonCafecito', contador: 234 },
    { id: '2', nombre: 'Aryx', contador: 187 },
    { id: '3', nombre: 'ShadowByte', contador: 156 },
    { id: '4', nombre: 'JuanitoFPS', contador: 142 },
    { id: '5', nombre: 'RaijinX', contador: 128 },
  ],
  topCaqueados: [
    { id: '1', usuarioId: 'u1', usuarioNombre: 'Error404Skill', cantidad: 12 },
    { id: '2', usuarioId: 'u2', usuarioNombre: 'OniByte', cantidad: 8 },
    { id: '3', usuarioId: 'u3', usuarioNombre: 'Rosita', cantidad: 5 },
    { id: '4', usuarioId: 'u4', usuarioNombre: 'QuantumPanda', cantidad: 3 },
    { id: '5', usuarioId: 'u5', usuarioNombre: 'VoidWalker', cantidad: 2 },
  ],
  promesas: [
    {
      id: '1',
      usuarioId: '1',
      usuarioNombre: 'DonCafecito',
      promesa: 'Llegar a 500',
      numeroObjetivo: 500,
      numeroActual: 261,
    },
    {
      id: '2',
      usuarioId: '2',
      usuarioNombre: 'Aryx',
      promesa: 'Llegar a 1000',
      numeroObjetivo: 1000,
      numeroActual: 261,
    },
    {
      id: '3',
      usuarioId: '3',
      usuarioNombre: 'ShadowByte',
      promesa: 'Llegar a 750',
      numeroObjetivo: 750,
      numeroActual: 261,
    },
  ],
};