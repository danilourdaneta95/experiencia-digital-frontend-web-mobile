export interface CalificacionesData {
  calificaciones: Calificaciones
}

export interface Calificaciones {
  asignaturas: Asignatura[]
}

export interface Asignatura {
  nombre: string
  evaluaciones: Evaluacion[]
  requisitos: Requisito[]
}

export interface Evaluacion {
  nombre: string
  nota: number
  ponderacion: number
}

export interface Requisito {
  nombre: string
  detalle: string
}
