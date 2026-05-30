import type { ContadorData } from '@/features/contador/types';
import type { StatsData } from '@/features/stats/types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const contadorAPI = {
  getContador: async (): Promise<ContadorData> => {
    const res = await fetch(`${API_BASE_URL}/api/contador`);
    if (!res.ok) throw new Error('Failed to fetch contador');
    return res.json();
  },

  getEstadisticas: async (): Promise<StatsData> => {
    const res = await fetch(`${API_BASE_URL}/api/estadisticas`);
    if (!res.ok) throw new Error('Failed to fetch estadisticas');
    return res.json();
  },

  getPromesas: async () => {
    const res = await fetch(`${API_BASE_URL}/api/promesas`);
    if (!res.ok) throw new Error('Failed to fetch promesas');
    return res.json();
  },

  getErrores: async () => {
    const res = await fetch(`${API_BASE_URL}/api/errores`);
    if (!res.ok) throw new Error('Failed to fetch errores');
    return res.json();
  },
};
