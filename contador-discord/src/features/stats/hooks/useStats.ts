import { useQuery } from '@tanstack/react-query';
import { contadorAPI } from '@/shared/services/api';
import type { StatsData } from '../types';

export const useStats = () => {
  return useQuery<StatsData>({
    queryKey: ['stats'],
    queryFn: contadorAPI.getEstadisticas,
    refetchInterval: 5000,
    staleTime: 2000,
  });
};
