import type { ContadorData } from '@/features/contador/types';
import type { StatsData } from '@/features/stats/types';
import { mockContadorData, mockStatsData } from './mockData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';

export const contadorAPI = {
  getContador: async (): Promise<ContadorData> => {
    if (USE_MOCK_DATA) return mockContadorData;

    const res = await fetch(`${API_BASE_URL}/api/contador`);
    if (!res.ok) throw new Error('Failed to fetch contador');
    return res.json();
  },

  getEstadisticas: async (): Promise<StatsData> => {
    if (USE_MOCK_DATA) return mockStatsData;

    const res = await fetch(`${API_BASE_URL}/api/estadisticas`);
    if (!res.ok) throw new Error('Failed to fetch estadisticas');
    return res.json();
  },

  getPromesas: async () => {
    if (USE_MOCK_DATA) return mockStatsData.promesas;

    const res = await fetch(`${API_BASE_URL}/api/promesas`);
    if (!res.ok) throw new Error('Failed to fetch promesas');
    return res.json();
  },

  getErrores: async () => {
    if (USE_MOCK_DATA) return mockStatsData.topCaqueados;

    const res = await fetch(`${API_BASE_URL}/api/errores`);
    if (!res.ok) throw new Error('Failed to fetch errores');
    return res.json();
  },
};