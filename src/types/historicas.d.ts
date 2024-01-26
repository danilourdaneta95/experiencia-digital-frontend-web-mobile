export interface HistoricasData {
  historicas: Historicas
}

export interface Historicas {
  periodos: Periodo[];
}

export interface Periodo {
  anyo: number;
  periodo: string;
  cursos: Curso[];
}

export interface Curso {
  nombre: string;
  nota: number;
  concepto: string;
  aprobado?: boolean;
}