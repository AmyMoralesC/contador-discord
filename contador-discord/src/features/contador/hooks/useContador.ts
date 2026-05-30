import { useQuery } from '@tanstack/react-query';
import { contadorAPI } from '@/shared/services/api';
import type { ContadorData } from '../types';

export const useContador = () => {
  return useQuery<ContadorData>({
    queryKey: ['contador'],
    queryFn: contadorAPI.getContador,
    refetchInterval: 3000,
    staleTime: 1000,
  });
};
