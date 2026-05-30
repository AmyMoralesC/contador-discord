export interface Usuario {
  id: string;
  nombre: string;
  contador: number;
}

export interface Promesa {
  id: string;
  usuarioId: string;
  usuarioNombre: string;
  promesa: string;
  numeroObjetivo: number;
  numeroActual: number;
}

export interface Error {
  id: string;
  usuarioId: string;
  usuarioNombre: string;
  cantidad: number;
}

export interface StatsData {
  topContadores: Usuario[];
  topCaqueados: Error[];
  promesas: Promesa[];
}
