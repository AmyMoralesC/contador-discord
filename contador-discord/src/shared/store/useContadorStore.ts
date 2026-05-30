import { create } from 'zustand';

interface ContadorState {
  // Estados
  numeroActual: number;
  diasSinArruinar: number;
  ultimoUsuario: string;

  // Acciones
  setNumeroActual: (numero: number) => void;
  setDiasSinArruinar: (dias: number) => void;
  setUltimoUsuario: (usuario: string) => void;
  reset: () => void;
}

const initialState = {
  numeroActual: 0,
  diasSinArruinar: 0,
  ultimoUsuario: '',
};

export const useContadorStore = create<ContadorState>((set) => ({
  ...initialState,

  setNumeroActual: (numero) => set({ numeroActual: numero }),
  setDiasSinArruinar: (dias) => set({ diasSinArruinar: dias }),
  setUltimoUsuario: (usuario) => set({ ultimoUsuario: usuario }),
  reset: () => set(initialState),
}));
